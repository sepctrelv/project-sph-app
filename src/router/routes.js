// 引入路由组件
import HomePage from "@/pages/Home/index.vue";
import SearchPage from "@/pages/Search/index.vue";
import DetailPage from "@/pages/Detail/index.vue";
import LoginPage from "@/pages/Login/index.vue";
import RegisterPage from "@/pages/Register/index.vue";

export default [
  {
    path: "/",
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
  },
  {
    name: "detail",
    path: "/detail/:skuId",
    component: DetailPage,
    meta: {
      showFooter: true,
      showSearchBar: true,
    },
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
    redirect: "/",
  },
];
