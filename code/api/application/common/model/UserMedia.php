<?php

namespace app\common\model;

class UserMedia extends BaseModel
{
    /**
     * 获取用户已经使用的容量
     * @param int $uid
     * @return float
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public static function hasUseCapacity($uid = 0)
    {
        if ($uid == 0) {
            $uid = is_login();
        }
        return UserMedia::alias('a')
            ->join('media b', 'a.media_id=b.id')
            ->where('a.uid', $uid)
            ->sum('b.file_size');
    }
}
