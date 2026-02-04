'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

const roles = ['Building AI Solutions', 'ML Engineer in Progress', 'Full-Stack AI Developer']

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', type: 'spring', stiffness: 80 },
    },
  }

  const roleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl"
      >
        {/* Main Name */}
        <motion.h1
          variants={nameVariants}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
        >
          Rishi Jain
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          variants={roleVariants}
          className="text-xl md:text-2xl text-accent mb-8 h-12 flex items-center justify-center"
        >
          <span>{displayedText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1 text-primary"
          >
            |
          </motion.span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-foreground/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Take it by your own
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ 
              scale: 1.08,
              boxShadow: '0 0 40px rgba(88, 175, 255, 0.5)',
              y: -2,
            }}
            whileTap={{ scale: 0.92 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all cursor-pointer"
          >
            View Projects <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="https://github.com/rishijain544"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.08,
              borderColor: 'var(--accent)',
              boxShadow: '0 0 30px rgba(0, 255, 200, 0.3)',
              y: -2,
            }}
            whileTap={{ scale: 0.92 }}
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
          >
            <Github size={18} /> GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rishi-jain-837b75312/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.08,
              borderColor: 'var(--accent)',
              boxShadow: '0 0 30px rgba(0, 255, 200, 0.3)',
              y: -2,
            }}
            whileTap={{ scale: 0.92 }}
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
          >
            <Linkedin size={18} /> LinkedIn
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
