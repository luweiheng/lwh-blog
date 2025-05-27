import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/lwh-blog/',
  title: "LWH's Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '动态规划', link: '/dp' }
    ],
    sidebar: [
      {
        text: '算法',
        items: [
          {
            text: '动态规划', link: '/dp/', items: [
              {text:'斐波那契数列', link: '/dp/fib'},
              { text: '爬楼梯', link: '/dp/climbStairs' },
              { text: '最小花费爬楼梯', link: '/dp/minCostClimbingStairs' },
              { text: '不同路径', link: '/dp/uniquePaths' },
              { text: '不同路径 II', link: '/dp/uniquePathsWithObstacles' },
            ],
            collapsed: true
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
