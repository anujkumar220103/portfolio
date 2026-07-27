import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/data/personal'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6" aria-label="Footer">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Anuj Kumar Gond. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-150 hover:text-text"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-150 hover:text-text"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted transition-colors duration-150 hover:text-text"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
