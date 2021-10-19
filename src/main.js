/*
 * @Author: your name
 * @Date: 2021-10-06 23:30:49
 * @LastEditTime: 2021-10-15 11:03:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue01\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { NavBar } from 'vant'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
