<?php

namespace app\home\controller;

use app\common\controller\BaseController;
use app\common\exception\CommonException;
use app\common\helper\DownloadHelper;
use app\common\helper\PageHelper;
use app\common\model\ConvertFile;
use app\common\model\Media;
use app\common\model\User;
use app\common\model\UserMedia;
use think\Db;
use think\Request;

class MediaController extends BaseController
{
    /**
     * 上传文件接口
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author luler <1207032539@qq.com>
     */
    public function file(Request $request)
    {
        $field = ['type', 'is_temp', 'desc', 'md5', 'title'];
        $param = $request->only($field);

        checkData($param, [
            'type|类型' => 'in:1,2',
            'md5|文件md5' => 'requireIf:type,2',
            'title|文件名称' => 'requireIf:type,2',
        ]);

        $param['type'] = $param['type'] ?? 1;

        if ($param['type'] == 1) {
            $file = $request->file('file');
            if (!$file) {
                throw new CommonException('请选择上传的文件');
            }
            $user = User::getUserInfo();
            $has_use_capacity = UserMedia::hasUseCapacity();
            $need_capacity = $has_use_capacity + $file->getInfo()['size'];
            $need_capacity = $need_capacity / 1024 / 1024 / 1024;
            if ($need_capacity > $user['capacity']) {
                throw new CommonException('配给容量已用完');
            }
            $media = Media::where('md5', $file->hash('md5'))->find();
            if (empty($media)) {
                $info = $file->validate([
                    'size' => config('app.file_upload.max_size'),
//                    'ext' => config('app.file_upload.ext_limit')
                ])->move(env('root_path') . "public/backend/uploads");
                if (!$info) {
                    throw new CommonException($file->getError());
                }

                $media_data = [];
                $media_data['file_ext'] = $info->getExtension();
                $media_data['file_type'] = $info->getInfo()['type'];
                $media_data['file_size'] = $info->getInfo()['size'];
                $media_data['file_url'] = "/backend/uploads/" . $info->getSaveName();
                //可判断md5是否唯一来控制文件重复上传
                $media_data['md5'] = $info->hash('md5');
                $media = Media::create($media_data);
            }

            $param['title'] = $file->getInfo()['name'];
        } else {
            $media = Media::where('md5', $param['md5'])->find();
            if (empty($media)) {
                throw new CommonException('md5对应的文件不存在');
            }

            $user = User::getUserInfo();
            $has_use_capacity = UserMedia::hasUseCapacity();
            $need_capacity = $has_use_capacity + $media['file_size'];
            $need_capacity = $need_capacity / 1024 / 1024 / 1024;
            if ($need_capacity > $user['capacity']) {
                throw new CommonException('配给容量已用完');
            }
        }

        $user_media_data = [];
        $user_media_data['uid'] = is_login();
        $user_media_data['media_id'] = $media['id'];
        $user_media_data['title'] = $param['title'];
        $user_media_data['is_temp'] = $param['is_temp'] ?? 0;
        $user_media_data['desc'] = $param['desc'] ?? '';
        $user_media = UserMedia::create($user_media_data);

        $media = $media->toArray();
        $user_media = $user_media->toArray();
        $res = array_merge($media, $user_media);
        $res['user_media_id'] = (int)$res['id'];
        unset($res['id']);
        unset($res['media_id']);

        return $this->successResponse('上传成功', $res);
    }

    /**
     * 下载文件
     * @param Request $request
     * @throws CommonException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @author luler <1207032539@qq.com>
     */
    public function download(Request $request)
    {
        $field = ['user_media_id'];
        $param = $request->only($field);
        checkData($param, [
            'user_media_id|用户文件id' => 'require|integer'
        ]);

        if (User::isSuperAdmin()) {
            $res = UserMedia::find($param['user_media_id']);
        } else {
            $res = UserMedia::where('uid', is_login())->find($param['user_media_id']);
        }

        if (empty($res)) {
            throw new CommonException('文件不存在或者无权使用');
        }

        DownloadHelper::downloadMedia($res['id']);
    }

    /**
     * 获取文件列表
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author luler <1207032539@qq.com>
     */
    public function getFileList(Request $request)
    {
        $field = ['search', 'start_time', 'end_time', 'order_type', 'uid',];
        $param = $request->only($field);
        checkData($param, [
            'start_time|开始时间' => 'date',
            'end_time|结束时间' => 'date',
        ]);

        $where = [];
        if (!empty($param['search'])) {
            $where[] = ['a.title|a.desc|b.title|b.appid|c.md5', 'like', "%{$param['search']}%"];
        }
        if (!empty($param['start_time'])) {
            $where[] = ['a.create_time', '>=', strtotime($param['start_time'])];
        }
        if (!empty($param['end_time'])) {
            $where[] = ['a.create_time', '<=', strtotime($param['end_time'])];
        }
        if (!empty($param['uid'])) {
            $where[] = ['a.uid', '=', $param['uid']];
        }
        $order = [];
        switch ($param['order_type'] ?? '') {
            case 'download_count.descend':
                $order['a.download_count'] = 'desc';
                break;
            case 'download_count.ascend':
                $order['a.download_count'] = 'asc';
                break;
            case 'file_size.descend':
                $order['c.file_size'] = 'desc';
                break;
            case 'file_size.ascend':
                $order['c.file_size'] = 'asc';
                break;
            default:
                $order['a.id'] = 'desc';
                break;
        }
        if (!User::isSuperAdmin()) {
            $where[] = ['a.uid', '=', is_login()];
        }
        $pageHelper = new PageHelper(new UserMedia());
        $res = $pageHelper->alias('a')
            ->join('user b', 'a.uid=b.id', 'left')
            ->join('media c', 'a.media_id=c.id')
            ->where($where)
            ->field('a.id,a.title,a.desc,c.file_type,c.file_ext,c.file_url,c.file_size,a.download_count,a.create_time,a.update_time,b.title as creator_name,b.appid as creator_appid')
            ->order($order)
            ->autoPage()
            ->get();
        foreach ($res['list'] as &$value) {
            $value['file_size'] = convertSize($value['file_size']);
            $value['file_url'] = \request()->domain() . $value['file_url'];
        }

        return $this->successResponse('获取成功', $res);
    }

    /**
     * 删除文件
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws CommonException
     * @throws \think\Exception
     * @throws \think\exception\PDOException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function delete(Request $request)
    {
        $field = ['user_media_ids'];
        $param = $request->only($field);
        checkData($param, [
            'user_media_ids|用户文件id数组' => 'require|array'
        ]);

        $user_media = new UserMedia();
        if (!User::isSuperAdmin()) {
            $param['user_media_ids'] = $user_media->where('uid', is_login())
                ->whereIn('id', $param['user_media_ids'])
                ->column('id');
        }

        $media_ids = $user_media->where('id', 'in', $param['user_media_ids'])
            ->column('media_id');

        $using_media_ids = $user_media->where('id', 'not in', $param['user_media_ids'])
            ->where('media_id', 'in', $media_ids)
            ->column('media_id');
        //排除在用文件
        $media_ids = array_diff($media_ids, $using_media_ids);

        Db::startTrans();
        $user_media->where('id', 'in', $param['user_media_ids'])->delete();
        if (!empty($media_ids)) { //删除与源文件
            $file_path_a = Media::where('id', 'in', $media_ids)->column('file_url');
            $file_path_a = array_map(function ($value) {
                return app()->getRootPath() . 'public' . $value;
            }, $file_path_a);
            $file_path_b = ConvertFile::whereIn('media_id', $media_ids)->column('file_url');
            $file_path_b = array_map(function ($value) {
                return app()->getRootPath() . 'public' . $value;
            }, $file_path_b);
            $file_paths = array_merge($file_path_a, $file_path_b);
            Media::where('id', 'in', $media_ids)->delete();
            ConvertFile::whereIn('media_id', $media_ids)->delete();
            //删除文件
            foreach ($file_paths as $file_path) {
                @unlink($file_path);
            }
        }

        Db::commit();
        return $this->successResponse('删除成功');
    }

    /**
     * 获取文件详情
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws CommonException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function detail(Request $request)
    {
        $field = ['user_media_id'];
        $param = $request->only($field);
        checkData($param, [
            'user_media_id|用户文件id' => 'require|integer'
        ]);
        $user_media = new UserMedia();
        $where[] = ['a.id', '=', $param['user_media_id']];
        if (!User::isSuperAdmin()) {
            $where[] = ['a.uid', '=', is_login()];
        }
        $res = $user_media->alias('a')
            ->join('user b', 'a.uid=b.id', 'left')
            ->join('media c', 'a.media_id=c.id')
            ->where($where)
            ->field('a.id as user_media_id,b.title as creator_name,b.appid as creator_appid,a.title,c.file_type,c.file_ext,c.file_size,c.file_url,a.create_time,a.update_time')
            ->find();

        if (empty($res)) {
            throw new CommonException('文件不存在或者无权操作');
        }

        return $this->successResponse('获取成功', $res);
    }

    /**
     * 文件转pdf并跳到预览页面
     * @param Request $request
     * @throws CommonException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @author luler <1207032539@qq.com>
     */
    public function show(Request $request)
    {
        $field = ['user_media_id'];
        $param = $request->only($field);
        checkData($param, [
            'user_media_id|用户文件id' => 'require|integer'
        ]);
        $user_media = new UserMedia();
        $where[] = ['a.id', '=', $param['user_media_id']];
        if (!User::isSuperAdmin()) {
            $where[] = ['a.uid', '=', is_login()];
        }

        $res = $user_media->alias('a')
            ->join('media b', 'a.media_id=b.id')
            ->where($where)
            ->field('a.media_id,b.file_ext,b.file_url')
            ->find();
        if (empty($res)) {
            throw new CommonException('用户文件不存在');
        }

        $file_ext = strtolower($res['file_ext']);
        $file_path = app()->getRootPath() . 'public' . $res['file_url'];
        $mime_type = mime_content_type($file_path);
        if ($file_ext == 'pdf') {
            $temp_file_url = $res['file_url'];
        } elseif (
            !in_array($file_ext, ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'ppt', 'ppt', 'ppt',])
            && strpos($mime_type, 'text') === false
        ) {
            $temp_file_url = '/show/error';
        } else {
            $temp_file_url = ConvertFile::where('media_id', $res['media_id'])->value('file_url');
            if (empty($temp_file_url)) {
                $temp_file_dir = app()->getRootPath() . 'public/backend/temp';
                if (in_array($file_ext, ['xls', 'xlsx'])) {
                    $to = 'html';
                } else {
                    $to = 'pdf';
                }

                $temp_filename = session_create_id() . '.' . $to;
                putenv('LANG=en_US.UTF-8');//解决执行下面命令格式转化时，一般文本中文乱码，有点坑，原因未明
                $process = proc_open("libreoffice --headless --convert-to {$to} {$file_path} --outdir {$temp_file_dir}",
                    [0 => ['pipe', 'r'], 1 => ['pipe', 'w'], 2 => ['pipe', 'w']],
                    $pipes);
                if (!is_resource($process)) {
                    throw new CommonException('无法获取系统命令');
                }
                fwrite($pipes[0], '');
                fclose($pipes[0]);
                $stdout = stream_get_contents($pipes[1]);
                fclose($pipes[1]);
                $stderr = stream_get_contents($pipes[2]);
                fclose($pipes[2]);
                $rtn = proc_close($process);
                //有时成功也报错，注释掉
                //if (!empty($stderr)) {
                //    throw new CommonException('文件转化出错:' . $stderr);
                //}

                rename(
                    $temp_file_dir . '/' . preg_replace('/\.\w*$/', '.' . $to, basename($file_path)),
                    $temp_file_dir . '/' . $temp_filename
                );

                $temp_file_url = '/backend/temp/' . $temp_filename;

                ConvertFile::create([
                    'media_id' => $res['media_id'],
                    'file_url' => $temp_file_url,
                ]);
            }

        }

        if (strrchr($temp_file_url, '.') == '.pdf') { //pdf展示
            return $this->redirect('/backend/pdf/index.html?file=' . $temp_file_url);
        } elseif (strrchr($temp_file_url, '.') == '.html') { //excel表格html展示
            return $this->redirect($temp_file_url);
        } else { //错误展示
            return $this->redirect($temp_file_url);
        }
    }
}
