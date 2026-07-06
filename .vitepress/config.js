export default {
  title: "ENTAILab",

  themeConfig: {
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
  }
}
