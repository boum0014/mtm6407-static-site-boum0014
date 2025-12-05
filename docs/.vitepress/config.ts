import { defineConfig } from 'vitepress'
import './styles/custom.css'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base: '/mtm6407-static-site-boum0014/',
  title: 'My Portfolio',
  description: 'A personal interest site built with VitePress',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Gallery', link: '/gallery' },
      { text: 'Contact', link: '/contact' }
    ]
  }
})
