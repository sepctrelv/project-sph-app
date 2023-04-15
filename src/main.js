import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";

// 三级联动组件---全局组件
import TypeNav from "@/pages/Home/TypeNav";

/**
 * params1 全局组件的名字
 * params2 要注册的组件
 */
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
}).$mount("#app");
