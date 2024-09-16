import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//import router from './routes'

import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/LogIn.vue'

const routes = [
    {
        path:'/', component: Login
    },
    {
        path: '/home', component: Home
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app')
