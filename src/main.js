import Vue from 'vue'
import App from './App.vue'
import router from '../router';
// VUETIFY (UI)
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
// VUEX (DESIGN PATTERN)
import Vuex from 'vuex'

// LINK STORE
import {store} from './store';

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
