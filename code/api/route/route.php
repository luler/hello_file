<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

use think\facade\Route;

Route::group('api', function () {
    Route::post('getAccessToken', 'home/LoginController/getAccessToken')->middleware('Throttle:10,1');
    Route::get('casLogin', 'home/LoginController/casLogin');
    //需要登录的路由
    Route::group('', function () {
        // +----------------------------------------------------------------------
        // | 前后台公共
        // +----------------------------------------------------------------------
        Route::post('editUserInfo', 'home/LoginController/editUserInfo');
        Route::post('file', 'home/MediaController/file');
        Route::get('download', 'home/MediaController/download');
        Route::post('delete', 'home/MediaController/delete');
        Route::get('detail', 'home/MediaController/detail');
        Route::get('getFileList', 'home/MediaController/getFileList');

        Route::get('show', 'home/MediaController/show');

        Route::get('getUserList', 'home/UserController/getUserList');
        Route::post('addUser', 'home/UserController/addUser');
        Route::post('editUser', 'home/UserController/editUser');

    })->middleware('Auth');
}); //解决跨域问题

// miss 路由
Route::miss(function () {
    throw new \think\exception\RouteNotFoundException();
});
