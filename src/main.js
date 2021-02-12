// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 点击延迟300ms问题解决
import fastClick from 'fastclick'
// 重置样式表
import 'styles/reset.css'
// 1像素问题，移动端某些机型分辨率高，写的1像素会变大
import 'styles/border.css'
import 'styles/iconfont.css'

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
