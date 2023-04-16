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

export const reqGetBannerList = () => mockService.get("/banners");

export const reqGetFloorList = () => mockService.get("/floors");
