import { motion } from 'framer-motion'
import { fadeInUp } from '@/animations/variants'
import { personalInfo } from '@/data/personal'

export default function About() {
  return (
    <section id="about" className="section-spacing" aria-label="About">
      <div className="container-section">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Image — Left */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="w-full max-w-xs mx-auto lg:mx-0 aspect-[3/4] rounded-xl overflow-hidden border border-border">
              <img
                src="/profile.jpg"
                alt="Anuj Kumar Gond"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content — Right */}
          <div className="lg:col-span-2">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-primary font-medium text-sm tracking-wide uppercase mb-3"
            >
              About
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-text mb-6"
            >
              A bit about me
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-muted text-lg leading-relaxed mb-8"
            >
              {personalInfo.about}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {([
                { label: 'Location', value: 'Bhopal, India' },
                { label: 'Education', value: 'MCA @ MANIT' },
                { label: 'Focus', value: 'Full Stack + AI' },
                { label: 'Status', value: 'Open to work' },
              ] as const).map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-text">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
