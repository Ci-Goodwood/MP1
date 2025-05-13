export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '嘉州镜'
export const headline = '一个前端工作者'
export const introduction =
  "我是一个有志于前端方向的无产阶级工作者，希望可以在接下来的日子之中不断提升自己的素养"
export const email = '3111895209@qq.com'
export const githubUsername = 'Ci-Goodwood'

// about page
export const aboutMeHeadline = '你是谁?你有何价值?'
export const aboutParagraphs = [
  "我是一个有志于前端方向的无产阶级工作者，希望可以在接下来的日子之中不断提升自己的素养",
  '现在我正在电子科技大学的一路工作室之中的前端方向，目前还在学习各种前端技术',
  "创作这个网站的初衷是为了能够让各位看到我的成长，希望各位不吝赐教。我有所成果之后大家也可以从我这里吸收营养",
]

// blog
export const blogHeadLine = "我的所思所想"
export const blogIntro =
  "勤学精进，做合格前端工作者"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
