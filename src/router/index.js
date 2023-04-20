/*
 * 配置路由的地方
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";

// 使用插件
Vue.use(VueRouter);

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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
