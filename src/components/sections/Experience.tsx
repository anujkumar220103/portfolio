import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations/variants'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-spacing" aria-label="Experience">
      <div className="container-section">
        <div className="max-w-3xl">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-primary font-medium text-sm tracking-wide uppercase mb-3"
          >
            Experience
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text mb-12"
          >
            Where I've worked
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.article
                key={index}
                variants={staggerItem}
                className="relative pl-6 border-l-2 border-border"
              >
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-primary" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-text">{exp.title}</h3>
                  <span className="text-sm text-muted">{exp.period}</span>
                </div>

                <p className="text-sm text-primary font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-muted mb-4">{exp.location}</p>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                      <span className="text-border mt-1.5 flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded bg-blue-50 text-primary border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
