import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../components/register.vue'
// import validemail from '../components/validemail.vue'

// import profil from '../components/profil.vue'
import panier from '../views/panier.vue'
import produit from '../views/produit.vue'
import Paypal from '../components/Paypal.vue'
import adminhomj from '../components/admin/home.vue'
import devis from '../views/devis.vue'
import profil from '../views/profil.vue'
import commande from '../views/commande.vue'
import propos from '../views/propos.vue'


Vue.use(VueRouter)

const routes = [{

        name: "Accueil",
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
        path: "/validemail",
        name: "/validemail",
        component: () =>
            import ("../components/validermail.vue"),
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
    // changer P en Maj
    {

        path: "/Paypal",
        name: "Paypal",
        component: Paypal
    },
    {

        path: "/admin/home",
        name: "adminhogin",
        component: adminhomj
    },
    {

        path: "/devis",
        name: "devis",
        component: devis
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


]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
})

export default router