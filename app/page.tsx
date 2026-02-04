'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Brain, Code2, Zap, BookOpen } from 'lucide-react'
import { useState, useEffect } from 'react'
import MobileNav from '@/components/mobile-nav'
import Footer from '@/components/footer'
import HeroSection from '@/components/sections/hero'
import AboutSection from '@/components/sections/about'
import SkillsSection from '@/components/sections/skills'
import ProjectsSection from '@/components/sections/projects'
import SentimentDemoSection from '@/components/sections/sentiment-demo'
import ContactSection from '@/components/sections/contact'
import ExperienceSection from '@/components/sections/experience'
import ResumeSection from '@/components/sections/resume'
import TestimonialsSection from '@/components/sections/testimonials'
import BlogSection from '@/components/sections/blog'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    // set initial size
    handleResize()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: 'spring', damping: 30, mass: 0.1 }}
        />
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: (mousePosition.x - windowSize.width) * 0.1,
            y: (mousePosition.y - windowSize.height) * 0.1,
          }}
          transition={{ type: 'spring', damping: 30, mass: 0.2 }}
        />
        
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(88, 175, 255, .05) 25%, rgba(88, 175, 255, .05) 26%, transparent 27%, transparent 74%, rgba(88, 175, 255, .05) 75%, rgba(88, 175, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(88, 175, 255, .05) 25%, rgba(88, 175, 255, .05) 26%, transparent 27%, transparent 74%, rgba(88, 175, 255, .05) 75%, rgba(88, 175, 255, .05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-border/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            RJ
          </motion.div>
          <MobileNav />
          <div className="hidden md:flex gap-6 text-sm">
            {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <SentimentDemoSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  )
}
