import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("../components/Pages/MainPage.vue"),
    },
    {
        path: "/country",
        component: () => import("../components/Pages/CountryPage.vue"),
    },
];

const router = new VueRouter({
    routes,
});


export default router;

