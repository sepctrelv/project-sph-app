<template>
  <div class="footer-list-item">
    <h5 class="footer-list-item-title">{{ item.title }}</h5>
    <ul class="footer-list-item-links">
      <li v-for="(link, index) in item.links" :key="index">{{ link }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterListItem",
  props: ["item"],
};
</script>

<style scoped lang="less">
.footer-list-item {
  width: 20%;
  float: left;

  &-title {
    margin-bottom: 16px;
    font-size: 14px;
  }

  &-links {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
