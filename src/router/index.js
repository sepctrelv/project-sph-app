/*
 * 配置路由的地方
 */

import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

// 配置路由
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        showFooter: true,
      },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      meta: {
        showFooter: true,
      },
      // 路由组件能不能传递props数据？
      // 第一种：布尔值写法: 只能传递params参数
      // props: true,
      // 第二种：对象写法: 额外的给路由组件传递一些props
      // props: { a: 1, b: 2 },
      // 函数写法：可以params参数、query参数，通过props传递给路由组件
      props: ($route) => ({
        keyword: $route.params.keyword,
        k: $route.query.k,
      }),
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    // 重定向，在项目跑起来的时候，访问/，立马定向到首页
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
