<template>
  <div>
    <!--  三级联动全局组件  -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <HomeRecommend></HomeRecommend>
    <HomeRank></HomeRank>
    <HomeLike></HomeLike>
    <HomeFloor></HomeFloor>
    <HomeFloor></HomeFloor>
    <HomeBrand></HomeBrand>
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from "@/pages/Home/ListContainer";
import HomeRecommend from "@/pages/Home/HomeRecommend";
import HomeRank from "@/pages/Home/HomeRank";
import HomeLike from "@/pages/Home/HomeLike";
import HomeFloor from "@/pages/Home/HomeFloor";
import HomeBrand from "@/pages/Home/HomeBrand";

export default {
  name: "HomePage",
  components: {
    ListContainer,
    HomeRecommend,
    HomeRank,
    HomeLike,
    HomeFloor,
    HomeBrand,
  },
};
</script>

<style scoped></style>
