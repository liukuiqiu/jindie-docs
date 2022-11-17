import { defineConfig } from 'vitepress'

import { readdirSync, statSync } from 'fs'

function generateSidebar(dir) {
  // console.log('readdirSync: ', readdirSync)
  const readDir = readdirSync('./src' + dir)
    .map((v) => v.replace('.md', '')).reverse()
    // .sort((a, b) => {
    //   const a = 
    //   return new Date(b).getTime() - new Date(a).getTime()
    // })
  const sibebar = readDir.map((filename) => {
    return {
      text: filename,
      link: dir + filename
    }
  }).filter(v=> v.text !== 'index')
  // console.log('sibebar: ', sibebar)
  console.log(`${dir}:`, readDir)
  return sibebar
}


export default defineConfig({
  lang: 'zh-CN',
  title: '锦辰文档',
  description: '锦辰文档',
  srcDir: 'src',
  head: [['link', { rel: 'icon', href: 'logo.png' }]],
  themeConfig: {
    logo: 'logo.png',
    algolia: {
      apiKey: '0f3436179fd1dbd59180d181aa8b2bf7',
      indexName: 'jindie-docs',
      placeholder: '搜索文档'
    },
    outlineTitle: '在此页面上',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      // {
      //   text: 'Admin',
      //   target: '_blank',
      //   link: '/admin/#/'
      // },
      // { text: '锦蝶SCRM', link: '/scrm/' },
      {
        text: '操作手册',
        // ariaLabel: '锦蝶SCRM 菜单',
        items: [
          { text: '锦蚁云商', link: '/manual/default/' },
          { text: '锦蝶助贷系统', link: '/manual/financial/' },
          { text: '锦蝶助贷APP', link: '/manual/app/' }
        ]
      },
      {
        text: '更新日志',
        // link: generateSidebar('/update/default/')[0]['link']
        items: [
          {
            text: '锦蚁云商',
            // link: firstUpdatePostPath('/update/default/'),
            link: generateSidebar('/update/default/')[0]['link']
          },
          {
            text: '锦蝶助贷系统',
            // link: firstUpdatePostPath('/update/financial/')
            link: generateSidebar('/update/financial/')[0]['link']
          }
        ]
      },
      // {
      //   text: '常见问题',
      //   link: '/problem/'
      // }
    ],
    sidebar: {
      '/manual/default/': [
        {
          text: '锦蚁云商 - 操作手册',
          items: [
            { text: '第一章 企业微信后台管理', link: '/manual/default/' },
            { text: '第二章 锦蚁云商后台管理', link: '/manual/default/2' },
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
          text: '锦蝶助贷系统 - 操作手册',
          items: [
            { text: '第一章 首页', link: '/manual/financial/' },
            { text: '第二章 SCRM', link: '/manual/financial/2' },
            { text: '第三章 销售', link: '/manual/financial/3' },
            { text: '第四章 工具', link: '/manual/financial/4' },
            { text: '第五章 财务', link: '/manual/financial/5' },
            { text: '第六章 人力', link: '/manual/financial/6' },
            { text: '第七章 报表', link: '/manual/financial/7' },
            { text: '第八章 设置', link: '/manual/financial/8' }
          ]
        }
      ],
      '/manual/app/': [
        {
          text: '锦蝶APP - 操作手册',
          items: [
            { text: '新手须知', link: '/manual/app/' },
            { text: '功能介绍', link: '/manual/app/2' },
          ]
        }
      ],
      // ...generateSidebar('锦蝶SCRM通用版 - 更新日志', '/update/default/'),
      // ...generateSidebar('锦蝶SCRM金融版 - 更新日志', '/update/financial/'),
      '/update/default/': [
        {
          text: '更新日志',
          items: [
            // {
            //   text: '最近更新',
            //   link: '/update/default/'
            // },
            ...generateSidebar('/update/default/'),
            // {
            //   text: '2022-03-18',
            //   link: '/update/default/2022-03-16'
            // }
          ]
        }
      ],
      '/update/financial/': [
        {
          text: '更新日志',
          items: [
            // {
            //   text: '最近更新',
            //   link: '/update/financial/'
            // },
            ...generateSidebar('/update/financial/'),
            // {
            //   text: '2022-03-22',
            //   link: '/update/financial/2022-03-22'
            // },
            // {
            //   text: '2022-03-16',
            //   link: '/update/financial/2022-03-16'
            // }
          ]
        }
      ],
      // '/problem/': [
      //   {
      //     text: '常见问题',
      //     items: [
      //       { text: '锦蝶SCRM通用版', link: '/problem/' },
      //       { text: '锦蝶SCRM金融版', link: '/problem/financial' }
      //     ]
      //   }
      // ]
    },
    footer: {
      copyright: 'Copyright © 2022-present docs.jinchen.cc'
    }
  }
})
