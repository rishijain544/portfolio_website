'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const contactCardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 100 },
    },
  }

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rishijain30a@gmail.com',
      href: 'mailto:rishijain30a@gmail.com',
      color: 'from-primary',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/rishijain544',
      href: 'https://github.com/rishijain544',
      color: 'from-accent',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Rishi Jain',
      href: 'https://www.linkedin.com/in/rishi-jain-837b75312/',
      color: 'from-primary',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, India',
      href: '#',
      color: 'from-accent',
    },
  ]

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl w-full"
      >
        <motion.div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground/70 text-lg max-w-2xl mx-auto"
          >
            I'm always excited to collaborate on innovative AI/ML projects. Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {contactLinks.map((contact) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                variants={contactCardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(88, 175, 255, 0.2)',
                }}
                className="group relative"
              >
                {/* Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${contact.color} to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                />

                {/* Card */}
                <div className="relative bg-background/40 backdrop-blur-md border border-primary/20 hover:border-accent/40 rounded-xl p-6 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${contact.color} to-accent/20`}
                    >
                      <Icon className="text-primary" size={24} />
                    </motion.div>
                    <div>
                      <p className="text-foreground/70 text-sm uppercase tracking-wide">{contact.label}</p>
                      <p className="text-foreground font-semibold text-lg">{contact.value}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-50"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md border border-primary/30 rounded-2xl p-8 text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to collaborate?
            </h3>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Whether you have a project in mind or just want to chat about AI/ML, I'd love to hear from you. Let's build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:rishijain30a@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(88, 175, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Send size={18} /> Send Email
              </motion.a>
              <motion.a
                href="https://github.com/rishijain544"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 200, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Github size={18} /> View GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-primary/10 text-center"
        >
          <p className="text-foreground/50 text-sm">
            © 2024 Rishi Jain. Built with{' '}
            <motion.span
              animate={{ color: ['#58AFFF', '#00FFC8', '#58AFFF'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="font-semibold"
            >
              React & Next.js
            </motion.span>
            . Designed with passion for AI/ML.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
