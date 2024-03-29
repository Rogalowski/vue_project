import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Hawaii from "../views/Hawaii.vue";
import Jamaica from "../views/Jamaica.vue";
import Panama from "../views/Panama.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/myview",
        name: "myview",
        component: () => import("../views/MyView.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
    },
    {
        path: "/brazil",
        name: "brazil",
        component: () => import("../views/Brazil.vue"),
    },

    {
        path: "/hawaii",
        name: "hawaii",
        component: Hawaii,
    },
    {
        path: "/jamaica",
        name: "jamaica",
        component: Jamaica,
    },

    {
        path: "/panama",
        name: "panama",
        component: Panama,
        props: {
            somePropValue: "some value",
            newsletterPopup: false,
        },
    },
    {
        path: "/destination/:id/:slug",
        name: "destination.show",
        // props: true,
        props: (route) => ({ id: parseInt(route.params.id) }),
        component: () => import("../views/DestinationShow.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
