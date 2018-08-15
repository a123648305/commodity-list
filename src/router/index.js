import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/projectSchedule/template/login/index'), // 登录
        },
        {
            path: '/list',
            name: 'list',
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/projectSchedule/template/detail/index'), // 
        }, 
        {
            path: '/plan',
            name: 'bottom',
            component: () =>
                import ( /* webpackChunkName: "poster" */ '@/projectSchedule/template/plan/index'), // 
        },
        {
            path: '/recent',
            name: 'left',
            component: () =>
                import ( /* webpackChunkName: "poster" */ '@/projectSchedule/template/recent/index'), // 
        },
        {
            path: '/d',
            name: 'left',
            component: () =>
                import ( /* webpackChunkName: "poster" */ '@/projectSchedule/template/detail/index'), // 
        },
      
    ]
});
