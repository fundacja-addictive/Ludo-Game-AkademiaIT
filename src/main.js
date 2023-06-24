import { createApp } from 'vue';
import App from './App.vue';
import MainApp from './MainApp.vue';
import HomeApp from './HomeApp.vue';


import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

var router = createRouter({
    routes: [
        {
            path: '/',
            component: HomeApp,
        },
        {
            path: '/game',
            component: MainApp,
        }
    ],
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
});

var vue = createApp(App); //.mount('#app')

vue.use(router);

vue.mount("#app");
