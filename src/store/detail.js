import { reqGetDetailInfo } from "@/api/index.js";

/**
 * State
 */
const state = {
  detailInfo: {},
};

/**
 * Getters
 */
const getters = {
  categoryView(state) {
    return state.detailInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.detailInfo.skuInfo || {};
  },
  skuImageList(state) {
    return state.detailInfo.skuInfo?.skuImageList || [];
  },
  spuSaleAttrList(state) {
    return state.detailInfo.spuSaleAttrList || [];
  },
};

/**
 * Actions
 */
const actions = {
  async getDetailInfo({ commit }, skuId) {
    const result = await reqGetDetailInfo(skuId);
    if (result.code === 200) {
      commit("RECEIVE_DETAIL_INFO", result.data);
    }
  },
};

/**
 * Mutations
 */
const mutations = {
  RECEIVE_DETAIL_INFO(state, detailInfo) {
    state.detailInfo = detailInfo;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
