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
import TheHeader from "@/components/Header";
import TheFooter from "@/components/Footer";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped></style>
