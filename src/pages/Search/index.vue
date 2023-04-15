<template>
  <div>
    <h1>params参数---{{ $route.params.keyword }}</h1>
    <h1>query参数---{{ $route.query.k }}</h1>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  // 路由组件可以传递props
  props: ["keyword", "k"],
};
</script>

<style scoped></style>
