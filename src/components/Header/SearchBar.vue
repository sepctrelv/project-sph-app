<template>
  <div class="searchArea">
    <form action="###" class="searchForm">
      <input
        type="text"
        id="autocomplete"
        class="input-error input-xxlarge"
        v-model.trim="keyword"
      />
      <button
        class="sui-btn btn-xlarge btn-danger"
        type="button"
        @click="goSearch"
      >
        搜索
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    // 搜索按钮的回调函数: 需要向Search路由进行跳转
    goSearch() {
      if (!this.keyword) return;

      this.$router.push({
        name: "search",
        params: { keyword: this.keyword || undefined },
        query: this.$route.query,
      });
    },
  },
};
</script>

<style scoped lang="less">
.searchArea {
  float: right;
  margin-top: 35px;

  .searchForm {
    overflow: hidden;

    input {
      box-sizing: border-box;
      width: 490px;
      height: 32px;
      padding: 0 4px;
      border: 2px solid #ea4a36;
      float: left;

      &:focus {
        outline: none;
      }
    }

    button {
      height: 32px;
      width: 68px;
      background-color: #ea4a36;
      border: none;
      color: #fff;
      float: left;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
