import DefaultTheme from "vitepress/theme"
import "./custom.css"

export default DefaultTheme {
  extends: DefaultTheme,
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
      }
    ]
  ]
}
