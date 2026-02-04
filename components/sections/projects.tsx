'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'WhatsApp Chat Analyzer',
    description: 'AI-powered chat analytics dashboard that analyzes WhatsApp conversations, extracts insights, and visualizes communication patterns.',
    tech: ['Streamlit', 'Pandas', 'Matplotlib', 'WordCloud'],
    github: 'https://github.com/rishijain544/whatsapp_chat_analyazer',
    icon: '💬',
    color: 'from-primary',
  },
  {
    title: 'Model Hub Pro',
    description: 'All-in-one ML model builder web app providing an intuitive interface to build, train, and deploy machine learning models without code.',
    tech: ['Streamlit', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/rishijain544/ml_model',
    live: 'https://mlmodel-gyaydbmuxrvkxpzfqcdw4v.streamlit.app/',
    icon: '🤖',
    color: 'from-accent',
  },
  {
    title: 'AI Resume Parser & Ranking',
    description: 'NLP-powered system that analyzes resumes and ranks them based on cosine similarity matching with job descriptions.',
    tech: ['SpaCy', 'Pandas', 'Sklearn'],
    github: 'https://github.com/rishijain544/ai_resume_parser-ranking_system',
    icon: '📄',
    color: 'from-primary',
  },
  {
    title: 'Weather Detection ML System',
    description: 'ML-powered weather prediction application that combines machine learning models with real-time API data for accurate forecasting.',
    tech: ['Streamlit', 'Scikit-learn', 'API Integration'],
    github: 'https://github.com/rishijain544/weather-detection-ml-system-',
    live: 'https://ktgu7ygaek7mfkkrrk62ad.streamlit.app/',
    icon: '🌤️',
    color: 'from-accent',
  },
]

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const projectCardVariants = {
    hidden: { opacity: 0, rotateY: -10, y: 40 },
    visible: {
      opacity: 1,
      rotateY: 0,
      y: 0,
      transition: { duration: 0.9, type: 'spring', stiffness: 100 },
    },
  }

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-5xl w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={projectCardVariants}
              whileHover={{ 
                scale: 1.08,
                y: -15,
                rotateZ: 1,
                boxShadow: '0 30px 60px rgba(88, 175, 255, 0.25)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
              />

              {/* Card */}
              <div className="relative bg-background/40 backdrop-blur-md border border-primary/20 hover:border-accent/50 rounded-xl overflow-hidden transition-all duration-300">
                {/* Top Bar with Icon */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-primary/10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
                      >
                        <Github size={18} className="text-primary" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
                        >
                          <ExternalLink size={18} className="text-accent" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:border-primary/50 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Link */}
                <motion.div
                  className="px-6 pb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
                    >
                      <Code2 size={16} /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
                      >
                        <ExternalLink size={16} /> View
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
