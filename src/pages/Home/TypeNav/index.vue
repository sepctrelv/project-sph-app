<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
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
      <div class="sort">
        <div class="all-sort-list">
          <TypeNavItem
            v-for="item in items"
            :key="item.title"
            :item="item"
          ></TypeNavItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeNavItem from "@/pages/Home/TypeNav/TypeNavItem.vue";

export default {
  name: "TypeNav",
  components: { TypeNavItem },
  data() {
    return {
      items: [
        {
          title: "图书、音像、数字商品",
          subItems: [
            {
              category: "电子书",
              lists: ["婚恋/两性", "文学", "经管", "畅读VIP"],
            },
          ],
        },
        {
          title: "家用电器",
          subItems: [
            {
              category: "电子书1",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "数字音乐",
              lists: [
                "通俗流行",
                "古典音乐",
                "摇滚说唱",
                "爵士蓝调",
                "乡村民谣",
                "有声读物",
              ],
            },
            {
              category: "音像",
              lists: ["音乐", "影视", "教育音像", "游戏"],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
        {
          title: "手机、数码、充值",
          subItems: [
            {
              category: "电子书2",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "数字音乐",
              lists: [
                "通俗流行",
                "古典音乐",
                "摇滚说唱",
                "爵士蓝调",
                "乡村民谣",
                "有声读物",
              ],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
        {
          title: "电脑、办公",
          subItems: [
            {
              category: "电子书3",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
        {
          title: "家居、家具、家装、厨具",
          subItems: [
            {
              category: "电子书4",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
          ],
        },
        {
          title: "服饰内衣",
          subItems: [
            {
              category: "电子书5",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
        {
          title: "个护化妆",
          subItems: [
            {
              category: "电子书6",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "数字音乐",
              lists: [
                "通俗流行",
                "古典音乐",
                "摇滚说唱",
                "爵士蓝调",
                "乡村民谣",
                "有声读物",
              ],
            },
            {
              category: "音像",
              lists: ["音乐", "影视", "教育音像", "游戏"],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "青春",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
        {
          title: "运动健康",
          subItems: [
            {
              category: "数字音乐",
              lists: [
                "通俗流行",
                "古典音乐",
                "摇滚说唱",
                "爵士蓝调",
                "乡村民谣",
                "有声读物",
              ],
            },
            {
              category: "音像",
              lists: ["音乐", "影视", "教育音像", "游戏"],
            },
            {
              category: "电子书7",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
        {
          title: "汽车用品",
          subItems: [
            {
              category: "数字音乐",
              lists: [
                "通俗流行",
                "古典音乐",
                "摇滚说唱",
                "爵士蓝调",
                "乡村民谣",
                "有声读物",
              ],
            },
            {
              category: "音像",
              lists: ["音乐", "影视", "教育音像", "游戏"],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
            {
              category: "电子书8",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
        {
          title: "彩票、旅行",
          subItems: [
            {
              category: "电子书9",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },

            {
              category: "音像",
              lists: ["音乐", "影视", "教育音像", "游戏"],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
            {
              category: "数字音乐",
              lists: [
                "通俗流行",
                "古典音乐",
                "摇滚说唱",
                "爵士蓝调",
                "乡村民谣",
                "有声读物",
              ],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
        {
          title: "理财、众筹",
          subItems: [
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "电子书10",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "数字音乐",
              lists: [
                "通俗流行",
                "古典音乐",
                "摇滚说唱",
                "爵士蓝调",
                "乡村民谣",
                "有声读物",
              ],
            },
            {
              category: "音像",
              lists: ["音乐", "影视", "教育音像", "游戏"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
        {
          title: "母婴、玩具",
          subItems: [
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
            {
              category: "电子书11",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "数字音乐",
              lists: [
                "通俗流行",
                "古典音乐",
                "摇滚说唱",
                "爵士蓝调",
                "乡村民谣",
                "有声读物",
              ],
            },
            {
              category: "音像",
              lists: ["音乐", "影视", "教育音像", "游戏"],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
        {
          title: "箱包",
          subItems: [
            {
              category: "电子书12",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "励志",
              lists: ["经济", "金融与投资", "励志与成功"],
            },
            {
              category: "数字音乐",
              lists: [
                "通俗流行",
                "古典音乐",
                "摇滚说唱",
                "爵士蓝调",
                "乡村民谣",
                "有声读物",
              ],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
            {
              category: "音像",
              lists: ["音乐", "影视", "教育音像", "游戏"],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
          ],
        },
        {
          title: "运动户外",
          subItems: [
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "游戏",
              lists: ["励志与成功", "经济", "金融与投资", "管理"],
            },
            {
              category: "电子书13",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "数字音乐",
              lists: [
                "通俗流行",
                "古典音乐",
                "摇滚说唱",
                "爵士蓝调",
                "乡村民谣",
                "有声读物",
              ],
            },
            {
              category: "音像",
              lists: ["音乐", "影视", "教育音像", "游戏"],
            },
            {
              category: "人文社科",
              lists: [
                "历史",
                "心理学",
                "政治/军事",
                "国学/古籍",
                "哲学/宗教",
                "社会科学",
              ],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
        {
          title: "社会科学",
          subItems: [
            {
              category: "人文社科",
              lists: ["婚恋/两性", "历史", "心理学", "政治/军事", "国学/古籍"],
            },
            {
              category: "文艺",
              lists: ["小说", "文学", "青春文学", "传记", "艺术"],
            },
            {
              category: "游戏",
              lists: ["励志与成功", "经济", "金融与投资", "管理"],
            },
            {
              category: "电子书14",
              lists: [
                "免费",
                "小说",
                "励志与成功",
                "婚恋/两性",
                "文学",
                "经管",
                "畅读VIP",
              ],
            },
            {
              category: "数字音乐",
              lists: [
                "通俗流行",
                "古典音乐",
                "摇滚说唱",
                "爵士蓝调",
                "乡村民谣",
                "有声读物",
              ],
            },
            {
              category: "音像",
              lists: ["音乐", "影视", "教育音像", "游戏"],
            },
            {
              category: "经管励志",
              lists: ["经济", "金融与投资", "管理", "励志与成功"],
            },
          ],
        },
      ],
    };
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
      height: 461px;
      background: #fafafa;
      z-index: 999;
    }
  }
}
</style>
