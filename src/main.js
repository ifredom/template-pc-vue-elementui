import Vue from "vue";
import Cookies from "js-cookie";
import App from "./App";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "normalize.css/normalize.css"; // CSS样式重置
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss"; // 全局 css

import i18n from "./lang"; // 国际化
import "./icons"; // SVG以及字体图标
import "./utils/error-log"; // 错误日志
import "./mock"; // 模拟数据
import * as filters from "./utils/filters"; // 全局过滤器
import Constants from "./constants"; // 常量

Vue.use(Element, {
  size: Cookies.get("size") || "medium", // 设置elementUI尺寸
  i18n: (key, value) => i18n.t(key, value),
});

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

Vue.prototype.Constants = Constants;

new Vue({
  router,
  store,
  i18n,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
