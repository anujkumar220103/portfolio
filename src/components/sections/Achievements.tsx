import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations/variants'
import { achievements } from '@/data/achievements'

export default function Achievements() {
  return (
    <section id="achievements" className="section-spacing" aria-label="Achievements">
      <div className="container-section">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-primary font-medium text-sm tracking-wide uppercase mb-3"
        >
          Achievements
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-text mb-12"
        >
          By the numbers
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {achievements.map((item) => (
            <motion.div key={item.label} variants={staggerItem}>
              <p className="text-3xl md:text-4xl font-bold text-text mb-1">{item.metric}</p>
              <p className="text-sm text-muted leading-snug">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
