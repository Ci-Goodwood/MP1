
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: '电子科技大学',
      major: 'MBA',
      logo: 'college',
      start: '2017',
      end: '2020'
    },
    {
      school: '成都市树德中学',
      major: 'Computer Science',
      logo: 'college',
      start: '2013',
      end: '2015'
    },
    {
      school: '乐山市实验中学',
      major: 'Automation',
      logo: 'college',
      start: '2009',
      end: '2013'
    },
  ]