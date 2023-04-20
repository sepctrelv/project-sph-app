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
import imageBrand_21 from './images/brand_21.png';
import imageBrand_03 from './images/brand_03.png';
import imageBrand_05 from './images/brand_05.png';
import imageBrand_07 from './images/brand_07.png';
import imageBrand_09 from './images/brand_09.png';
import imageBrand_11 from './images/brand_11.png';
import imageBrand_13 from './images/brand_13.png';
import imageBrand_15 from './images/brand_15.png';
import imageBrand_17 from './images/brand_17.png';
import imageBrand_19 from './images/brand_19.png';
export default {
  name: "HomeBrand",
  data() {
    return {
      items: [
        {
          id: "001",
          image: imageBrand_21,
        },
        {
          id: "002",
          image: imageBrand_03,
        },
        {
          id: "003",
          image: imageBrand_05,
        },
        {
          id: "004",
          image: imageBrand_07,
        },
        {
          id: "005",
          image: imageBrand_09,
        },
        {
          id: "006",
          image: imageBrand_11,
        },
        {
          id: "007",
          image: imageBrand_13,
        },
        {
          id: "008",
          image: imageBrand_15,
        },
        {
          id: "009",
          image: imageBrand_17,
        },
        {
          id: "010",
          image: imageBrand_19,
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
