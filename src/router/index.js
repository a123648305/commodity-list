import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/pages/login/index'), // 登录
        },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/pages/home/index'), // 首页
        }, {
            path: '/poster',
            name: 'poster',
            component: () =>
                import ( /* webpackChunkName: "poster" */ '@/pages/poster/index'), // 推广海报
        },
    ]
});
