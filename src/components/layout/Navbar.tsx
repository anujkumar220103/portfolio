import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/navigation'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-transparent'
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-container mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="text-lg font-semibold text-text">
          Anuj Kumar<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted transition-colors duration-150 hover:text-text"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1_AKXO2FqpV8TizfoaDoQ-XzttOD9R4wB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-white transition-colors duration-150 hover:bg-blue-700"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 pb-6 pt-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted py-2 transition-colors hover:text-text"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-white text-center transition-colors hover:bg-blue-700 mt-2"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
