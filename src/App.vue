<template>
  <div>
    <SphHeader></SphHeader>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!--  在Home、Search显示，在Login、Register隐藏  -->
    <SphFooter v-show="$route.meta.showFooter"></SphFooter>
  </div>
</template>

<script>
import SphHeader from "@/components/Header";
import SphFooter from "@/components/Footer";
export default {
  name: "App",
  components: {
    SphHeader,
    SphFooter,
  },
};
</script>

<style lang="scss" scoped></style>
