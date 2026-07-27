import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { fadeInUp } from '@/animations/variants'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16"
      aria-label="Introduction"
    >
      <div className="container-section w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-primary font-medium text-sm tracking-wide uppercase mb-4"
            >
              Software Developer
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6"
            >
              Hi, I'm Anuj Kumar.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg text-muted leading-relaxed mb-4 max-w-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {personalInfo.roles.map((role) => (
                <span
                  key={role}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-primary border border-blue-100"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium transition-colors duration-150 hover:bg-blue-700"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-text transition-colors duration-150 hover:bg-gray-50"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
              className="flex items-center gap-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors duration-150 hover:text-text"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors duration-150 hover:text-text"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border border-border shadow-sm">
                <img
                  src="/profile.jpg"
                  alt="Anuj Kumar Gond — Software Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              {/* Subtle decorative element */}
              <div className="absolute -bottom-3 -right-3 w-80 h-80 rounded-2xl border border-blue-100 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
