// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "奖项&荣誉"
export const awardsIntro = "很荣幸得到认可"

export const awards: Array<ActivityItemType> = [
  {
    name: '第三十九届全国中学生物理竞赛省一等奖',
    description: '',
    date: '2022',
    location: '树德中学, 成都',
  },
  {
    name: '奋发立志奖学金三等奖',
    description: '',
    date: '2023',
    location: '树德中学, 成都',
  },
]

// Research & Projects
export const projectHeadLine = "我的研究方向与研究项目"
export const projectIntro = "日就月将，学有缉熙于光明"

export const projects: Array<ProjectItemType> = [
  {
    name: '中学生物理竞赛研究',
    description: '虽然只是一个省一，但是我在这上面还是耗费了不少精力',
    link: { href: 'scls-cs.com', label: 'GitHub Cards' },
    tags: ['Website', 'Next.js', 'TailwindCSS', 'DaisyUI', 'Portfolio']
  },
  {
    name: '前端三件套',
    description: '打好基础，方可足下生风',
    link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: 'Hackathon' },
    tags: ['Hackathon', 'Java']
  },
  {
    name: 'vue框架',
    description: '这个正在学',
    link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: 'Hackathon' },
    tags: ['Hackathon', 'Java']
  },
  {
    name: '马列主义研究',
    description: '作为程序员，人文学科也不能忽视',
    link: { href: 'https://onecompiler.com/challenges/42yf4n5yn/scls-hackathon', label: 'Hackathon' },
    tags: ['Hackathon']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "爱好&志愿服务"
export const activitiesIntro = "或许，我该打打瓦？"

export const activities: Array<ActivityItemType> = [
  {
    name: 'Python Workshop',
    description:
      'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
    date: '2024-02-24',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI Ethics Discussion',
    description:
      'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Session',
    description:
      'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
]
