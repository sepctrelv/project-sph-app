import { reqGetCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";

/**
 * State
 */
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};

/**
 * Getters
 */
const getters = {};

/**
 * Actions
 */
const actions = {
  // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async getBaseCategoryList({ commit }) {
    let result = await reqGetCategoryList();
    if (result.code === 200) {
      commit("RECEIVE_BASE_CATEGORY_LIST", result.data);
    }
  },
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code === 200) {
      commit("RECEIVE_BANNER_LIST", result.data);
    }
  },
  async getFloorList({ commit }) {
    let result = await reqGetFloorList();
    if (result.code === 200) {
      commit("RECEIVE_FLOOR_LIST", result.data);
    }
  },
};

/**
 * Mutations
 */
const mutations = {
  RECEIVE_BASE_CATEGORY_LIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  RECEIVE_BANNER_LIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  RECEIVE_FLOOR_LIST(state, floorList) {
    state.floorList = floorList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
