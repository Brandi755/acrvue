import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// je l'importe en global
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')