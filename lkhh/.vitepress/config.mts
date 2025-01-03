import { defineConfig } from 'vitepress';
import timeline from "vitepress-markdown-timeline";


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
      { icon: 'github', link: 'https://github.com/LiukeHuangHuang/new-website' },
      { icon: 'x', link: '...' },
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

