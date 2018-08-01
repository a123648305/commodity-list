import Vue from 'vue';
import Router from 'vue-router';

// test

// 登录
import login from '@/pages/login/index';
// 首页
import home from '@/pages/home/index';
// 推广海报
import poster from '@/pages/poster/index';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home
        }, {
            path: '/poster',
            name: 'poster',
            component: poster
        },
    ]
});
