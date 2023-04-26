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
  return service({
    url: "/user/passport/register",
    method: "post",
    data,
  });
};
