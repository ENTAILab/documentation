export default {
  title: "ENTAILab",

    appearance: true, // 🌙 Dark mode toggle
  
  themeConfig: {
    siteTitle: "ENTAILab",
    nav: [
      { text: "Home", link: "/" },
      { text: "Measure 1", link: "/measure-1/" },
      { text: "Measure 2", link: "/measure-2/" }
    ],

    sidebar: {
      "/measure-2/": [
        {
          text: "CIRCLET",
          items: [
            { text: "Details", link: "/measure-2/details" }
          ]
        }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
}
