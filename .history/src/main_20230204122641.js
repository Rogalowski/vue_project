import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/main.css";

const app = createApp(App);

app.use(router);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
    ],
});

app.mount("#app");
