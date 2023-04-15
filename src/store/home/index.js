import { reqCategoryList } from "@/api";

const state = {
  categoryList: [],
};
const getters = {};
const actions = {
  // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code === 200) {
      commit("CATEGORY_LIST", result.data);
    }
    console.log(result);
  },
};
const mutations = {
  CATEGORY_LIST(state, categoryList) {
    state.categoryList = categoryList;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
