/*
 * 配置路由的地方
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import store from "@/store";

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
const router = new VueRouter({
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

router.beforeEach(async (to, from, next) => {
  const token = store.state.user.token;
  const name = store.state.user.userInfo.name;
  if (token) {
    if (to.path === "/login" || to.path === "/register") {
      next("/");
    } else {
      if (name) {
        next();
      } else {
        // 没有用户信息，派发action让仓库存储用户信息再跳转
        try {
          await store.dispatch("user/getUserInfo");
          next();
        } catch (error) {
          // token失效了,清空token,跳转登录
          console.log(error.message);
          store.commit("user/CLEAR_USER_INFO");
          next("/login");
        }
      }
    }
  } else {
    next();
  }
});

export default router;
