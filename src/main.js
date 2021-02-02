import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import './bus'
import 'vue-loading-overlay/dist/vue-loading.css'
import {
  ValidationObserver, ValidationProvider, extend, localize, configure
} from 'vee-validate'

import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules'

Vue.use(VueAxios, axios)
Vue.component('Loading', Loading)
Vue.config.productionTip = false

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

localize('zh_TW', TW)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
