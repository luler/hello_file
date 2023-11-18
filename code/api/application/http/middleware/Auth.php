<?php

namespace app\http\middleware;


use app\common\exception\CommonException;
use app\common\model\User;
use app\common\tools\JwtTools;
use think\Request;

class Auth
{
    public function handle(Request $request, \Closure $next)
    {
        //验证
        if (strtolower($request->path()) == 'api/file' && $request->has('user')) {
            $request->__uid__ = User::where('appid', $request->param('user'))
                ->where('is_use', 1)
                ->value('id');
            if (empty($request->__uid__)) {
                throw new CommonException('账号异常', 401);
            }
        } else {
            $jwt = new JwtTools();
            $authInfo = $jwt->authenticate();
            $request->__uid__ = $authInfo['uid'];
        }
        return $next($request);
    }
}
