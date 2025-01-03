// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'


import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";
import './font.css';


export default {
  extends: DefaultTheme,
  ...DefaultTheme,
  enhanceApp(ctx) {
      DefaultTheme.enhanceApp(ctx);
      // ...
    },
  
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
  },
}