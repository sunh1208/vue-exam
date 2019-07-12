import Vuex from 'vuex'
import Vue from 'vue'
import modules from './modules';
import GlobalWarehouse from './GlobalWarehouse'
Vue.use(Vuex)
console.log(modules)
export default new Vuex.Store({
    ...GlobalWarehouse,
    modules
})