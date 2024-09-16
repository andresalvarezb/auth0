import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";

const routes = [
    { path: "/", name: 'Login', component: LogIn },
    { path: "/home", name: 'Home', component: Home },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;