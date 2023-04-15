<template>
  <div class="item" @mouseenter="changeIndex(index)" @mouseleave="removeIndex">
    <h3>
      <a href="">{{ category.categoryName }}</a>
    </h3>
    <div class="item-list clearfix">
      <div
        class="sub-item"
        v-for="c2 in category.categoryChild"
        :key="c2.categoryId"
      >
        <dl class="fore">
          <dt>
            <a href="">{{ c2.categoryName }}</a>
          </dt>
          <dd>
            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
              <a href="">{{ c3.categoryName }}</a>
            </em>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeNavItem",
  props: ["category", "index"],
  methods: {
    changeIndex(index) {
      this.$emit("changeIndex", index);
    },
    removeIndex() {
      this.$emit("removeIndex");
    },
  },
};
</script>

<style scoped lang="less">
.item {
  height: 27px;
  transition: background-color 0.15s;

  &.current {
    background-color: #d9d9d9;
  }

  h3 {
    line-height: 27px;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    padding: 0 20px;
    margin: 0;

    a {
      color: #333;
    }
  }

  .item-list {
    display: none;
    position: absolute;
    width: 734px;
    min-height: 460px;
    background: #f7f7f7;
    left: 210px;
    border: 1px solid #ddd;
    top: 0;
    z-index: 9999 !important;

    .sub-item {
      float: left;
      width: 650px;
      padding: 0 4px 0 8px;

      dl {
        border-top: 1px solid #eee;
        padding: 6px 0;
        overflow: hidden;
        zoom: 1;

        &.fore {
          border-top: 0;
        }

        dt {
          position: relative;
          float: left;
          width: 70px;
          line-height: 22px;
          text-align: right;
          padding: 3px 6px 0 0;
          margin-right: 14px;
          font-weight: 700;

          &::after {
            content: ">";
            position: absolute;
            right: -10px;
            color: #666;
          }
        }

        dd {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding: 8px 0 0;
          overflow: hidden;

          em {
            float: left;
            height: 14px;
            line-height: 14px;
            padding: 0 8px;
          }
        }
      }
    }
  }

  &:hover {
    .item-list {
      display: block;
    }
  }
}
</style>
