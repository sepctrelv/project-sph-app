import Vue from "vue";
import Vuex from "vuex";
//需要使用插件一次
Vue.use(Vuex);
// 引入小仓库
import home from "@/store/home";
import search from "@/store/search";

export default new Vuex.Store({
  // 实现Vuex仓库模块式开发存储数据
  modules: {
    home,
    search,
  },
});