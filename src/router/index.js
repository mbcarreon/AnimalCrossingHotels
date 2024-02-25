//Defining routing options
import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Houses from "../views/Houses.vue"
import Gallery from "../views/Gallery.vue"
import Contact from "../views/Contact.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/houses",
            name: "houses",
            component: Houses
        },
        {
            path: "/gallery",
            name: "gallery",
            component: Gallery
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        }
    ]
})

export default router