import { reqGetDetailInfo, reqAllOrUpdateShopCart } from "@/api/index.js";
// 封装游客身份模块nanoid--->生成一个随机字符串
import { getNanoID } from "@/utils/nanoid_token.js";

/**
 * State
 */
const state = {
  detailInfo: {},
  // 游客临时身份
  nanoid_token: getNanoID(),
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
  // 获取产品信息
  async getDetailInfo({ commit }, skuId) {
    const result = await reqGetDetailInfo(skuId);
    if (result.code === 200) {
      commit("RECEIVE_DETAIL_INFO", result.data);
    }
  },
  // 将产品添加到购物车中
  async addOrUpdateShopCart(_, { skuId, skuNum }) {
    const result = await reqAllOrUpdateShopCart(skuId, skuNum);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("Add Or Update ShopCart Failed!"));
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
