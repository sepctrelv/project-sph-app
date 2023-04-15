<template>
  <div class="brand">
    <div class="py-container">
      <ul class="brand-list">
        <li class="brand-item" v-for="item in items" :key="item.id">
          <img :src="item.image" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBrand",
  data() {
    return {
      items: [
        {
          id: "001",
          image: require("./images/brand_21.png"),
        },
        {
          id: "002",
          image: require("./images/brand_03.png"),
        },
        {
          id: "003",
          image: require("./images/brand_05.png"),
        },
        {
          id: "004",
          image: require("./images/brand_07.png"),
        },
        {
          id: "005",
          image: require("./images/brand_09.png"),
        },
        {
          id: "006",
          image: require("./images/brand_11.png"),
        },
        {
          id: "007",
          image: require("./images/brand_13.png"),
        },
        {
          id: "008",
          image: require("./images/brand_15.png"),
        },
        {
          id: "009",
          image: require("./images/brand_17.png"),
        },
        {
          id: "010",
          image: require("./images/brand_19.png"),
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.brand {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .brand-list {
      overflow: hidden;
      padding: 15px 0;
      background: #f7f7f7;
      line-height: 18px;

      .brand-item {
        width: 120px;
        float: left;
        height: 37px;

        img {
          border-left: 1px dotted #ccc;
          padding: 0 10px;
        }

        &:first-child {
          img {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>
