// 引入一级路由组件
import HomePage from "@/pages/Home/index.vue";
import SearchPage from "@/pages/Search/index.vue";
import DetailPage from "@/pages/Detail/index.vue";
import AddCartSuccess from "@/pages/AddCartSuccess/index.vue";
import LoginPage from "@/pages/Login/index.vue";
import RegisterPage from "@/pages/Register/index.vue";
import ShopCart from "@/pages/ShopCart/index.vue";
import Trade from "@/pages/Trade/index.vue";
import Pay from "@/pages/Pay/index.vue";
import PaySuccess from "@/pages/PaySuccess/index.vue";
import Center from "@/pages/Center/index.vue";
// 引入二级路由组件
import MyOrder from "@/pages/Center/MyOrder/index.vue";
import GroupOrder from "@/pages/Center/GroupOrder/index.vue";

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
    name: "addCartSuccess",
    path: "/addCartSuccess",
    component: AddCartSuccess,
    meta: {
      showFooter: true,
      showSearchBar: true,
    },
  },
  {
    name: "shopcart",
    path: "/shopcart",
    component: ShopCart,
    meta: {
      showFooter: true,
      showSearchBar: true,
    },
  },
  {
    path: "/trade",
    component: Trade,
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/pay",
    component: Pay,
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/paySuccess",
    component: PaySuccess,
    meta: {
      showFooter: true,
    },
  },
  {
    name: "center",
    path: "/center",
    component: Center,
    meta: {
      showFooter: true,
      showSearchBar: true,
    },
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
    ],
    redirect: "/center/myorder",
  },
  {
    name: "login",
    path: "/login",
    component: LoginPage,
  },
  {
    name: "register",
    path: "/register",
    component: RegisterPage,
  },
  // 重定向，在项目跑起来的时候，访问/，立马定向到首页
  {
    path: "*",
    redirect: "/",
  },
];
