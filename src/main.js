import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/zh-TW";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
