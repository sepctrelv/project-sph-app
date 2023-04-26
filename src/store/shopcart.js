import {
  reqGetShopCart,
  reqDeleteCart,
  reqUpdateChecked,
} from "@/api/index.js";

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
      return Promise.reject(new Error("Delete Cart Failed!"));
    }
  },
  async updateChecked({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateChecked(skuId, isChecked);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("Update Checked Failed!"));
    }
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    let filteredCart = getters.cartInfoList.filter(
      (cart) => cart.isChecked === 1
    );
    return Promise.all(
      filteredCart.map((cart) => dispatch("deleteCart", cart.skuId))
    );
  },
  updateAllChecked({ dispatch, getters }, isChecked) {
    return Promise.all(
      getters.cartInfoList.map((cart) =>
        dispatch("updateChecked", { skuId: cart.skuId, isChecked })
      )
    );
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
