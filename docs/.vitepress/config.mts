import { defineConfig } from "vitepress";

export default defineConfig({
  title: "TabiTabi Documentation",
  description: "Oficjalna dokumentacja do projektów TabiTabi",
  markdown: {
    theme: "one-dark-pro",
  },
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "👋 Wprowadzenie",
        items: [{ text: "Wprowadzenie", link: "/" }],
      },
      {
        text: "📚 Standardy",
        items: [
          { text: "Schemat odpowiedzi", link: "/standards/response-schema" },
          { text: "Kody zwrotne i błędów", link: "/standards/status-codes" },
        ],
      },
      {
        text: "📦 Paczki",
        items: [
          { text: "JS SDK", link: "/packages/js-sdk" },
          {
            text: "Typy",
            link: "/packages/types",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/toriime" },
      { icon: "discord", link: "https://discord.gg/DbKuMPY2Mr" },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern: "https://github.com/toriime/docs/edit/main/docs/:path",
    },
  },

  locales: {
    root: {
      label: "Polski",
      lang: "pl",
    },
  },

  lastUpdated: true,
});
