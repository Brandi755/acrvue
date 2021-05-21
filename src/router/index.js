import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../components/register.vue'
// import validemail from '../components/validemail.vue'

// import profil from '../components/profil.vue'
import panier from '../views/panier.vue'
import produit from '../views/produit.vue'
import adminhomj from '../components/admin/home.vue'

import profil from '../views/profil.vue'
import commande from '../views/commande.vue'
import propos from '../views/propos.vue'
import validemail from '../views/validemail.vue'
import pwdchange from '../views/pwdchange.vue'
import sendforgetpwd from '../views/sendforgetpwd.vue'
import backoffice from '../views/backoffice.vue'
import Paypal from '../components/paypal.vue'



Vue.use(VueRouter)

const routes = [{
        name: "accueil",
        path: "/accueil",
        component: () =>
            import ('../views/Accueil.vue')
    },
    {
        name: '',
        path: '/',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/Accueil.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: register

    },
    {
        path: "/register",
        name: "register",
        component: register
    },
    {
        path: "/validemail/:email/:token",
        name: "validemail",
        component: validemail
    },
    {
        path: "/produit",
        name: "produit",
        component: produit
    },

    {
        path: "/panier",
        name: "panier",
        component: panier
    },

    {

        path: "/paypal",
        name: "paypal",
        component: Paypal
    },
    {

        path: "/admin/home",
        name: "adminhogin",
        component: adminhomj
    },
    {

        path: "/profil",
        name: "profil",
        component: profil
    },
    {
        path: "/commande",
        name: "commande",
        component: commande
    },
    {

        path: "/propos",
        name: "propos",
        component: propos
    },
    {

        path: "/pwdchange/:id/:token",
        name: "pwdchange",
        component: pwdchange
    },
    {

        path: "/sendforgetpwd",
        name: "sendforgetpwd",
        component: sendforgetpwd
    },
    {

        path: "/backoffice",
        name: "backoffice",
        component: backoffice
    },
   


]

// fais en sorte que le router devient global ?
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
})

export default router