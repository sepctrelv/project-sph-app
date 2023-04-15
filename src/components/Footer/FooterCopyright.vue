<template>
  <div class="footer-copyright">
    <FooterCopyrightLink :links="links"></FooterCopyrightLink>
    <p>地址：北京市昌平区宏福科技园综合楼6层</p>
    <p>京ICP备19006430号</p>
  </div>
</template>

<script>
import FooterCopyrightLink from "@/components/Footer/FooterCopyrightLink.vue";
export default {
  name: "FooterCopyright",
  components: { FooterCopyrightLink },
  data() {
    return {
      links: [
        "关于我们",
        "联系我们",
        "联系客服",
        "合作招商",
        "商家帮助",
        "营销中心",
        "友情链接",
        "隐私政策",
      ],
    };
  },
};
</script>

<style scoped lang="less">
.footer-copyright {
  padding: 20px;
  text-align: center;

  p:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
