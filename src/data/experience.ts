export interface Experience {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    title: 'Software Development Intern',
    company: 'OurSelfStudy',
    location: 'Bengaluru, Karnataka (Remote)',
    period: 'Feb 2026 – Mar 2026',
    responsibilities: [
      'Designed and implemented AI-assisted educational content generation workflows using NotebookLM',
      'Generated structured CBSE revision notes from NCERT chapter PDFs using prompt-based AI tools',
      'Processed, formatted, and organized AI-generated content into professional documents',
      'Contributed to scalable study material preparation serving thousands of CBSE students',
    ],
    technologies: ['AI/ML', 'NotebookLM', 'Prompt Engineering', 'Content Automation'],
  },
]
