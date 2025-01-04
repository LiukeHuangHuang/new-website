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
          { text: 'BRAVE NEW WORLD', link: '/works/brave_new_world.md' }, // 作品markdown
          { text: 'FOR TIME', link: '/works/for_time.md' },
          { text: 'TO NIETZSCHE', link: '/works/to_nietzsche.md' },
          { text: 'MIRROR', link: '/works/mirror.md' },
          { text: 'SPRING IS COMING', link: '/works/sprin_is_coming.md' },
          { text: 'STILL LAKE', link: '/works/still_lake.md' },

          ]
        },
        {
          text: 'PERFORMANCE ART',
          collapsed: false,
          items: [
            // 玫瑰花，不用做  { text: 'LET HIM ONLY SEE THE THORNS WHO HAS EYES TO SEE THE ROSE', link: '/performance_art/xx.md' },
            { text: 'STILL FLOWING', link: '/performance_art/still_flowing.md' }, //行为
            { text: 'A WAY TO CELEBRATE LIFE', link: '/performance_art/a_way_to_celebrate_life.md' },
            { text: 'LIGHT AT THE MEETING', link: '/performance_art/light_at_the_meeting.md' },
            { text: 'OTHERS', link: '/performance_art/others.md' },
            ]
          },
        {
        text: 'BOOKS',
        collapsed: false,
        items: [
          { text: 'MIRROR', link: '/books/mirror.md' }, // 镜子
          { text: 'TO NIETZSCHE', link: '/books/to_nietzsche.md' }, // 致尼采
          { text: 'STILL LAKE', link: '/books/still_lake.md' }, // 平湖
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

