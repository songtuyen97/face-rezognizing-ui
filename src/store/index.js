import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test';
import recognition from './modules/recognition';
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        test,
        recognition
    }
});