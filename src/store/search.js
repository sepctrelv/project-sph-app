import { reqGetSearchInfo } from "@/api";

/**
 * State
 */
const state = {
  searchList: {},
};

/**
 * Getters
 */
const getters = {
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
  goodsList(state) {
    return state.searchList.goodsList || [];
  },
};

/**
 * Actions
 */
const actions = {
  async getSearchList({ commit }, searchParams) {
    searchParams = { ...searchParams };
    // 过滤掉所有属性值为空的属性
    Object.keys(searchParams).forEach((key) => {
      if (searchParams[key] === "") {
        delete searchParams[key];
      }
    });
    const result = await reqGetSearchInfo(searchParams);
    if (result.code === 200) {
      commit("RECEIVE_SEARCH_LIST", result.data);
    }
  },
};

/**
 * Mutations
 */
const mutations = {
  RECEIVE_SEARCH_LIST(state, searchList) {
    state.searchList = searchList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
