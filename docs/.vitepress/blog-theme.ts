// 主题独有配置
import { getThemeConfig } from "@sugarat/theme/node";

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,

  // markdown 图表支持（会增加一定的构建耗时）
  // mermaid: true

  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    copyright: `版权所有©2024 深圳华秋电子有限公司`,
    version: false,
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },

  // 主题色修改
  themeColor: "el-blue",

  // 文章默认作者
  author: "KiCad华秋",

  // 友链
  friend: [
    {
      nickname: "芯灵",
      des: "电子元件的百科全书",
      avatar: "/docs/huaqiu-H.svg",
      url: "https://www.eda.cn",
    },
    {
      nickname: "华秋",
      des: "全球领先的产业数字化智造平台",
      avatar: "/docs/huaqiu-H.svg",
      url: "https://www.huaqiu.com",
    },
  ],
});

export { blogTheme };
