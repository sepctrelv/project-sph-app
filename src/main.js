import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";
// 三级联动组件---全局组件
import TypeNav from "@/components/TypeNav/index.vue";
import ThePagination from "@/components/Pagination/index.vue";
// 注册全局组件 params1 全局组件的名字 params2 要注册的组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(ThePagination.name, ThePagination);
// 引入MockServer
import "@/mock/mockServer";
import "swiper/css/bundle";
// 统一接收api文件夹里面的全部请求函数
import * as API from "@/api";
// 引入Vue Lazyload
import VueLazyload from "vue-lazyload";
import loaderImg from "@/assets/loader.gif";

Vue.use(VueLazyload, {
  loading: loaderImg,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  // 注册路由
  router,
  // 注册仓库: 组件实例的身上会多了一个属性$store属性
  store,
}).$mount("#app");
