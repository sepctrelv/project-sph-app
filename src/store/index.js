import Vue from "vue";
import Vuex from "vuex";
//需要使用插件一次
Vue.use(Vuex);
// 引入小仓库
import home from "@/store/home";
import search from "@/store/search";
import detail from "@/store/detail";
import shopcart from "@/store/shopcart";
import user from "@/store/user.js";
import trade from "@/store/trade.js";

export default new Vuex.Store({
  // 实现Vuex仓库模块式开发存储数据
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade,
  },
});
