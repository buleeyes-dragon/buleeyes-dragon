const lightCodeTheme = require('prism-react-renderer/themes/github');   // 浅色代码插件-主题github
const darkCodeTheme = require('prism-react-renderer/themes/dracula');   // 深色主题插件

/** @type {import('@docusaurus/types').Config} */   
const config = {
    // 配置常量
  title: '我的学习网站',     // 网站的标题
  tagline: 'Dinosaurs are cool',    //  横幅副标题
  url: 'https://renshen.netlify.app', // 当网站上线后的地址
  baseUrl: '/', // 默认路径
  onBrokenLinks: 'throw',   //  处理损坏的链接方式-抛出
  onBrokenMarkdownLinks: 'warn',    // 处理损坏的md链接-警告
  favicon: 'img/favicon.ico',   // logo地址

  // GitHub pages deployment config.    Github Pages部署配置
  // If you aren't using GitHub pages, you don't need these.    如果你不需要Github Pages，那么你不需要它
  organizationName: 'buleeyes-dragon', // Usually your GitHub org/user name.   Github用户名
  projectName: 'buleeyes-dragon.github.io', // Usually your repo name. 仓库名

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',   // 设置语言 zh-Hans是中文
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',    // 主题，默认
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // “编辑此页”地址
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // “编辑此页”地址
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '壬申的网站',   // 导航栏文字
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',  //导航栏LOGO
        },
        items: [
            //导航栏选项
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '我的笔记',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        //页脚选项
        style: 'light',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '我的笔记',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        //底部版权声明，支持 html语法
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
