const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "欢迎访问钱辉的博客"; // 个人网站名字

const DESIGNED="钱辉";

const BASICS_LOGO = "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/kavaer/1.3o4ilcabcrq0.png" //引导页默认LOGO,此项添加需将下一项置为空,本地照片引用require
const LOGO_CENTER = "https://s1.ax1x.com/2022/06/06/X0xj7d.png"; //更换引导页LOGO

//  已有图标库@mdi/font&font-awesome,如若找不到所要的图标,推荐iconfont阿里巴巴矢量图标库
const LOGO_TOP_RIGHT = [    //右上角图标链接，留空不显示
  { class: "fa fa-github", title: "github", url: "https://github.com/qianhuiya" },
  { class: "iconfont icon-gitee-fill-round", title: "gitee", url: "https://gitee.com/qianhuiya" }
]

const BLOG_URL = "https://qianhuiya.gitee.io"; // 个人网站链接（请填写完整链接）

const BACKGROUND_IMG_URL = [    // 背景图片url
  "https://s1.ax1x.com/2022/03/17/qPtoa4.jpg",
  "https://z3.ax1x.com/2021/06/21/REOXX8.png",
  "https://z3.ax1x.com/2021/06/21/REOL1P.jpg",
  "https://z3.ax1x.com/2021/06/21/REOqpt.png",
  "https://z3.ax1x.com/2021/06/21/REOHfI.png",
  "https://z3.ax1x.com/2021/06/21/REO7tA.png",
  "https://z3.ax1x.com/2021/06/21/REOTkd.png",
  "https://z3.ax1x.com/2021/06/21/REOITH.jpg",
  "https://z3.ax1x.com/2021/06/21/REO50e.png",
  "https://z3.ax1x.com/2021/06/21/REO4mD.png",
  "https://z3.ax1x.com/2021/06/21/REOfOO.jpg",
  "https://z3.ax1x.com/2021/06/21/REOW6K.png",
  "https://z3.ax1x.com/2021/06/21/REOBmF.jpg"
];

const BACKGROUND_IMG_URL_PHONE = [
  "https://s1.ax1x.com/2022/05/17/O45y3F.jpg",
  "https://s1.ax1x.com/2022/06/06/X0zrHH.png",
  "https://s1.ax1x.com/2022/06/06/X0zfv8.png",
  "https://s1.ax1x.com/2022/06/06/X0z4KS.png",
  "https://s1.ax1x.com/2022/06/06/X0z5Dg.png",
  "https://s1.ax1x.com/2022/06/06/X0zH5n.png",
  "https://s1.ax1x.com/2022/06/06/X0zO2V.png",
  "https://s1.ax1x.com/2022/06/06/X0zvKU.png",
]

const SLOGAN = [  // Logo下方显示的标题
  "不忘初心,方得始终.",
  "幸亏时光不会倒流，否则万物一定会朝旧岁月里疾步奔跑.",
  "最最好的,和最最痛苦的,是一样的",
  "让留下的人，笑着活下去",
  "我也是二十岁的大人了~",
  "人生在世必遇患难,如同火星飞腾.",
  "有耳可听的,就应当听.",
  "一言，一思，一走，一生.",
  "纵观世界无非就两件事最火：断章取义和美名其曰."
];

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

const BASICS_ICONFONT = "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/avaer/4.49p04o5mdw20.png"//icon

const SORT_DATA = [ // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写
  { sortId: 1, title: "导航" },
  { sortId: 2, title: "常用" }
];

const AUTHOR = "钱辉";

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "百度翻译",
    subtitle: "百度翻译",
    url: "https://fanyi.baidu.com/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh#auto/zh/",
    icon: "https://z3.ax1x.com/2021/06/21/REjnr8.png",
  },
  {
    pageId: 2,
    sortId: 1,
    title: "花瓣网",
    subtitle: "图片素材网",
    url: "https://huaban.com/",
    icon: "https://z3.ax1x.com/2021/06/21/REjZxP.png",
  }, {
    pageId: 3,
    sortId: 1,
    title: "CSDN",
    subtitle: "开发者社区",
    url: "https://www.csdn.net/",
    icon: "https://z3.ax1x.com/2021/06/21/REjQaQ.png",
  }, {
    pageId: 4,
    sortId: 1,
    title: "Github",
    subtitle: "Github",
    url: "https://github.com/",
    icon: "https://z3.ax1x.com/2021/06/21/REjmKf.png",
  }, {
    pageId: 5,
    sortId: 1,
    title: "Gitee",
    subtitle: "Github",
    url: "https://gitee.com/",
    icon: "https://z3.ax1x.com/2021/06/21/REjuqS.png",
  }, {
    pageId: 6,
    sortId: 1,
    title: "Element-plus",
    subtitle: "Element-plus",
    url: "https://element-plus.gitee.io/#/zh-CN",
    icon: "https://z3.ax1x.com/2021/06/21/REj3Ps.png",
  }, {
    pageId: 7,
    sortId: 1,
    title: "hexo-theme-melody",
    subtitle: "hexo-theme-melody",
    url: "https://molunerfinn.com/hexo-theme-melody-doc/zh-Hans/quick-start.html",
    icon: "https://z3.ax1x.com/2021/06/21/REj8Gn.png",
  }, {
    pageId: 8,
    sortId: 1,
    title: "NeteaseCloudMusicApi",
    subtitle: "NeteaseCloudMusicApi",
    url: "https://neteasecloudmusicapi.vercel.app/",
    icon: "https://z3.ax1x.com/2021/06/21/RVSalR.png",
  }, {
    pageId: 9,
    sortId: 1,
    title: "Greasy Fork",
    subtitle: "Greasy Fork",
    url: "https://greasyfork.org/zh-CN/scripts",
    icon: "https://s1.ax1x.com/2022/06/06/X0vYqJ.png",
  }, {
    pageId: 10,
    sortId: 1,
    title: "Hitokoto",
    subtitle: "Hitokoto",
    url: "https://hitokoto.cn/",
    icon: "https://s1.ax1x.com/2022/06/06/X0xmQO.png",
  }, {
    pageId: 11,
    sortId: 1,
    title: "HelloGithub",
    subtitle: "HelloGithub",
    url: "https://www.hellogithub.com/",
    icon: "https://s1.ax1x.com/2022/06/06/XBp5kj.png",
  },
  {
    pageId: 12,
    sortId: 1,
    title: "Carbon",
    subtitle: "Carbon",
    url: "https://carbon.now.sh/",
    icon: "https://s1.ax1x.com/2022/06/06/XB9EHe.png",
  },
  {
    pageId: 1,
    sortId: 2,
    title: "Github",
    subtitle: `Github`,
    url: "https://github.com/qianhuiya",
    icon: "https://z3.ax1x.com/2021/06/21/REjuqS.png",
  },
  {
    pageId: 2,
    sortId: 2,
    title: "Gitee",
    subtitle: `Gitee`,
    url: "https://gitee.com/qianhuiya/",
    icon: "https://z3.ax1x.com/2021/06/21/REjuqS.png",
  }, {
    pageId: 3,
    sortId: 2,
    title: "一言",
    subtitle: `一言`,
    url: "https://coding-pages-bucket-3495601-8075853-6855-401178-1303851664.cos-website.ap-beijing.myqcloud.com",
    icon: "https://z3.ax1x.com/2021/06/21/REjG2q.png",
  },{
    pageId: 4,
    sortId: 2,
    title: "picx",
    subtitle: `picx图床`,
    url: "https://picx.xpoet.cn/",
    icon: "https://s1.ax1x.com/2022/06/06/X0x3FI.png",
  }, {
    pageId: 5,
    sortId: 2,
    title: "电影",
    subtitle: `vip电影&api`,
    url: "https://vip.bljiex.com/",
    icon: "https://vip.bljiex.com/favicon.ico",
  }, {
    pageId: 6,
    sortId: 2,
    title: "路过",
    subtitle: `路过图床`,
    url: "https://imgtu.com/",
    icon: "https://z3.ax1x.com/2021/06/21/REjJx0.png",
  },{
    pageId: 7,
    sortId: 2,
    title: "airportal",
    subtitle: `空投`,
    url: "https://airportal.cn/",
    icon: "https://s1.ax1x.com/2022/06/06/X0xsf0.png",
  },{
    pageId: 8,
    sortId: 2,
    title: "emoji",
    subtitle: `emoji`,
    url: "http://ericandrewlewis.github.io/emoji-mosaic/",
    icon: "https://s1.ax1x.com/2022/06/06/X0xofx.png",
  },
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写
//无icon图标则为默认图标-

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  DESIGNED,
  BASICS_LOGO,
  LOGO_CENTER,
  LOGO_TOP_RIGHT,
  SORT_DATA,
  PAGES_DATA,
  BASICS_ICONFONT,
  SLOGAN,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  BACKGROUND_IMG_URL_PHONE,
  RECORD_NUMBER,
  AUTHOR
};
