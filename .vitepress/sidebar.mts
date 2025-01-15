export const sidebar = [
    {
      text: '🚀 AWvpn',
      link: '/docs/start.md',
    },
    {
      text: '? FAQ',
      items: [
        { text: '🧾 Тарифы', link: '/docs/tarify' },
        { text: '❓ Одновременно работающие устройства', link: '/docs/cheating.md' }
      ]
    },
    {
      text: '✈️ Установка',
      items: [
        { 
            text: '⭐ Начать установку', 
            link: '/docs/install',
            items:
            [
                { text: ' iOS', link: '/docs/install-ios', collapsed: true },
                { text: '🤖 Android', link: '/docs/install-android' },
                { text: '🪟 Windows', link: '/docs/install-windows' },
                { text: ' macOS', link: '/docs/install-macos' },
                { text: '🌐 Keenetic', link: '/docs/install-keenetic' },
            ] 
        },
      ]
    }
]