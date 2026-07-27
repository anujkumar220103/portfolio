export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Prisma', 'Flask'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Railway'],
  },
  {
    title: 'Cloud & ML',
    skills: ['AWS Elastic Beanstalk', 'LightGBM', 'Random Forest', 'Streamlit'],
  },
]
