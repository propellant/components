import Vue from 'vue'
import App from './App'
import propellant from 'propellant'
Vue.use(propellant)

/* eslint no-new: 0 */
new Vue({
  el: '#app',
  render: h => h(App)
})