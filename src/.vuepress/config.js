/**
 * Ref：https://vuepress.vuejs.org/config/#base
 */
const base = '/web-development-basics/'

/**
 * Ref：https://vvuepress.vuejs.org/config/#title
 */
const title = 'Desarrollo web'

/**
 * Ref：https://vuepress.vuejs.org/config/#description
 */
const description = 'Guía básica de desarrollo de sitios web'

/**
 * Extra tags to be injected to the page HTML `<head>`
 *
 * ref：https://vuepress.vuejs.org/config/#head
 */
const head = [
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
]

/**
 * Ref：https://vuepress.vuejs.org/config/#host
 */
const host = '0.0.0.0'

/**
 * Ref：https://vuepress.vuejs.org/config/#port
 */
const port = 3000

/**
 * Ref：https://vuepress.vuejs.org/config/#dest
 */
const dest = 'docs'

/**
 * Ref: https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links
 */
const nav = [
  { text: 'Guía', link: '/guide/' },
  { text: 'HTML', link: '/html/' },
  { text: 'CSS', link: '/css/' },
  { text: 'JavaScript', link: '/javascript/' }
]

/**
 * Ref: https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
 */
const sidebar = {
  '/guide/': [{
    title: 'Guía',
    collapsable: false,
    children: [
      '',
    ]
  }],
  '/html/': [{
    title: 'HTML',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      '',
      'structure'
    ]
  }],
  '/css/': [{
    title: 'CSS',
    collapsable: false,
    children: [
      '',
    ]
  }],
  '/javascript/': [{
    title: 'JavaScript',
    collapsable: false,
    children: [
      '',
    ]
  }],
}

/**
 * Theme configuration, here is the default theme configuration for VuePress.
 *
 * ref：https://vuepress.vuejs.org/theme/default-theme-config.html
 */
const themeConfig = {
  repo: 'unocongafas/web-development-basics',
  repoLabel: '¡Contribuye!',
  docsDir: 'docs',
  docsBranch: 'main',
  editLinks: true,
  editLinkText: '¡Ayudame a mejorar!',
  smoothScroll: true,
  nav,
  sidebar
}

/**
 * Apply plugins，ref：https://vuepress.vuejs.org/zh/plugin/
 */
const plugins = [
  '@vuepress/plugin-back-to-top',
  '@vuepress/plugin-medium-zoom',
]

module.exports = {
  base,
  title,
  description,
  head,
  host,
  port,
  dest,
  themeConfig,
  plugins
}
