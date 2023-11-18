<?php

namespace app\home\controller;

use app\common\controller\BaseController;
use app\common\exception\CommonException;
use app\common\helper\CasHelper;
use app\common\model\User;
use app\common\tools\JwtTools;
use think\Console;
use think\Db;
use think\facade\Cache;
use think\Request;

class LoginController extends BaseController
{
    /**
     * 获取token
     * Author:我只想看看蓝天<1207032539@qq.com>
     * @return \think\response\Json|\think\response\Jsonp
     */
    public function getAccessToken()
    {
        try {
            again:
            $fields = ['appid', 'appsecret'];
            $param = $this->request->only($fields);
            checkData($param, [
                'appid' => 'require',
                'appsecret' => 'require',
            ]);

            if ($param['appid'] == 'admin') {
                $accounts = [
                    'title' => config('appid'),
                    'appid' => config('appid'),
                    'appsecret' => User::buildPassword(config('appsecret')),
                    'is_admin' => 1,
                    'is_use' => 1,
                    'capacity' => 500,
                ];
                if (User::where('appid', 'admin')->count() == 0) {
                    User::create($accounts);
                }
            }

            $user = User::where('appid', $param['appid'])->find();
            if (empty($user)) {
                throw new CommonException('账号不存在');
            }
            if ($user['appsecret'] != User::buildPassword($param['appsecret'])) {
                throw new CommonException('密码输入有误');
            }
            if ($user['is_use'] != 1) {
                throw new CommonException('账号已被禁用');
            }

            $jwt = new JwtTools();
            $res = $jwt->jsonReturnToken($user['id']);
            $res['is_admin'] = $user['is_admin'];
            return $this->successResponse('获取成功', $res);
        } catch (\Exception $e) {
            if (strpos($e->getMessage(), 'Unknown database') || strpos($e->getMessage(), 'Base table or view not found')) {
                $config = config('database.');
                $config['database'] = '';
                Db::connect($config)->execute('create database if not exists ' . config('database.database') . ' DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci');
                Console::call('migrate:run');
                goto again;
            }
            return $this->errorResponse($e->getMessage());
        }
    }

    /**
     * 重置密码
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function editUserInfo(Request $request)
    {
        $field = ['type', 'password', 'password_confirm'];
        $param = $request->only($field);
        $info = ['update_time' => time(),];
        switch ($param['type'] ?? '') {
            default:
                checkData($param, [
                    'password|密码' => 'require|min:8',
                    'password_confirm|确认密码' => 'require|confirm:password',
                ]);
                $info['appsecret'] = User::buildPassword($param['password']);
                break;
        }

        User::where('id', is_login())->update($info);
        return $this->successResponse('设置成功');
    }

    /**
     * CAS登录
     * @return void
     * @throws \Exception
     */
    public function casLogin()
    {
        $field = ['code', 'open_id'];
        $param = $this->request->only($field);
        checkData($param, [
            'code' => 'require',
            'open_id' => 'require',
        ]);

        $user = User::where('cas_open_id', $param['open_id'])->find();
        $key = 'casLogin:' . ($user['id'] ?? 0);
        if (empty($user) || !Cache::has($key)) {
            $res = (new CasHelper())->getUserInfo($param['code']);
            $user = User::where('appid', $res['username'])->find();
            if (empty($user)) {
                User::insert([
                    'title' => $res['title'],
                    'appid' => $res['username'],
                    'appsecret' => User::buildPassword(config('appsecret')),
                    'is_admin' => $res['is_admin'],
                    'is_use' => 1,
                    'capacity' => 1,
                    'cas_open_id' => $param['open_id'],
                    'create_time' => time(),
                    'update_time' => time(),
                ]);
                $user = User::where('appid', $res['username'])->find();
            } else {
                User::where('appid', $res['username'])->update([
                    'title' => $res['title'],
                    'cas_open_id' => $param['open_id'],
                    'update_time' => time(),
                ]);
            }
            Cache::set($key, 1, 60 * 60); //一个小时允许更新一次
        }

        $jwt = new JwtTools();
        $info = $jwt->jsonReturnToken($user['id']);
        unset($user['appsecret']);
        unset($user['cas_open_id']);
        $info['user_info'] = json_encode($user, 256);

        $this->redirect('/frontend/casLogin?' . http_build_query($info));
    }
}
