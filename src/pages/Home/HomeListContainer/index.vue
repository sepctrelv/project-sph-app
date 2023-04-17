<template>
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!-- banner轮播 -->
        <BannerCarousel :list="bannerList"></BannerCarousel>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">尚品汇快报</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearfix"></div>
          <ul class="news-list">
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
          </ul>
        </div>
        <LifeService></LifeService>
        <div class="ads">
          <img src="./images/ad1.png" alt="ad" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BannerCarousel from "@/pages/Home/HomeListContainer/BannerCarousel.vue";
import LifeService from "@/pages/Home/HomeListContainer/LifeService.vue";

export default {
  name: "HomeListContainer",
  components: { BannerCarousel, LifeService },
  computed: {
    ...mapState("home", {
      bannerList: (state) => state.bannerList,
    }),
  },
  mounted() {
    this.$store.dispatch("home/getBannerList");
  },
};
</script>

<style scoped lang="less">
.list-container {
  width: 1200px;
  margin: 0 auto;

  .sortList {
    height: 464px;
    padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 740px;
      height: 100%;
      padding: 5px;
      float: left;
      overflow: hidden;
    }

    .right {
      float: left;
      width: 250px;

      .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .fl {
            float: left;
          }

          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          .bold {
            font-weight: 700;
          }
        }
      }

      .ads {
        margin-top: 5px;

        img {
          opacity: 0.8;
          transition: all 400ms;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
