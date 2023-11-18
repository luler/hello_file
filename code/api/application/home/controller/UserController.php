<?php

namespace app\home\controller;

use app\common\controller\BaseController;
use app\common\exception\CommonException;
use app\common\helper\PageHelper;
use app\common\model\User;
use app\common\model\UserMedia;
use think\Request;

class UserController extends BaseController
{
    protected $beforeActionList = [
        'first'
    ];

    protected function first()
    {
        if (!User::isSuperAdmin()) {
            throw new CommonException('无权访问');
        }
    }

    /**
     * 获取用户列表
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws CommonException
     * @author luler <1207032539@qq.com>
     */
    public function getUserList(Request $request)
    {
        $fields = ['search', 'is_drop_data',];
        $param = $request->only($fields);
        $where = [];
        if (!empty($param['search'])) {
            $where[] = ['a.appid|a.title', 'like', "%{$param['search']}%"];
        }

        $field = 'a.id,a.title,a.appid';
        if (empty($param['is_drop_data'])) {
            $field .= ',a.capacity,a.is_admin,b.title as creator_name,b.appid as creator_appid,a.is_use,a.create_time';
        }

        $res = (new PageHelper(new User()))
            ->alias('a')
            ->join('user b', 'a.creator_uid=b.id', 'left')
            ->where($where)
            ->order('a.id', 'desc')
            ->autoPage(empty($param['is_drop_data']))
            ->field($field)
            ->get();

        foreach ($res['list'] as &$value) {
            if (empty($param['is_drop_data'])) {
                $has_use_capacity = UserMedia::alias('a')
                    ->join('media b', 'a.media_id=b.id')
                    ->where('a.uid', $value['id'])
                    ->sum('b.file_size');
                $has_use_capacity = convertSize($has_use_capacity);
                $value['capacity_str'] = $has_use_capacity . '/' . $value['capacity'] . 'GB';
            }
        }

        return $this->successResponse('获取成功', $res);
    }


    /**
     * 添加用户
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws CommonException
     * @author luler <1207032539@qq.com>
     */
    public function addUser(Request $request)
    {
        $fields = ['title', 'appid', 'appsecret', 'capacity', 'is_admin'];
        $param = $request->only($fields);
        checkData($param, [
            'title|名称' => 'require',
            'appid|appid' => 'require|alphaNum|unique:user',
            'appsecret|appsecret' => 'require|min:6',
            'capacity|磁盘容量' => 'require|integer|egt:0',
            'is_admin|用户类型' => 'require|in:0,1',
        ]);

        $param['creator_uid'] = is_login();
        $param['appsecret'] = User::buildPassword($param['appsecret']);
        User::create($param);
        return $this->successResponse('添加成功');
    }

    /**
     * 编辑用户
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws CommonException
     * @author luler <1207032539@qq.com>
     */
    public function editUser(Request $request)
    {
        $fields = ['title', 'appsecret', 'capacity', 'is_admin', 'is_use', 'id'];
        $param = $request->only($fields);
        checkData($param, [
            'id|用户id' => 'require|integer',
            'title|用户名称' => 'min:1',
            'appsecret|appsecret' => 'min:6',
            'capacity|磁盘容量' => 'integer|egt:0',
            'is_admin|用户类型' => 'in:0,1',
            'is_use|状态' => 'in:0,1',
        ]);

        if (User::where('id', $param['id'])->value('appid') === 'admin') {
            unset($param['is_admin']);
            unset($param['is_use']);
            if ($param['id'] !== is_login()) {
                unset($param['appsecret']);
            }
        }

        if (!empty($param['appsecret'])) {
            $param['appsecret'] = User::buildPassword($param['appsecret']);
        }

        User::update($param);
        return $this->successResponse('编辑成功');
    }
}
