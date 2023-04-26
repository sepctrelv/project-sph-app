import { reqGetCode, reqUserRegister } from "@/api/index.js";

/**
 * State
 */
const state = {
  code: "",
};

/**
 * Getters
 */
const getters = {};

/**
 * Actions
 */
const actions = {
  async getCode({ commit }, phone) {
    const result = await reqGetCode(phone);
    if (result.code === 200) {
      commit("RECEIVE_CODE", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("Get Code Failed!"));
    }
  },
  async userRegister({ commit }, data) {
    const result = await reqUserRegister(data);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
};

/**
 * Mutations
 */
const mutations = {
  RECEIVE_CODE(state, code) {
    state.code = code;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
