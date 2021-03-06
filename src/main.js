// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'
import Echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'

Vue.config.productionTip = false

Vue.prototype.$axios=axios;

Vue.use(ElementUI)

Vue.prototype.echarts = Echarts;

Vue.use(Echarts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
