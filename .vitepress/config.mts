import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AWvpn",
  description: "AWvpn",
  head: [
    ['link', { rel: 'icon', href: '/images/hero3d.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/hero3d.png',

    nav: [
      { text: 'Главная', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar,

    docFooter: {
      prev: 'Назад',
      next: 'Далее'
    },

    outlineTitle: 'На этой странице',

    returnToTopLabel: "В начало страницы",

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/awvpn' }
    ]
  }
})
