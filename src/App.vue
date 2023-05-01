<template>
  <div>
    <TheHeader></TheHeader>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!--  在Home、Search显示，在Login、Register隐藏  -->
    <TheFooter v-show="$route.meta.showFooter"></TheFooter>
  </div>
</template>

<script>
import TheHeader from "@/components/Header/index.vue";
import TheFooter from "@/components/Footer/index.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  mounted() {
    // 通知Vuex发请求，获取数据，存储与仓库当中
    this.$store.dispatch("home/getBaseCategoryList");
  },
};
</script>

<style lang="less" scoped></style>
