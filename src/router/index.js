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
            path: '/recent',
            name: 'recent',
            component: () =>
                import ( /* webpackChunkName: "recent" */ '@/pages/projectSchedule/template/recent/recent'), // 近期
        },
        {
            path: '/detail-Delay',
            name: 'detail-delay',
            component: () =>
                import ( /* webpackChunkName: "detail-delay" */ '@/pages/projectSchedule/template/detail/delay'), // 延期详情
        },
        {
            path: '/detail-Countdown',
            name: 'detail-Countdown',
            component: () =>
                import ( /* webpackChunkName: "detail-Countdown" */ '@/pages/projectSchedule/template/detail/Countdown'), // 倒计时
        },
        {
            path: '/test',
            name: 'test',
            component: () =>
                import ( /* webpackChunkName: "test" */ '@/pages/projectSchedule/index'), // 主要
        },
      
      
    ]
});
