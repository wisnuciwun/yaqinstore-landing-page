import Vue from 'vue'
import App from './App.vue'
import VueImageSlider from 'vue-image-slider'

Vue.config.productionTip = false
Vue.use(VueImageSlider)

new Vue({
  render: h => h(App),
}).$mount('#app')
