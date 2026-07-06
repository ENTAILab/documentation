export default {
  title: "ENTAILab",
  description: "ENTAILab - Dokumentation",

  appearance: true,

  themeConfig: {
    siteTitle: "ENTAILab",
    logo: {
      light: "/spp_black.png",
      dark: "/spp.png"
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Site A", link: "/site-a/" },
      { text: "Site D", link: "/site-d/" }
    ],

    sidebar: {
      "/site-a/": [
        {
          text: "Site A",
          items: [
            { text: "Intro", link: "/site-a/intro" },
            { text: "Setup", link: "/site-a/setup" }
          ]
        }
      ],

      "/site-d/": [
        {
          text: "Site D",
          items: [
            { text: "Details", link: "/site-d/details" }
          ]
        }
      ]
    }
  }
}
