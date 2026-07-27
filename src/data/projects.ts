export interface Project {
  title: string
  subtitle: string
  description: string
  role: string
  technologies: string[]
  features: string[]
  challenges: string[]
  github: string
  live?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'Job Application Tracker',
    subtitle: 'Full-stack platform with Chrome extension',
    description: 'A comprehensive job application management system that streamlines the job search process. Features secure authentication, full CRUD operations, and a Chrome Extension (MV3) that automatically extracts job details from LinkedIn, InternShala, and Unstop — saving them directly to the tracker.',
    role: 'Full Stack Developer — designed the system architecture, built the REST API layer, implemented JWT authentication, and developed the Chrome extension from scratch.',
    technologies: ['Next.js', 'Prisma', 'MySQL', 'Express.js', 'TailwindCSS', 'JWT', 'Chrome Extension MV3'],
    features: [
      'Chrome Extension auto-extracts job details from multiple platforms',
      'Secure JWT authentication with protected routes and session handling',
      'Scalable REST APIs with Express + Prisma ORM',
      'Token-based chrome.storage integration for seamless extension-to-app sync',
      'Fully responsive UI with TailwindCSS',
    ],
    challenges: [
      'Managed cross-origin communication between browser extension and web application',
      'Implemented secure token storage within the Chrome extension sandbox',
      'Built reliable DOM scraping across different job platform layouts',
    ],
    github: 'https://github.com/anujkumar220103',
    live: 'https://job-application-tracker-five-nu.vercel.app/',
    featured: true,
  },
  {
    title: 'Instagram Fake Profile Detection',
    subtitle: 'Machine learning web application',
    description: 'An ML-powered web application that analyzes Instagram profile features to predict whether an account is fake or genuine. Implements and compares multiple classification algorithms to achieve optimal detection accuracy.',
    role: 'ML Engineer & Backend Developer — built the entire ML pipeline, feature engineering, model training, and Flask-based web interface.',
    technologies: ['Python', 'Flask', 'LightGBM', 'Random Forest', 'Logistic Regression', 'Scikit-learn', 'Pickle'],
    features: [
      'Real-time fake profile prediction via web interface',
      'Comparative analysis of Logistic Regression, Random Forest, and LightGBM',
      'Profile-based feature engineering for high detection accuracy',
      'Model serialization for production-ready deployment',
    ],
    challenges: [
      'Engineered meaningful features from limited publicly available profile data',
      'Balanced model accuracy across various fake account behavior patterns',
      'Optimized inference latency for real-time web predictions',
    ],
    github: 'https://github.com/anujkumar220103',
    featured: false,
  },
]
