import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { fadeInUp } from '@/animations/variants'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-spacing bg-section-bg" aria-label="Projects">
      <div className="container-section">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-primary font-medium text-sm tracking-wide uppercase mb-3"
        >
          Projects
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-text mb-4"
        >
          Featured work
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-muted text-lg mb-14 max-w-2xl"
        >
          A selection of projects that demonstrate my approach to building software — from full-stack web apps to machine learning systems.
        </motion.p>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Thumbnail */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] rounded-xl bg-white border border-border flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ArrowUpRight size={20} className="text-primary" />
                    </div>
                    <p className="font-semibold text-text text-lg">{project.title}</p>
                    <p className="text-sm text-muted mt-1">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {project.featured && (
                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-primary border border-blue-100 mb-4">
                    Flagship Project
                  </span>
                )}

                <h3 className="text-2xl font-bold text-text mb-2">{project.title}</h3>
                <p className="text-muted leading-relaxed mb-5">{project.description}</p>

                {/* Role */}
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-wider text-muted font-medium mb-1">My Role</p>
                  <p className="text-sm text-text leading-relaxed">{project.role}</p>
                </div>

                {/* Features */}
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-wider text-muted font-medium mb-2">Key Features</p>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="text-sm text-muted flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-muted font-medium mb-2">Challenges Solved</p>
                  <ul className="space-y-1.5">
                    {project.challenges.slice(0, 2).map((c, i) => (
                      <li key={i} className="text-sm text-muted flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-text transition-colors duration-150 hover:bg-gray-50"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-sm font-medium text-white transition-colors duration-150 hover:bg-blue-700"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
