/*
 * ------------------------------
 * 当前这个模块：API进行统一管理
 * ------------------------------
 */
import service from "@/api/service";
import mockService from "@/api/mockService";

/**
 * 三级联动接口
 * /api/product/getBaseCategoryList
 * get请求
 * 无参数
 */
export const reqGetCategoryList = () =>
  service.get("/product/getBaseCategoryList");
// 获取Banner数据
export const reqGetBannerList = () => mockService.get("/banners");
// 获取Floor数据
export const reqGetFloorList = () => mockService.get("/floors");
