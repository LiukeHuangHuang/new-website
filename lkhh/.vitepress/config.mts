import { defineConfig } from 'vitepress';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true, // 关闭丢失链接构建阻止
  title: "LiuKe & HuangHuang",
  description: "LiuKe & HuangHuang",
  appearance: false, // 关闭深色
  // base: '/',
  markdown: {
    // 显示行号
    lineNumbers: true,

  },

  
  
  themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
    outline: false, // 关闭索引
    docFooter: {  // 关闭底部上一页/下一页
      prev: false,
      next: false
    },
    
    socialLinks: [
      {
        icon: {
          svg: '<svg data-name="1-Email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z"/></svg>'
        },
        link: '../np/email',
      },
      { icon: 'instagram', link: '...'},
      { icon: 'facebook', link: '...'},
    ],



    sidebar: [
      {
        text: 'WORKS',
        collapsed: false,
        items: [
          { text: '123', link: '/works/1.md' }, // 作品markdown
          { text: 'XX', link: '/works/2.md' },
          { text: 'XX', link: '/works/3.md' },
          { text: 'XX', link: '/works/xx.md' },
          { text: 'XX', link: '/works/xx.md' },
          { text: 'XX', link: '/works/xx.md' },
          { text: 'XX', link: '/works/xx.md' },
          { text: 'XX', link: '/works/xx.md' },
          { text: 'XX', link: '/works/xx.md' },

          ]
        },
        {
        text: 'BOOKS',
        collapsed: false,
        items: [
          { text: 'XX', link: '/books/xx.md' }, // 书
          ]
        },
        {
          text: 'INFORMATION',
          collapsed: false,
          items: [
            { text: 'NEWS', link: '/information/news.md' }, // 新闻
            { text: 'CV', link: '/information/cv.md' }, // CV
            ]
        }
      ]
    }
  }
)

