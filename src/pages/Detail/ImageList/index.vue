<template>
  <div class="swiper" ref="detailSwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(skuImg, index) in skuImageList"
        :key="skuImg.id"
      >
        <img
          :src="skuImg.imgUrl"
          :class="{ active: currentIndex === index }"
          @click="changeCurrentIndex(index)"
          alt=""
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swiper from "swiper/bundle";
export default {
  name: "ImageList",
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    ...mapGetters("detail", ["skuImageList"]),
  },
  watch: {
    skuImageList: {
      immediate: true,
      handler(value) {
        if (value.length === 0) return;

        this.$nextTick(() => {
          new Swiper(this.$refs.detailSwiper, {
            slidesPerView: 5,
            slidesPerGroup: 5,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
.swiper {
  height: 56px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 14px;

  .swiper-slide {
    width: 56px;
    height: 56px;
    text-align: center;

    img {
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      //display: block;
      cursor: pointer;
      transition: border-color 0.15s;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-lock {
    display: flex;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 14px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    cursor: pointer;

    &::after {
      font-size: 14px;
    }
  }
}
</style>
