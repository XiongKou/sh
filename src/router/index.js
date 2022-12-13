import {createRouter,createWebHistory} from "vue-router";

import Index from "../model/Index.vue";
import CarList from "../model/CarList.vue"
const routes = [
    { path: '/index', component: Index },
    { path: '/car-list', component: CarList }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;