<template>
  <div class="footer-list">
    <FooterListItem
      v-for="item in items"
      :key="item.title"
      :item="item"
    ></FooterListItem>
  </div>
</template>

<script>
import FooterListItem from "@/components/Footer/FooterListItem.vue";

export default {
  name: "FooterList",
  components: { FooterListItem },
  data() {
    return {
      items: [
        {
          title: "购物指南",
          links: [
            "购物流程",
            "会员介绍",
            "生活旅行/团购",
            "常见问题",
            "购物指南",
          ],
        },
        {
          title: "配送方式",
          links: [
            "上门自提",
            "211限时达",
            "配送服务查询",
            "配送费收取标准",
            "海外配送",
          ],
        },
        {
          title: "支付方式",
          links: ["货到付款", "在线支付", "分期付款", "邮局汇款", "公司转账"],
        },
        {
          title: "售后服务",
          links: [
            "售后政策",
            "价格保护",
            "退款说明",
            "返修/退换货",
            "取消订单",
          ],
        },
        {
          title: "特色服务",
          links: ["夺宝岛", "DIY装机", "延保服务", "尚品汇E卡", "尚品汇通信"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer-list {
  padding: 20px 0;
  border-bottom: 1px solid #e4e1e1;
  border-top: 1px solid #e4e1e1;
  overflow: hidden;
}
</style>
