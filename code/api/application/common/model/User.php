<?php

namespace app\common\model;


use think\facade\Cache;

class User extends BaseModel
{
    protected static function init()
    {
        self::afterUpdate(function ($user) {
            Cache::rm('User:getUserInfo:' . $user->id);
        });
    }

    /**
     * 获取用户信息
     * @param null $uid
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public static function getUserInfo($uid = null)
    {
        if (empty($uid)) {
            $uid = is_login();
        }
        return self::where('id', $uid)->cache('User:getUserInfo:' . $uid, 60 * 5)->find() ?: [];
    }

    /**
     * 是否超级管理员
     * @return mixed
     * @author luler <1207032539@qq.com>
     */
    public static function isSuperAdmin($uid = null)
    {
        if (empty($uid)) {
            $uid = is_login();
        }
        return self::getUserInfo($uid)['is_admin'];
    }

    /**
     * 生成秘钥串
     * @param $password
     * @return string
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public static function buildPassword($password)
    {
        return md5(sha1($password . 'i love you forever'));
    }
}
