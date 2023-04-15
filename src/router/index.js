/*
 * 配置路由的地方
 */

import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import HomePage from "@/pages/Home";
import SearchPage from "@/pages/Search";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
// 先把VueRouter原型对象的push，先保存一份
const { push: originPush, replace: originReplace } = VueRouter.prototype;

/**
 * 重写Push方法
 * @param location 告诉原来的push方法，你往哪里跳转(传递哪些参数)
 * @param resolve 成功回调
 * @param reject 失败回调
 */
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

/**
 * 重写Replace方法
 * @param location 告诉原来的replace方法，你往哪里跳转(传递哪些参数)
 * @param resolve 成功回调
 * @param reject 失败回调
 */
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

// 配置路由
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: HomePage,
      meta: {
        showFooter: true,
        showSearchBar: true,
      },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: SearchPage,
      meta: {
        showFooter: true,
        showSearchBar: true,
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
      component: LoginPage,
    },
    {
      path: "/register",
      component: RegisterPage,
    },
    // 重定向，在项目跑起来的时候，访问/，立马定向到首页
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
