export default [
  {
    path: "/",
    component: () => import("@/pages/Home/index.vue"),
    meta: {
      showFooter: true,
      showSearchBar: true,
    },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: () => import("@/pages/Search/index.vue"),
    meta: {
      showFooter: true,
      showSearchBar: true,
    },
  },
  {
    name: "detail",
    path: "/detail/:skuId",
    component: () => import("@/pages/Detail/index.vue"),
    meta: {
      showFooter: true,
      showSearchBar: true,
    },
  },
  {
    name: "addCartSuccess",
    path: "/addcartsuccess",
    component: () => import("@/pages/AddCartSuccess/index.vue"),
    meta: {
      showFooter: true,
      showSearchBar: true,
    },
  },
  {
    name: "shopcart",
    path: "/shopcart",
    component: () => import("@/pages/ShopCart/index.vue"),
    meta: {
      showFooter: true,
      showSearchBar: true,
    },
  },
  {
    path: "/trade",
    component: () => import("@/pages/Trade/index.vue"),
    meta: {
      showFooter: true,
    },
    beforeEnter: (to, from, next) => {
      if (from.path === "/shopcart") {
        next();
      } else {
        next(from.path);
      }
    },
  },
  {
    path: "/pay",
    component: () => import("@/pages/Pay/index.vue"),
    meta: {
      showFooter: true,
    },
    beforeEnter: (to, from, next) => {
      console.log(from.path);
      if (from.path === "/trade") {
        next();
      } else {
        next(from.path);
      }
    },
  },
  {
    path: "/paysuccess",
    component: () => import("@/pages/PaySuccess/index.vue"),
    meta: {
      showFooter: true,
    },
  },
  {
    name: "center",
    path: "/center",
    component: () => import("@/pages/Center/index.vue"),
    meta: {
      showFooter: true,
      showSearchBar: true,
    },
    children: [
      {
        path: "myorder",
        component: () => import("@/pages/Center/MyOrder/index.vue"),
      },
      {
        path: "grouporder",
        component: () => import("@/pages/Center/GroupOrder/index.vue"),
      },
    ],
    redirect: "/center/myorder",
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/pages/Login/index.vue"),
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/pages/Register/index.vue"),
  },
  // 重定向，在项目跑起来的时候，访问/，立马定向到首页
  {
    path: "*",
    redirect: "/",
  },
];
