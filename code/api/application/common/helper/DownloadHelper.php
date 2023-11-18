<?php
/**
 * Created by PhpStorm.
 * User: luler <1207032539@qq.com>
 * Date: 2018/11/2
 * Time: 11:00
 */

namespace app\common\helper;

use app\common\exception\CommonException;
use app\common\model\Media;
use app\common\model\UserMedia;

class DownloadHelper
{
    /**
     * 文件下载
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public static function downloadMedia($user_media_id)
    {
        $info = UserMedia::alias('a')->join('media b', 'a.media_id=b.id')->where('a.id', $user_media_id)->find();
        if (empty($info)) {
            throw new CommonException('用户文件不存在');
        }
        $path = app()->getRootPath() . 'public' . $info['file_url'];
        $title = $info['title'];
        $fb = fopen($path, "rb");
        $size = filesize($path);
        $lenth = $size;
        if (isset($_SERVER['HTTP_RANGE']) && preg_match("/bytes=([0-9]+)-/i", $_SERVER['HTTP_RANGE'], $match)) {
            $start = $match[1];
        } else {
            //统计下载次数
            UserMedia::where('id', $user_media_id)->setInc('download_count');
            $start = 0;
        }
        //设置返回头
        if ($start > 0) {
            //设置断点下载头
            fseek($fb, $start);
            header("HTTP/1.1 206 Partical Content");
            header("Content-Range: bytes " . $start . "-" . ($size - 1) . "/" . $size);
            $lenth = $size - $start;
        } else {
            header("Content-Range: bytes 0-" . ($size - 1) . "/" . $size);
        }
        header("Cache-control: public");
        header("Pragma: public");
        header("Content-Length: " . $lenth); //当前要下载的文件大小
        header("Accept-Ranges: bytes"); //告诉浏览器，该资源支持部分传输
        header("Content-Type: application/octet-stream"); //内容类型为字节流
        //中文名兼容各种浏览器
        $ua = $_SERVER["HTTP_USER_AGENT"];
        if (preg_match("/MSIE/", $ua)) {
            header('Content-Disposition: attachment; filename="' . $title . '"');
        } else if (preg_match("/Firefox/", $ua)) {
            header('Content-Disposition: attachment; filename*="utf8\'\'' . $title . '"');
        } else {
            header('Content-Disposition: attachment; filename=' . urlencode($title));
        }
        @ob_end_clean(); //清空缓冲区并关闭缓冲区，避免框架本身开启的缓冲区问题，可能框架没开启缓冲区，所以需要防止报错，加@
        ob_start();
        while (!feof($fb)) {
            echo fread($fb, 8192);;
            ob_flush(); //输出php缓冲区数据
            flush(); //输出缓冲区到浏览器
        }
//        fpassthru($fb);
        fclose($fb);
        exit();
    }
}