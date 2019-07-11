import Vuex from 'vuex'
import Vue from 'vue'
import modules from './modules';
Vue.use(Vuex)
console.log(modules)
export default new Vuex.Store({
    modules
})