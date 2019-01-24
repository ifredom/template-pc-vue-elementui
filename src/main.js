import Vue from 'vue';
import Cookies from 'js-cookie'
import App from './App';
import router from './router';
import store from './store';
import Api from './api';
import './registerServiceWorker';

import 'normalize.css/normalize.css'; // CSS样式重置
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import i18n from './lang' // 国际化

import '@/style/index.styl'; // 全局 css
import './icons'; // 图标
import './errorLog'; // 错误日志
import './mock'; // 模拟数据

Vue.config.productionTip = false;
Vue.use(Api.install);
Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})


new Vue({
  router,
  store,
  i18n,
  render: function (h) {
    return h(App);
  }
}).$mount('#app');