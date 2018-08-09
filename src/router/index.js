import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/pages/leftMenu/index'), // 登录
        },
        {
            path: '/list',
            name: 'list',
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/pages/centerContent/index'), // 
        }, 
        {
            path: '/bottom',
            name: 'bottom',
            component: () =>
                import ( /* webpackChunkName: "poster" */ '@/pages/bottom/index'), // 
        },
        {
            path: '/test',
            name: 'test',
            component: () =>
                import ( /* webpackChunkName: "poster" */ '@/pages/rightMenu/index'), // 
        },
      
    ]
});
