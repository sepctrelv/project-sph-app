<template>
  <div class="footer">
    <div class="footer-container">
      <FooterList></FooterList>
      <FooterCopyright></FooterCopyright>
    </div>
  </div>
</template>

<script>
import FooterList from "@/components/Footer/FooterList.vue";
import FooterCopyright from "@/components/Footer/FooterCopyright.vue";
export default {
  name: "TheFooter",
  components: { FooterList, FooterCopyright },
};
</script>

<style scoped lang="less">
.footer {
  background-color: #eaeaea;
  color: #666;

  &-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
}
</style>
