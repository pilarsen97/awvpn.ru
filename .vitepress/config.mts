import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "AWvpn",
  description: "AWvpn",
  head: [
    ['link', { rel: 'icon', href: '/images/hero3d.png' }],
    ['meta', { property: 'og:title', content: 'AWvpn' }],
    ['meta', { property: 'og:description', content: 'Надежный доступ в интернет' }],
    ['meta', { property: 'og:image', content: '/images/cover.png' }],
    ['meta', { property: 'og:url', content: 'https://awvpn.ru' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/hero3d.png',

    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Купить', link: 'https://t.me/pilarsen' }
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
    ],

    search: {
      provider: 'local'
    },

    cleanUrls: true,
  }
})
