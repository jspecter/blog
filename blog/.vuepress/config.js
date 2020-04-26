module.exports = {
  title: 'Leslie Zhu',
  description: 'blog about my work and life',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: '全部',
        link: '/',
      },
      {
        text: '技术',
        link: '/tech',
      },
      {
        text: '生活',
        link: '/life',
      },
      {
        text: '其它',
        link: '/others',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: 'Github',
        link: 'https://github.com/jspecter',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/jspecter',
        }
      ],
      copyright: [
        {
          text: 'MIT Licensed | Copyright © 2020-present Leslie Zhu',
          link: ''
        },
      ],
    },

    plugins:{
        '@vssue/vuepress-plugin-vssue':{
            platform:'github-v4',
            owner:"jspecter",
            repo:"jspecter.github.io",
            clientId:"933f75f09e5a171518b1",
            clientSecret:"0daddd3dd73391658778aa4492aa879952821f3d"
        }
    }
  },
}
