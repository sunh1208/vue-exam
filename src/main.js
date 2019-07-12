import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element,{Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$message = Message;
Vue.config.productionTip = false
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
