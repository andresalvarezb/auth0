import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";

const routes = [
    { path: "/", component: LogIn },
    { path: "/home", component: Home },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;