import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '{{ PROJECT_NAME }}',
  description: '{{ PROJECT_DESCRIPTION }}',
  base: '/{{ REPO_NAME }}/',
  lang: 'en-US',

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Datasets', link: '/api/datasets' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Download', link: '/download/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/guide/getting-started' },
            { text: 'Access Requirements', link: '/guide/access-requirements' },
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'Data Formats', link: '/guide/data-formats' }
          ]
        },
        {
          text: 'Data Usage',
          collapsed: false,
          items: [
            { text: 'Download Methods', link: '/guide/download-methods' },
            { text: 'Data Processing', link: '/guide/data-processing' },
            { text: 'Quality Control', link: '/guide/quality-control' },
            { text: 'Best Practices', link: '/guide/best-practices' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'Data Reference',
          collapsed: false,
          items: [
            { text: 'Datasets', link: '/api/datasets' },
            { text: 'File Formats', link: '/api/file-formats' },
            { text: 'Metadata Schema', link: '/api/metadata-schema' },
            { text: 'API Reference', link: '/api/api-reference' }
          ]
        }
      ],
      '/download/': [
        {
          text: 'Data Download',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/download/' },
            { text: 'Bulk Downloads', link: '/download/bulk' },
            { text: 'Programmatic Access', link: '/download/programmatic' },
            { text: 'Cloud Access', link: '/download/cloud' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AfriGen-D/{{ REPO_NAME }}' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 AfriGen-D Project'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    lineNumbers: true,
    math: true
  }
})