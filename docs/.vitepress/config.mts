import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TabiTabi Documentation",
  description: "Oficjalna dokumentacja do projektów TabiTabi",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Standardy',
        items: [
          { text: 'Schemat odpowiedzi', link: '/standards/response-schema' },
          { text: 'Kody zwrotne i błędów', link: '/standards/status-codes' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/toriime' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/toriime/docs/edit/main/docs/:path'
    }
  },

  locales: {
    root: {
      label: 'Polski',
      lang: 'pl'
    }
  },
  
  lastUpdated: true,
  
})
