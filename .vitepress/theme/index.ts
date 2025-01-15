// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BorderedLink from '../components/BorderedLink.vue'
import HalfGrid from '../components/HalfGrid.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
      app.component('BorderedLink', BorderedLink)
      app.component('HalfGrid', HalfGrid)
  }
} satisfies Theme
