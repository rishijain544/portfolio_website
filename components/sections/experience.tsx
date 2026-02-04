'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'AI/ML Developer',
    company: 'Self-Employed',
    period: '2023 - Present',
    location: 'Remote',
    description: 'Developing AI-powered applications and ML models for real-world problems. Building production-ready systems for sentiment analysis, resume parsing, and predictive modeling.',
    skills: ['Python', 'TensorFlow', 'Streamlit', 'Pandas'],
    type: 'work',
  },
  {
    title: 'Machine Learning Enthusiast',
    company: 'Self-Learning',
    period: '2022 - 2023',
    location: 'India',
    description: 'Completed multiple courses in ML, Deep Learning, and Data Science. Built portfolio projects demonstrating expertise in NLP, Computer Vision, and Predictive Analytics.',
    skills: ['Scikit-learn', 'PyTorch', 'Data Analysis', 'NLP'],
    type: 'education',
  },
]

export default function ExperienceSection() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center"
        >
          Experience & Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="relative md:ml-24"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute -left-16 top-6 w-7 h-7 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>

                {/* Card */}
                <div className="group relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  />
                  <div className="relative bg-background/40 backdrop-blur-md border border-primary/20 hover:border-accent/50 rounded-xl p-6 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase size={20} className="text-primary" />
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        </div>
                        <p className="text-accent font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground/70 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary/60" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-accent/60" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 leading-relaxed mb-4">{exp.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30 hover:border-accent/60 transition-all"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
