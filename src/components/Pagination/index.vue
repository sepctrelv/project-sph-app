<template>
  <div class="pagination">
    <button
      :disabled="currentPage === 1"
      @click="changeCurrentPage(currentPage - 1)"
    >
      上一页
    </button>
    <button v-if="startEnd.start > 1" @click="changeCurrentPage(1)">1</button>
    <button disabled v-if="startEnd.start > 2">...</button>

    <template v-for="page in startEnd.end">
      <button
        :key="page"
        v-if="page >= startEnd.start"
        :class="{ active: currentPage === page }"
        @click="changeCurrentPage(page)"
      >
        {{ page }}
      </button>
    </template>

    <button disabled v-if="startEnd.end < totalPages - 1">...</button>
    <button
      v-if="startEnd.end < totalPages"
      @click="changeCurrentPage(totalPages)"
    >
      {{ totalPages }}
    </button>
    <button
      :disabled="currentPage === totalPages"
      @click="changeCurrentPage(currentPage + 1)"
    >
      下一页
    </button>

    <div class="pagination-total">共 {{ total }} 条</div>
  </div>
</template>

<script>
export default {
  name: "ThePagination",
  props: {
    // 当前页码
    pageNo: {
      type: Number,
      default: 1,
    },
    // 每页数量
    pageSize: {
      type: Number,
      default: 3,
    },
    // 总数量
    total: {
      type: Number,
      default: 30,
    },
    // 连续页码数
    continues: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      currentPage: this.pageNo,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 连续页码的开始页码和结束页码
    startEnd() {
      const { currentPage, continues, totalPages } = this;
      let start = 0,
        end = 0;

      if (continues > totalPages) {
        // 总页数没有连续页码多
        start = 1;
        end = totalPages;
      } else {
        start = currentPage - Math.floor(continues / 2);
        end = currentPage + Math.floor(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalPages) {
          end = totalPages;
          start = end - continues + 1;
        }
      }
      return { start, end };
    },
  },
  watch: {
    pageNo(value) {
      this.currentPage = value;
    },
  },
  methods: {
    changeCurrentPage(page) {
      this.currentPage = page;
      this.$emit("currentChange", page);
    },
  },
};
</script>

<style scoped lang="less">
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 6px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }

  &-total {
    display: inline-block;
    height: 28px;
    font-size: 14px;
    line-height: 28px;
    margin-left: 10px;
    padding: 0 4px;
    color: #606266;
  }
}
</style>
