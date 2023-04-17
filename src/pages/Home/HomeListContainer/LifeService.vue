<template>
  <ul class="life-service">
    <li class="life-item" v-for="item in items" :key="item">
      <i class="list-item"></i>
      <span class="service-intro">{{ item }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LifeService",
  data() {
    return {
      items: [
        "话费",
        "机票",
        "电影票",
        "游戏",
        "彩票",
        "加油站",
        "酒店",
        "火车票",
        "众筹",
        "理财",
        "礼品卡",
        "白条",
      ],
    };
  },
};
</script>

<style scoped lang="less">
.life-service {
  border-right: 1px solid #e4e4e4;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  .life-item {
    border-left: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    margin-right: -1px;
    height: 64px;
    text-align: center;
    position: relative;
    cursor: pointer;
    width: 25%;

    .list-item {
      background-image: url(./images/icons.png);
      width: 61px;
      height: 40px;
      display: block;
    }

    .service-intro {
      line-height: 22px;
      width: 60px;
      display: block;
    }

    &:nth-child(1) {
      .list-item {
        background-position: 0px -5px;
      }
    }

    &:nth-child(2) {
      .list-item {
        background-position: -62px -5px;
      }
    }

    &:nth-child(3) {
      .list-item {
        background-position: -126px -5px;
      }
    }

    &:nth-child(4) {
      .list-item {
        background-position: -190px -5px;
      }
    }

    &:nth-child(5) {
      .list-item {
        background-position: 0px -76px;
      }
    }

    &:nth-child(6) {
      .list-item {
        background-position: -62px -76px;
      }
    }

    &:nth-child(7) {
      .list-item {
        background-position: -126px -76px;
      }
    }

    &:nth-child(8) {
      .list-item {
        background-position: -190px -76px;
      }
    }

    &:nth-child(9) {
      .list-item {
        background-position: 0px -146px;
      }
    }

    &:nth-child(10) {
      .list-item {
        background-position: -62px -146px;
      }
    }

    &:nth-child(11) {
      .list-item {
        background-position: -126px -146px;
      }
    }

    &:nth-child(12) {
      .list-item {
        background-position: -190px -146px;
      }
    }
  }
}
</style>
