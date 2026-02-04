'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Eye } from 'lucide-react'

export default function ResumeSection() {
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

  return (
    <section className="py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="relative group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"
          />
          <div className="relative bg-background/50 backdrop-blur-md border border-primary/20 hover:border-accent/50 rounded-2xl p-8 md:p-12 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <FileText size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">My Resume</h3>
                <p className="text-foreground/60 text-sm">Download or view my complete professional profile</p>
              </div>
            </div>

            <p className="text-foreground/70 mb-8">
              Get a comprehensive overview of my skills, experience, and accomplishments in AI/ML development. Updated with my latest projects and certifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#" // Replace with your resume URL
                download
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(88, 175, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Download size={18} /> Download Resume
              </motion.a>
              <motion.a
                href="#" // Replace with your resume view URL
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 border border-accent text-accent rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Eye size={18} /> View Online
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
