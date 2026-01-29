import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Evenader",
  description: "专业、冷静、严谨",
  themeConfig: {
    sidebar: [{ text: '👤 关于我', items: [{ text: '首页', link: '/' }] }],
    outline: { label: '本页目录', level: 'deep' }
  }
})