import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/pages/index'), // 登录
        },
        {
            path: '/list',
            name: 'list',
            component: () =>
                import ( /* webpackChunkName: "home" */ '@/pages/commodity/commodityList/index'), // 
        }, 
        {
            path: '/bottom',
            name: 'bottom',
            component: () =>
                import ( /* webpackChunkName: "poster" */ '@/pages/bottom/index'), // 
        },
      
    ]
});
