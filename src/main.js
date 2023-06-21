import { createApp } from 'vue'
import App from './App.vue'
import MainApp from './MainApp.vue';
import HomeApp from './HomeApp.vue';


import {createRouter, createWebHistory} from 'vue-router';

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
    history: createWebHistory(),
});

var vue = createApp(App); //.mount('#app')

vue.use(router);

vue.mount("#app");
