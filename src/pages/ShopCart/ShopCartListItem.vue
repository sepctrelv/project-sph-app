<template>
  <ul class="cart-list">
    <li class="cart-list-con1">
      <input
        type="checkbox"
        name="chk_list"
        :checked="cart.isChecked === 1"
        @change="updateChecked"
      />
    </li>
    <li class="cart-list-con2">
      <img :src="cart.imgUrl" alt="" />
      <div class="item-msg">{{ cart.skuName }}</div>
    </li>
    <li class="cart-list-con3">
      <span class="price">{{ cart.skuPrice.toFixed(2) }}</span>
    </li>
    <li class="cart-list-con4">
      <a class="mins" @click="num > 1 ? num-- : ''">-</a>
      <input
        autocomplete="off"
        type="text"
        minnum="1"
        class="itxt"
        v-model.number="num"
      />
      <a class="plus" @click="num++">+</a>
    </li>
    <li class="cart-list-con5">
      <span class="sum">{{ cart.skuNum * cart.skuPrice }}</span>
    </li>
    <li class="cart-list-con6">
      <a class="sindelet" @click="deleteCart">删除</a>
      <a>移到收藏</a>
    </li>
  </ul>
</template>

<script>
import { debounce } from "lodash";

export default {
  name: "ShopCartListItem",
  props: ["cart"],
  data() {
    return {
      num: 1,
    };
  },
  watch: {
    cart: {
      handler(value) {
        this.num = value.skuNum;
      },
      immediate: true,
    },
    num(value) {
      if (isNaN(value) || value < 1) {
        this.num = 1;
      } else {
        this.num = parseInt(value);
      }
      this.handleNum();
    },
  },
  methods: {
    handleNum: debounce(async function () {
      try {
        await this.$store.dispatch("detail/addOrUpdateShopCart", {
          skuId: this.cart.skuId,
          skuNum: this.num - this.cart.skuNum,
        });
        this.$emit("updateCartDate");
      } catch (error) {
        console.log(error.message);
      }
    }, 400),
    async deleteCart() {
      try {
        await this.$store.dispatch("shopcart/deleteCart", this.cart.skuId);
        this.$emit("updateCartDate");
      } catch (error) {
        console.log(error.message);
      }
    },
    async updateChecked(event) {
      let params = {
        skuId: this.cart.skuId,
        isChecked: event.target.checked ? "1" : "0",
      };
      try {
        await this.$store.dispatch("shopcart/updateChecked", params);
        this.$emit("updateCartDate");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style scoped lang="less">
.cart-list {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;

  .cart-list-con1 {
    width: 5%;
  }

  .cart-list-con2 {
    display: flex;
    align-items: center;
    width: 45%;
    gap: 20px;

    img {
      width: 82px;
      height: 82px;
      flex-grow: 0;
    }

    .item-msg {
      margin-right: 30px;
      line-height: 18px;
      flex-grow: 1;
    }
  }

  .cart-list-con3 {
    width: 10%;
  }

  .cart-list-con4 {
    display: flex;
    align-items: center;
    width: 17%;

    .mins {
      border: 1px solid #ddd;
      border-right: 0;
      float: left;
      color: #666;
      width: 6px;
      text-align: center;
      padding: 8px;
      cursor: pointer;
    }

    input {
      border: 1px solid #ddd;
      width: 40px;
      height: 32px;
      float: left;
      text-align: center;
      font-size: 14px;
    }

    .plus {
      border: 1px solid #ddd;
      border-left: 0;
      float: left;
      color: #666;
      width: 6px;
      text-align: center;
      padding: 8px;
      cursor: pointer;
    }
  }

  .cart-list-con5 {
    width: 10%;

    .sum {
      font-size: 16px;
    }
  }

  .cart-list-con6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 13%;

    a {
      color: #666;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
