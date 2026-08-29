import type { Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  title: 'ZR-Qu · Homepage',
  author: 'ZR-Qu',
  description:
    'Personal homepage and blog of ZR-Qu, an Information Security undergraduate at HUST interested in systems security, trusted computing, and AI systems.',
  favicon: '/favicon/logo.jpg',
  socialCard: '/images/social-card.svg',
  locale: {
    lang: 'en',
    attrs: 'en',
    dateLocale: 'en-US',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  logo: {
    src: '/src/assets/logo.jpg',
    alt: 'ZR-Qu'
  },
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',
  head: [],
  customCss: [],
  header: {
    menu: [
      { title: 'Projects', link: '/projects' },
      { title: 'Blog', link: '/blog' },
      { title: 'About me', link: '/about' }
    ]
  },
  footer: {
    year: `© ${new Date().getFullYear()}`,
    links: [],
    credits: false,
    social: { github: 'https://github.com/ZR-Qu' }
  },
  content: {
    externalLinks: {
      content: ' ↗',
      properties: {
        style: 'user-select:none'
      }
    },
    blogPageSize: 8,
    share: []
  }
}

export const integ: IntegrationUserConfig = {
  links: {
    logbook: [],
    applyTip: [],
    cacheAvatar: false
  },
  pagefind: true,
  quote: {
    server: '',
    target: "() => ''"
  },
  typography: {
    class: 'prose text-base',
    blockquoteStyle: 'italic',
    inlineCodeBlockStyle: 'modern'
  },
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  waline: {
    enable: false
  }
}

const config = { ...theme, integ } as Config
export default config
