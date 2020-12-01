import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/produit.vue'
import register from '../components/register.vue'
import profil from '../components/profil.vue'
import panier from '../views/panier.vue'
import paypal from '../components/paypal.vue'
import login from '../components/login.vue'
import adminhomj from '../components/admin/home.vue'




Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: register

    },
    {
        path: "/register",
        name: "register",
        component: register
    },
    {
        path: "/profil",
        name: "profil",
        component: profil
    },
    {
        path: "/panier",
        name: "panier",
        component: panier
    },
    {
        path: "/paypal",
        name: "paypal",
        component: paypal
    },
    {

        path: "/admin/login",
        name: "adminlogin",
        component: login
    },
    {

        path: "/admin/home",
        name: "adminhogin",
        component: adminhomj
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router