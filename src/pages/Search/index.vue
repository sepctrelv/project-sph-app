<template>
  <div>
    <!-- 商品分类三级列表 -->
    <TypeNav></TypeNav>
    <div class="main">
      <div class="py-container">
        <!-- bread 面包屑 -->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <!-- 分类的面包屑 -->
            <li class="with-x" v-if="searchParams.categoryName">
              {{ searchParams.categoryName
              }}<i @click="removeBreadcrumbCategoryName">×</i>
            </li>
            <!-- 关键字的面包屑 -->
            <li class="with-x" v-if="searchParams.keyword">
              {{ searchParams.keyword
              }}<i @click="removeBreadcrumbKeyword">×</i>
            </li>
            <!-- 品牌的面包屑 -->
            <li class="with-x" v-if="searchParams.trademark">
              {{ `品牌：${trademarkName}`
              }}<i @click="removeBreadcrumbTrademark">×</i>
            </li>
            <!-- 平台的售卖的属性的面包屑 -->
            <li
              class="with-x"
              v-for="(attr, index) in searchParams.props"
              :key="index"
            >
              {{ getAttrName(attr)
              }}<i @click="removeBreadcrumbAttrProp(index)">×</i>
            </li>
          </ul>
        </div>

        <!-- selector -->
        <SearchSelector
          @setTrademark="setTrademark"
          @addAttrProps="addAttrProps"
        ></SearchSelector>

        <!-- 详情 -->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <!-- 排序 -->
              <ul class="sui-nav">
                <li
                  :class="{ active: isSortBase }"
                  @click="changeSearchOrder('1')"
                >
                  <a
                    >综合<span v-show="isSortBase">{{ sortArrow }}</span></a
                  >
                </li>
                <li
                  :class="{ active: isSortPrice }"
                  @click="changeSearchOrder('2')"
                >
                  <a
                    >价格<span v-show="isSortPrice">{{ sortArrow }}</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- 商品列表 -->
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="good in goodsList" :key="good.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link :to="`/detail/${good.id}`">
                      <img v-lazy="good.defaultImg" alt="good.title" />
                    </router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ good.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <router-link :to="`/detail/${good.id}`" :title="good.title"
                      >{{ good.title }}
                    </router-link>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 分页 -->
          <ThePagination
            :pageNo="searchParams.pageNo"
            :pageSize="searchParams.pageSize"
            :total="total"
            :continues="5"
            @currentChange="getSearchData"
          ></ThePagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import SearchSelector from "@/pages/Search/SearchSelector.vue";

export default {
  name: "SearchPage",
  components: { SearchSelector },
  data() {
    return {
      searchParams: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: "",
      },
    };
  },
  computed: {
    ...mapGetters("search", ["goodsList"]),
    ...mapState("search", {
      total: (state) => state.searchList.total,
    }),
    trademarkName() {
      return this.searchParams.trademark
        ? this.searchParams.trademark.split(":")[1]
        : "";
    },
    isSortBase() {
      return this.searchParams.order.indexOf("1") !== -1;
    },
    isSortPrice() {
      return this.searchParams.order.indexOf("2") !== -1;
    },
    sortArrow() {
      return this.searchParams.order.indexOf("asc") === -1 ? "⬇" : "⬆";
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.resetSearchId();
    this.updateSearchParams(to);
    this.getSearchData();
    next();
  },
  beforeMount() {
    this.updateSearchParams(this.$route);
  },
  mounted() {
    this.getSearchData();
  },
  methods: {
    // 向服务器发请求获取search模块数据（根据参数不同返回不同的数据进行展示）
    getSearchData(page = 1) {
      this.searchParams.pageNo = page;
      this.$store.dispatch("search/getSearchList", this.searchParams);
    },
    // 更新searchParams
    updateSearchParams($route) {
      Object.assign(this.searchParams, $route.query, $route.params);
    },
    // 重置搜索id
    resetSearchId() {
      this.searchParams.category1Id = "";
      this.searchParams.category2Id = "";
      this.searchParams.category3Id = "";
    },
    // 删除分类名
    removeBreadcrumbCategoryName() {
      this.searchParams.categoryName = "";
      this.resetSearchId();
      this.$router.replace({ name: "search", params: this.$route.params });
    },
    // 删除关键字
    removeBreadcrumbKeyword() {
      this.searchParams.keyword = "";
      // 通知Header / SearchBar清除关键字
      this.$bus.$emit("clearKeyword");
      this.$router.replace({ name: "search", query: this.$route.query });
    },
    // 设置品牌
    setTrademark(trademark) {
      const trademarkInfo = `${trademark.tmId}:${trademark.tmName}`;
      if (this.searchParams.trademark !== trademarkInfo) {
        this.searchParams.trademark = trademarkInfo;
        this.getSearchData();
      }
    },
    // 删除品牌
    removeBreadcrumbTrademark() {
      this.searchParams.trademark = "";
      this.getSearchData();
    },
    // 添加售卖属性
    addAttrProps(attrId, attrValue, attrName) {
      const attrProp = `${attrId}:${attrValue}:${attrName}`;
      if (this.searchParams.props.indexOf(attrProp) === -1) {
        this.searchParams.props.push(attrProp);
        this.getSearchData();
      }
    },
    // 获取面包屑属性名
    getAttrName(attr) {
      return `${attr.split(":")[2]}：${attr.split(":")[1]}`;
    },
    // 删除售卖属性
    removeBreadcrumbAttrProp(index) {
      this.searchParams.props.splice(index, 1);
      this.getSearchData();
    },
    // 排序
    changeSearchOrder(flag) {
      let [originFlag, originSort] = this.searchParams.order.split(":");
      if (originFlag === flag) {
        originSort = originSort === "asc" ? "desc" : "asc";
      } else {
        originFlag = flag;
        originSort = "desc";
      }

      this.searchParams.order = [originFlag, originSort].join(":");
      this.getSearchData();
    },
  },
};
</script>

<style scoped lang="less">
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;
      padding-bottom: 16px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0 30px;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                margin: 0 auto 10px;
                width: 215px;
                height: 215px;
                overflow: hidden;

                a {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                  color: #666;

                  img {
                    max-width: 100%;
                    max-height: 100%;
                    width: auto;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
