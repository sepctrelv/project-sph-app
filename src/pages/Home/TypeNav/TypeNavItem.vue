<template>
  <div class="item">
    <h3>
      <a href="">{{ item.title }}</a>
    </h3>
    <div class="item-list clearfix">
      <div class="sub-item">
        <dl
          class="fore"
          v-for="subItem in item.subItems"
          :key="subItem.category"
        >
          <dt>
            <a href="">{{ subItem.category }}</a>
          </dt>
          <dd>
            <em v-for="(list, index) in subItem.lists" :key="index">
              <a href="">{{ list }}</a>
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
  props: ["item"],
};
</script>

<style scoped lang="less">
.item {
  h3 {
    line-height: 30px;
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
          float: left;
          width: 54px;
          line-height: 22px;
          text-align: right;
          padding: 3px 6px 0 0;
          font-weight: 700;
        }

        dd {
          float: left;
          width: 415px;
          padding: 3px 0 0;
          overflow: hidden;

          em {
            float: left;
            height: 14px;
            line-height: 14px;
            padding: 0 8px;
            margin-top: 5px;
            border-left: 1px solid #ccc;
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
