import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations/variants'
import { education } from '@/data/education'
import { certificates } from '@/data/certificates'

export default function Education() {
  return (
    <section id="education" className="section-spacing bg-section-bg" aria-label="Education">
      <div className="container-section">
        <div className="max-w-3xl">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-primary font-medium text-sm tracking-wide uppercase mb-3"
          >
            Education
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text mb-12"
          >
            Academic background
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 mb-16"
          >
            {education.map((edu, index) => (
              <motion.article
                key={index}
                variants={staggerItem}
                className="relative pl-6 border-l-2 border-border"
              >
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-primary" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-text">{edu.degree}</h3>
                  <span className="text-sm font-medium text-primary">{edu.grade}</span>
                </div>

                <p className="text-sm text-text font-medium">{edu.institution}</p>
                <p className="text-sm text-muted">{edu.location} • {edu.period}</p>
              </motion.article>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Certifications
            </h3>
            <div className="space-y-3">
              {certificates.map((cert, index) => (
                <div key={index} className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-text">{cert.title}</p>
                  <p className="text-xs text-muted whitespace-nowrap">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
