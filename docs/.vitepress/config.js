export default {
  base: "/documentation/",

  title: "ENTAILab: Research Infrastructure and Innovation Lab",
  description: "ENTAILab - GitHub-Dokumentation",

  appearance: true,

  themeConfig: {
    siteTitle: "ENTAILab",

    logo: {
      light: "/spp_black.png",
      dark: "/spp.png"
    },

    nav: [
      { text: '<i class="fa-solid fa-house"></i> Home', link: "/" },
      { text: '<i class="fa-solid fa-flask"></i> Measure 1', link: "/measure-1/" },
      { text: '<i class="fa-solid fa-flask"></i> Measure 2', link: "/measure-2/" },
      { text: '<i class="fa-solid fa-flask"></i> Measure 3', link: "/measure-3/" },
      { text: '<i class="fa-solid fa-flask"></i> Measure 4', link: "/measure-4/" },
      {
        text: '<i class="fa-brands fa-github"></i> GitHub',
        link: 'https://github.com/ENTAILab'
      },
      { text: "About", link: "https://www.new-data-spaces.de/en-us/Start/About-the-Programme/ENTAILab" }
    ],

    // sidebar: {
    //   "/site-a/": [
    //     {
    //       text: "Site A",
    //       items: [
    //         { text: "Intro", link: "/site-a/intro" },
    //         { text: "Setup", link: "/site-a/setup" }
    //       ]
    //     }
    //   ],

    //   "/site-d/": [
    //     {
    //       text: "Site D",
    //       items: [
    //         { text: "Details", link: "/site-d/details" }
    //       ]
    //     }
    //   ]
    // }
  }
}
