import { reqGetUserAddress, reqGetOrderInfo } from "@/api/index.js";

const state = {
  address: [],
  orderInfo: {},
};

const getters = {};

const actions = {
  // 获取用户地址信息
  async getUserAddress({ commit }) {
    const result = await reqGetUserAddress();
    console.log(result);
    if (result.code === 200) {
      commit("RECEIVE_USER_ADDRESS", result.data);
    }
  },
  // 获取商品清单数据
  async getOrderInfo({ commit }) {
    const result = await reqGetOrderInfo();
    console.log(result);
    if (result.code === 200) {
      commit("RECEIVE_ORDER_INFO", result.data);
    }
  },
};

const mutations = {
  RECEIVE_USER_ADDRESS(state, address = []) {
    state.address = address;
  },
  RECEIVE_ORDER_INFO(state, orderInfo) {
    state.orderInfo = orderInfo;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
