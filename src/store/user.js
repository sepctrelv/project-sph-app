import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqGetUserInfo,
  reqUserLogout,
} from "@/api/index.js";
import { setToken, getToken, clearToken } from "@/utils/token.js";

/**
 * State
 */
const state = {
  code: "",
  token: getToken(),
  userInfo: {},
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
  async userRegister(_, data) {
    const result = await reqUserRegister(data);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  async userLogin({ commit }, data) {
    const result = await reqUserLogin(data);
    if (result.code === 200) {
      // 用户已经登录成功且获取到token
      commit("USER_LOGIN", result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  async getUserInfo({ commit }) {
    const result = await reqGetUserInfo();
    if (result.code === 200) {
      commit("RECEIVE_USER_INFO", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  async userLogout({ commit }) {
    const result = await reqUserLogout();
    if (result.code === 200) {
      commit("CLEAR_USER_INFO");
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
  USER_LOGIN(state, token) {
    state.token = token;
    // 持久化存储token
    setToken(token);
  },
  RECEIVE_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  CLEAR_USER_INFO(state) {
    state.userInfo = {};
    state.token = "";
    clearToken();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
