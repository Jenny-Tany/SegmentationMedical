import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import FileUpload from "../views/FileUpload.vue"
import Show from "../components/Show.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/show",
            name: "show",
            component: Show
        },
        {
            path: "/fileUpload",
            name: "fileUpload",
            component: FileUpload
        }
    ]
})

export default router