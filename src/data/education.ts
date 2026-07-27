export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  grade: string
}

export const education: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Maulana Azad National Institute of Technology (MANIT)',
    location: 'Bhopal, Madhya Pradesh',
    period: '2024 – 2027',
    grade: '7.8 CGPA',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Rajarshi School of Management and Technology',
    location: 'Varanasi, Uttar Pradesh',
    period: '2021 – 2024',
    grade: '7.0 CGPA',
  },
]
