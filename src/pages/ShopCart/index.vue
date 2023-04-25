<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ShopCartListItem
          v-for="cart in cartInfoList"
          :key="cart.id"
          :cart="cart"
          @updateCartDate="getShopCartDate"
        ></ShopCartListItem>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="isAllChecked" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择 <span>0</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ getTotalPrice() }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShopCartListItem from "@/pages/ShopCart/ShopCartListItem.vue";

export default {
  name: "ShopCart",
  components: { ShopCartListItem },
  computed: {
    ...mapGetters("shopcart", ["cartInfoList"]),
    isAllChecked() {
      if (this.cartInfoList.length === 0) return false;
      return this.cartInfoList.every((data) => {
        return data.isChecked === 1;
      });
    },
  },
  mounted() {
    this.getShopCartDate();
  },
  methods: {
    getShopCartDate() {
      this.$store.dispatch("shopcart/getCartList");
    },
    getTotalPrice() {
      return this.cartInfoList.reduce(
        (total, cur) => total + cur.skuPrice * cur.skuNum,
        0
      );
    },
  },
};
</script>

<style scoped lang="less">
.cart {
  width: 1200px;
  margin: 0 auto;
  padding: 16px 0;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;
    }
  }

  .cart-tool {
    display: flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      display: flex;
      align-items: center;
      padding: 10px;
      overflow: hidden;

      span {
        margin-left: 6px;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      align-items: center;

      .chosed {
        line-height: 26px;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
