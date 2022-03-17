import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '锦蝶SCRM',
  description: '锦蝶SCRM',
  head: [['link', { rel: 'icon', href: 'public/logo.png' }]],
  themeConfig: {
    logo: 'public/logo.png',
    algolia: {
      apiKey: '0HLKT3CRBK',
      indexName: 'jindie-docs'
    },
    nav: [
      // { text: '锦蝶SCRM', link: '/scrm/' },
      {
        text: '操作手册',
        ariaLabel: '锦蝶SCRM 菜单',
        items: [
          { text: '锦蝶SCRM通用版', link: '/manual/default/' },
          { text: '锦蝶SCRM金融版', link: '/manual/financial/' }
        ]
      },
      {
        text: '更新日志',
        link: '/update/',
        items: [
          { text: '锦蝶SCRM通用版', link: '/update/default/' },
          { text: '锦蝶SCRM金融版', link: '/update/financial/' }
        ]
      },
      {
        text: '常见问题',
        link: '/problem/',
        items: [
          { text: '锦蝶SCRM通用版', link: '/problem/default/' },
          { text: '锦蝶SCRM金融版', link: '/problem/financial/' }
        ]
      }
    ],
    sidebar: {
      '/manual/default/': [
        {
          text: '锦蝶SCRM通用版 - 操作手册',
          children: [
            { text: '第一章 企业微信后台管理', link: '/manual/default/' },
            { text: '第二章 锦蝶 SCRM 后台管理', link: '/manual/default/2' },
            { text: '第三章 首页', link: '/manual/default/3' },
            { text: '第四章 客户管理', link: '/manual/default/4' },
            { text: '第五章 拓客工具', link: '/manual/default/5' },
            { text: '第六章 销售工具', link: '/manual/default/6' },
            { text: '第七章 数据报表', link: '/manual/default/7' },
            { text: '第八章 系统管理', link: '/manual/default/8' }
          ]
        }
      ],
      '/manual/financial/': [
        {
          text: '锦蝶SCRM金融版 - 操作手册',
          children: [
            { text: '第一章 首页', link: '/manual/financial/' },
            { text: '第二章 SCRM', link: '/manual/financial/2' },
            { text: '第三章 销售', link: '/manual/financial/3' },
            { text: '第四章 工具', link: '/manual/financial/4' },
            { text: '第五章 财务', link: '/manual/financial/5' },
            { text: '第六章 人力', link: '/manual/financial/6' },
            { text: '第七章 报表', link: '/manual/financial/7' },
            { text: '第八章 设置', link: '/manual/financial/8' },
          ]
        }
      ],
      '/update/default/': [
        {
          text: '锦蝶SCRM通用版 - 更新日志',
          children: [
            { text: '2022-02-23', link: '/update/default/' },
          ]
        }
      ],
      '/update/financial/': [
        {
          text: '锦蝶SCRM金融版 - 更新日志',
          children: [
            { text: '2022-03-16', link: '/update/financial/' },
          ]
        }
      ],
      '/problem/default/': [
        {
          text: '锦蝶SCRM通用版 -常见问题',
          children: [
            { text: '客户公海', link: '/problem/default/' },
          ]
        }
      ],
      '/problem/financial/': [
        {
          text: '锦蝶SCRM金融版 -常见问题',
          children: [
            { text: '客户公海', link: '/problem/financial/' },
          ]
        }
      ]
    }
  }
})
