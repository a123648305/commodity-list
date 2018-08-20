import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "login" */ '@/pages/projectSchedule/template/login/index'), // 登录
        },
        {
            path: '/list',
            name: 'list',
            component: () =>
                import ( /* webpackChunkName: "list" */ '@/pages/projectSchedule/template/detail/index'), // 
        }, 
        {
            path: '/plan',
            name: 'plan',
            component: () =>
                import ( /* webpackChunkName: "plan" */ '@/pages/projectSchedule/template/plan/index'), // 
        },
        {
            path: '/recent',
            name: 'recent',
            component: () =>
                import ( /* webpackChunkName: "recent" */ '@/pages/projectSchedule/template/recent/recent'), // 
        },
        {
            path: '/detail-delay',
            name: 'detail-delay',
            component: () =>
                import ( /* webpackChunkName: "detail-delay" */ '@/pages/projectSchedule/template/detail/index'), // 
        },
        {
            path: '/detail-Countdown',
            name: 'detail-Countdown',
            component: () =>
                import ( /* webpackChunkName: "detail-Countdown" */ '@/pages/projectSchedule/template/detail/Details-Countdown'), // 
        },
        {
            path: '/more',
            name: 'more',
            component: () =>
                import ( /* webpackChunkName: "more" */ '@/pages/projectSchedule/template/more/index'), // 
        },
        {
            path: '/test',
            name: 'test',
            component: () =>
                import ( /* webpackChunkName: "test" */ '@/pages/projectSchedule/index'), // 
        },
      
      
    ]
});
