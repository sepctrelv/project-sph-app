<template>
  <ul class="footer-copyright-link">
    <li v-for="(link, index) in links" :key="index">{{ link }}</li>
  </ul>
</template>

<script>
export default {
  name: "FooterCopyrightLink",
  props: ["links"],
};
</script>

<style scoped lang="less">
.footer-copyright-link {
  margin-bottom: 20px;

  li {
    display: inline;

    &:not(:last-child)::after {
      content: "";
      border-left: 1px solid #666;
      margin: 8px 10px;
    }
  }
}
</style>
