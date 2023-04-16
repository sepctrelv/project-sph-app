<template>
  <div class="type-nav">
    <div class="container">
      <div
        class="sort-wrap"
        @mouseleave="hideCategories"
        @mouseenter="showCategories"
      >
        <h2 class="all">全部商品分类</h2>
        <Transition name="sort">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list" @click="goSearch($event)">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ current: currentIndex === index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    class="category-item-link"
                    :data-category-name="c1.categoryName"
                    :data-category1-id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{
                    display: currentIndex === index ? 'block' : 'none',
                  }"
                >
                  <div
                    class="sub-item"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          class="category-item-link"
                          :data-category-name="c2.categoryName"
                          :data-category2-id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            class="category-item-link"
                            :data-category-name="c3.categoryName"
                            :data-category3-id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <nav class="nav">
        <a href="#">服装城</a>
        <a href="#">美妆馆</a>
        <a href="#">尚品汇超市</a>
        <a href="#">全球购</a>
        <a href="#">闪购</a>
        <a href="#">团购</a>
        <a href="#">有趣</a>
        <a href="#">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShow: true,
    };
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  mounted() {
    this.isShow = this.$route.path === "/";
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
    goSearch(event) {
      let { categoryName, category1Id, category2Id, category3Id } =
        event.target.dataset;

      if (categoryName) {
        const query = { categoryName };

        if (category1Id) {
          query.category1Id = category1Id;
        } else if (category2Id) {
          query.category2Id = category2Id;
        } else if (category3Id) {
          query.category3Id = category3Id;
        }
        // 如果路由跳转的时候，带有params参数，要一起传递过去
        this.$router.push({
          name: "search",
          params: this.$route.params,
          query,
        });
      }
    },
    showCategories() {
      // 当鼠标移入全部商品分类，显示商品分类列表
      if (this.$route.path !== "/") {
        this.isShow = true;
      }
    },
    hideCategories() {
      this.currentIndex = -1;

      if (this.$route.path !== "/") {
        this.isShow = false;
      }
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 459px;
      padding-top: 5px;
      z-index: 999;
    }

    .sort-enter,
    .sort-leave-to {
      height: 0;
    }

    .sort-leave,
    .sort-enter-to {
      height: 459px;
    }

    .sort-enter-active,
    .sort-leave-active {
      transition: all 0.25s;
      overflow: hidden;
    }

    .all-sort-list {
      background: #fafafa;

      .item {
        height: 27px;
        transition: background-color 0.2s ease;

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
      }

      .category-item-link {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
