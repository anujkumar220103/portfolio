import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, fadeInUp } from '@/animations/variants'
import { skillCategories } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-spacing bg-section-bg" aria-label="Skills">
      <div className="container-section">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-primary font-medium text-sm tracking-wide uppercase mb-3"
        >
          Skills
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-text mb-12"
        >
          Technologies I work with
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={staggerItem}>
              <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-md bg-white border border-border text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
