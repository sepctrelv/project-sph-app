/*
 * ------------------------------
 * 当前这个模块：API进行统一管理
 * ------------------------------
 */
import service from "@/api/service";
import mockService from "@/api/mockService";

// 三级联动接口 接口地址：/api/product/getBaseCategoryList 请求方式：get
export const reqGetCategoryList = () => {
  return service.get("/product/getBaseCategoryList");
};

// 获取Banner数据
export const reqGetBannerList = () => {
  return mockService.get("/banners");
};

// 获取Floor数据
export const reqGetFloorList = () => {
  return mockService.get("/floors");
};

// 获取搜索模块数据 接口地址：/api/list 请求方式：post
export const reqGetSearchInfo = (searchParams = {}) => {
  return service.post("/list", searchParams);
};

// 获取商品详情数据 接口地址：/api/item/{ skuId } 请求方式：get
export const reqGetDetailInfo = (skuId) => {
  return service.get(`/item/${skuId}`);
};

// 将产品添加到购物车中（或者更新某一个产品的个数）
export const reqAllOrUpdateShopCart = (skuId, skuNum) => {
  return service.post(`/cart/addToCart/${skuId}/${skuNum}`);
};

// 获取购物车列表
export const reqGetShopCart = () => {
  return service.get("/cart/cartList");
};

// 删除购物车商品
export const reqDeleteCart = (skuId) => {
  return service.delete(`/cart/deleteCart/${skuId}`);
};

// 修改商品的选中状态
export const reqUpdateChecked = (skuId, isChecked) => {
  return service.get(`/cart/checkCart/${skuId}/${isChecked}`);
};

// 获取注册验证码
export const reqGetCode = (phone) => {
  return service.get(`/user/passport/sendCode/${phone}`);
};

// 注册用户
export const reqUserRegister = (data) => {
  return service.post("/user/passport/register", data);
};

// 登录
export const reqUserLogin = (data) => {
  return service.post("/user/passport/login", data);
};

// 获取用户信息(带着用户的token)
export const reqGetUserInfo = () => {
  return service.get("/user/passport/auth/getUserInfo");
};

// 退出登录
export const reqUserLogout = () => {
  return service.get("/user/passport/logout");
};

// 获取用户地址
export const reqGetUserAddress = () => {
  return service.get("/user/userAddress/auth/findUserAddressList");
};

// 获取订单交易页信息
export const reqGetOrderInfo = () => {
  return service.get("/order/auth/trade");
};

// 提交订单
export const reqSubmitOrder = (tradeNo, data) => {
  return service.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`, data);
};

// 获取订单支付信息
export const reqGetPaymentInfo = (orderId) => {
  return service.get(`/payment/weixin/createNative/${orderId}`);
};

// 查询支付订单状态
export const reqGetPaymentStatus = (orderId) => {
  return service.get(`/payment/weixin/queryPayStatus/${orderId}`);
};

// 获取我的订单列表
export const reqGetMyOrderList = (page, limit) => {
  return service.get(`/order/auth/${page}/${limit}`);
};
