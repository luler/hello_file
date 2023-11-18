export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      {
        component: '404',
      },
    ],
  },
  // frontend
  {
    path: '/frontend',
    component: '../layouts/BlankLayout',
    routes: [
      { path: '/frontend/casLogin', name: 'login', component: './Frontend/CasLogin' },
      {
        component: '404',
      },
    ],
  },
  // user
  {
    path: '/show',
    component: '../layouts/BlankLayout',
    routes: [
      { path: '/show', redirect: '/show/file' },
      {
        path: '/show/file/:user_media_id/:authorization',
        name: '打开文件',
        component: './File/Show',
      },
      { path: '/show/error', name: '打开文件错误', component: './File/Error' },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'super_admin'],
    routes: [
      { path: '/', redirect: '/file/index' },
      {
        path: '/file/index',
        name: '我的网盘',
        icon: 'file',
        component: './File/Index',
      },
      {
        path: '/config/user',
        name: '用户管理',
        icon: 'setting',
        authority: ['super_admin'],
        component: './File/User',
      },
      {
        component: '404',
      },
    ],
  },
];
