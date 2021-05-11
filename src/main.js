import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
//1 le routeur est importer ici globalement 
import router from './router';

import axios from 'axios';
import VueAxios from 'vue-axios';
import JsonViewer from 'vue-json-viewer'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import vuetify from './plugins/vuetify';
// je l'importe en global
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(JsonViewer);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

// 2 le routeur est utilisé
new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')