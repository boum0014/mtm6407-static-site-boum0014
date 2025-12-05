import { defineConfig } from 'vitepress'
import './styles/custom.css'

export default defineConfig({
  base: '/mtm6407-static-site-boum0014/',
  title: 'My Portfolio',
  description: 'A personal interest site built with VitePress',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/mtm6407-static-site-boum0014/' },
      { text: 'About', link: '/mtm6407-static-site-boum0014/about' },
      { text: 'Projects', link: '/mtm6407-static-site-boum0014/projects' },
      { text: 'Gallery', link: '/mtm6407-static-site-boum0014/gallery' },
      { text: 'Contact', link: '/mtm6407-static-site-boum0014/contact' }
    ]
  }
})
