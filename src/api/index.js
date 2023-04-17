/*
 * ------------------------------
 * 当前这个模块：API进行统一管理
 * ------------------------------
 */
import service from "@/api/service";
import mockService from "@/api/mockService";

// 三级联动接口 接口地址：/api/product/getBaseCategoryList 请求方式：get
export const reqGetCategoryList = () =>
  service.get("/product/getBaseCategoryList");

// 获取Banner数据
export const reqGetBannerList = () => mockService.get("/banners");

// 获取Floor数据
export const reqGetFloorList = () => mockService.get("/floors");

// 获取搜索模块数据 接口地址：/api/list 请求方式：post
export const reqGetSearchInfo = (searchParams = {}) =>
  service.post("/list", searchParams);
