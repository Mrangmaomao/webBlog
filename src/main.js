// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import vuePlugin from './vuePlugin/index'
import 'mint-ui/lib/style.css'
import './source/font/iconfont.css'
import './source/css/animate.min.css'
import './source/css/common.css'
import VueScroller from 'vue-scroller'
import VueTouch from 'vue-touch'
Vue.use(VueScroller)
Vue.use(Mint)
Vue.use(vuePlugin)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
