import { reqGetShopCart, reqDeleteCart } from "@/api/index.js";

/**
 * State
 */
const state = {
  cartList: [],
};

/**
 * Getters
 */
const getters = {
  cartInfoList(state) {
    return state.cartList[0]?.cartInfoList || [];
  },
};

/**
 * Actions
 */
const actions = {
  async getCartList({ commit }) {
    let result = await reqGetShopCart();
    if (result.code === 200) {
      commit("RECEIVE_CART_LIST", result.data);
    }
  },
  async deleteCart({ commit }, skuId) {
    let result = await reqDeleteCart(skuId);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failure"));
    }
  },
};

/**
 * Mutations
 */
const mutations = {
  RECEIVE_CART_LIST(state, cartList) {
    state.cartList = cartList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
