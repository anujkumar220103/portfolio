import { useState, useRef, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { fadeInUp } from '@/animations/variants'
import { personalInfo } from '@/data/personal'
import { sendEmail } from '@/lib/emailjs'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')
    try {
      await sendEmail(formRef.current)
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="section-spacing" aria-label="Contact">
      <div className="container-section">
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Let's work together
            </h2>
            <p className="text-muted text-lg">
              Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
            </p>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5 mb-12"
            aria-label="Contact form"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-text mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-text mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors resize-none text-sm"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium transition-colors duration-150 hover:bg-blue-700 disabled:opacity-50"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="flex items-center justify-center gap-2 text-green-600 text-sm" role="alert">
                <CheckCircle size={16} />
                Message sent successfully!
              </p>
            )}

            {status === 'error' && (
              <p className="flex items-center justify-center gap-2 text-red-600 text-sm" role="alert">
                <AlertCircle size={16} />
                Something went wrong. Please email me directly.
              </p>
            )}
          </motion.form>

          {/* Social links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-text"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-text"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-text"
            >
              <Mail size={18} />
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
