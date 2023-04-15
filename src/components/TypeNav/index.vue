<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="#">服装城</a>
        <a href="#">美妆馆</a>
        <a href="#">尚品汇超市</a>
        <a href="#">全球购</a>
        <a href="#">闪购</a>
        <a href="#">团购</a>
        <a href="#">有趣</a>
        <a href="#">秒杀</a>
      </nav>
      <div class="sort">
        <div class="all-sort-list">
          <TypeNavItem
            v-for="(c1, index) in categoryList"
            :key="c1.categoryId"
            :category="c1"
            :index="index"
            @changeIndex="changeIndex"
            @removeIndex="removeIndex"
            :class="{ current: currentIndex === index }"
          ></TypeNavItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TypeNavItem from "@/components/TypeNav/TypeNavItem.vue";

export default {
  name: "TypeNav",
  components: { TypeNavItem },
  data() {
    return {
      currentIndex: -1,
    };
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
    removeIndex() {
      this.currentIndex = -1;
    },
  },
  mounted() {
    // 通知Vuex发请求，获取数据，存储与仓库当中
    this.$store.dispatch("categoryList");
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 459px;
      margin-top: 5px;
      background: #fafafa;
      z-index: 999;
    }
  }
}
</style>
