'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Instagram, ArrowUp } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/rishijain544', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rishi-jain-837b75312/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your-email@example.com', label: 'Email' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative border-t border-primary/20 bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Rishi Jain
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              AI/ML enthusiast building innovative solutions with code and creativity.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Projects', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/60 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {['Resume', 'GitHub', 'LinkedIn'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-foreground/60 text-sm mb-3">Subscribe for latest articles and updates</p>
            <motion.form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-background/40 border border-primary/20 rounded-lg text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-8" />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <motion.p variants={itemVariants} className="text-foreground/60 text-sm text-center md:text-left">
            © 2024 Rishi Jain. All rights reserved. Built with Next.js & AI.
          </motion.p>

          {/* Social Links */}
          <motion.div variants={containerVariants} className="flex gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover={{ 
                    scale: 1.3,
                    rotateZ: 10,
                    boxShadow: '0 0 20px rgba(88, 175, 255, 0.4)',
                  }}
                  whileTap={{ scale: 0.85 }}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-foreground/60 hover:text-accent"
                  title={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(88, 175, 255, 0.3)' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-2 hover:bg-primary/10 rounded-lg transition-all text-foreground/60 hover:text-accent"
            title="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
