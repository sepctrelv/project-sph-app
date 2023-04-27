<template>
  <div>
    <!--  三级联动全局组件  -->
    <TypeNav :showCategory="true"></TypeNav>
    <HomeListContainer></HomeListContainer>
    <HomeRecommend></HomeRecommend>
    <HomeRank></HomeRank>
    <HomeLike></HomeLike>
    <HomeFloor
      v-for="floor in floorList"
      :key="floor.id"
      :list="floor"
    ></HomeFloor>
    <HomeBrand></HomeBrand>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 引入其余的组件
import HomeListContainer from "@/pages/Home/HomeListContainer/index.vue";
import HomeRecommend from "@/pages/Home/HomeRecommend/index.vue";
import HomeRank from "@/pages/Home/HomeRank/index.vue";
import HomeLike from "@/pages/Home/HomeLike/index.vue";
import HomeFloor from "@/pages/Home/HomeFloor/index.vue";
import HomeBrand from "@/pages/Home/HomeBrand/index.vue";

export default {
  name: "HomePage",
  components: {
    HomeListContainer,
    HomeRecommend,
    HomeRank,
    HomeLike,
    HomeFloor,
    HomeBrand,
  },
  computed: {
    ...mapState("home", {
      floorList: (state) => state.floorList,
    }),
  },
  mounted() {
    this.$store.dispatch("user/getUserInfo");
    this.$store.dispatch("home/getFloorList");
  },
};
</script>

<style scoped></style>
