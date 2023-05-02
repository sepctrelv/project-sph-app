<template>
  <div class="spec-preview">
    <img v-lazy="imgUrl" alt="" />
    <div class="event" @mousemove="handleMove" ref="event"></div>
    <div class="big">
      <img :src="imgUrl" alt="" ref="bigImg" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
import { throttle } from "lodash";

export default {
  name: "Zoom",
  props: {
    imgUrl: String,
  },
  mounted() {
    this.maskWidth = this.$refs.event.clientWidth / 2;
  },
  methods: {
    handleMove: throttle(function (event) {
      const posX = event.layerX || event.offsetX;
      const posY = event.layerY || event.offsetY;
      const maskWidth = this.maskWidth;
      let leftPosition = 0;
      let topPosition = 0;
      leftPosition = posX - maskWidth / 2;
      topPosition = posY - maskWidth / 2;

      if (leftPosition < 0) {
        leftPosition = 0;
      } else if (leftPosition > maskWidth) {
        leftPosition = maskWidth;
      }
      if (topPosition < 0) {
        topPosition = 0;
      } else if (topPosition > maskWidth) {
        topPosition = maskWidth;
      }

      const maskEl = this.$refs.mask;
      maskEl.style.transform = `translate(${leftPosition}px, ${topPosition}px)`;

      const bigImgEl = this.$refs.bigImg;
      bigImgEl.style.transform = `translate(${-2 * leftPosition}px, ${
        -2 * topPosition
      }px)`;
    }, 16),
  },
};
</script>

<style scoped lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
