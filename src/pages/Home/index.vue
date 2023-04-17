<template>
  <div>
    <!--  三级联动全局组件  -->
    <TypeNav></TypeNav>
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
import HomeListContainer from "@/pages/Home/HomeListContainer";
import HomeRecommend from "@/pages/Home/HomeRecommend";
import HomeRank from "@/pages/Home/HomeRank";
import HomeLike from "@/pages/Home/HomeLike";
import HomeFloor from "@/pages/Home/HomeFloor";
import HomeBrand from "@/pages/Home/HomeBrand";

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
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
};
</script>

<style scoped></style>
