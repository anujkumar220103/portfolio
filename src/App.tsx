import { lazy, Suspense, useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'

const About = lazy(() => import('@/components/sections/About'))
const Skills = lazy(() => import('@/components/sections/Skills'))
const Experience = lazy(() => import('@/components/sections/Experience'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Achievements = lazy(() => import('@/components/sections/Achievements'))
const Education = lazy(() => import('@/components/sections/Education'))
const Certificates = lazy(() => import('@/components/sections/Certificates'))
const Contact = lazy(() => import('@/components/sections/Contact'))

export default function App() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        e.preventDefault()
        const id = anchor.getAttribute('href')?.slice(1)
        if (id) {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Certificates />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
