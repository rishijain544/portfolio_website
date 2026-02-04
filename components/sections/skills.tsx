'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Brain, Code2, Database, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript'],
    icon: Code2,
    color: 'from-primary',
    proficiency: 95,
  },
  {
    title: 'Libraries & Frameworks',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
    icon: Brain,
    color: 'from-accent',
    proficiency: 92,
  },
  {
    title: 'Web Technologies',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
    icon: Zap,
    color: 'from-primary',
    proficiency: 90,
  },
  {
    title: 'AI/ML Tools',
    skills: ['Jupyter Notebook', 'Google Colab', 'PyCharm', 'VS Code'],
    icon: Sparkles,
    color: 'from-accent',
    proficiency: 93,
  },
  {
    title: 'Database',
    skills: ['MySQL', 'MongoDB', 'Supabase'],
    icon: Database,
    color: 'from-primary',
    proficiency: 88,
  },
  {
    title: 'Core Domains',
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP'],
    icon: Brain,
    color: 'from-accent',
    proficiency: 91,
  },
]

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, rotateX: -20, y: 30 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 100 },
    },
  }

  const skillBadgeVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 120 },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, rotate: -180 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 80 },
    },
  }

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
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
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.08,
                  rotateZ: 1,
                  boxShadow: '0 30px 60px rgba(88, 175, 255, 0.3)',
                }}
                transition={{ type: 'spring', stiffness: 250 }}
                className="group relative h-full overflow-hidden"
              >
                {/* Animated Glow Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    idx % 2 === 0 ? 'from-primary/15 to-accent/15' : 'from-accent/15 to-primary/15'
                  } rounded-2xl blur-2xl`}
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0.5 }}
                />

                {/* Animated Border Light */}
                <motion.div
                  className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-accent/0 group-hover:via-accent/50"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Card Content */}
                <div className="relative bg-background/60 backdrop-blur-xl border border-primary/20 group-hover:border-accent/40 rounded-2xl p-8 h-full flex flex-col transition-all duration-300">
                  
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      variants={iconVariants}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${
                        idx % 2 === 0 
                          ? 'from-primary/20 to-accent/20' 
                          : 'from-accent/20 to-primary/20'
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${idx % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                    </motion.div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                  </div>

                  {/* Proficiency Indicator */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-foreground/60 uppercase tracking-wider">Proficiency</span>
                      <span className={`text-sm font-bold ${idx % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                        {category.proficiency}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-background/60 rounded-full overflow-hidden border border-primary/10">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${
                          idx % 2 === 0 ? 'from-primary to-accent' : 'from-accent to-primary'
                        }`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${category.proficiency}%` } : { width: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.1 }}
                      />
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 flex-1">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        variants={skillBadgeVariants}
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ delay: idx * 0.1 + skillIdx * 0.08 }}
                        whileHover={{
                          scale: 1.15,
                          boxShadow: `0 0 20px ${idx % 2 === 0 ? 'rgba(88, 175, 255, 0.5)' : 'rgba(0, 255, 200, 0.5)'}`,
                          y: -2,
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                          idx % 2 === 0
                            ? 'border-primary/40 bg-primary/10 text-primary hover:bg-primary/20'
                            : 'border-accent/40 bg-accent/10 text-accent hover:bg-accent/20'
                        } transition-all cursor-pointer backdrop-blur-sm`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Advanced Expertise Showcase */}
        <motion.div
          variants={itemVariants}
          className="mt-20 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-10 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Expertise Metrics
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Machine Learning', value: 90, color: 'from-primary to-blue-500' },
              { label: 'Deep Learning', value: 85, color: 'from-accent to-cyan-500' },
              { label: 'Python Mastery', value: 95, color: 'from-primary to-purple-500' },
              { label: 'Web Development', value: 88, color: 'from-accent to-teal-500' },
            ].map((skill, idx) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.08, y: -5 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-xl blur-md opacity-20 group-hover:opacity-50 transition-opacity`}
                />

                {/* Card */}
                <div className="relative bg-background/50 backdrop-blur-md border border-primary/20 group-hover:border-accent/40 rounded-xl p-6 text-center transition-all">
                  <motion.div
                    className={`text-4xl font-bold mb-3 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: idx * 0.15 + 0.3, duration: 0.8 }}
                  >
                    {skill.value}%
                  </motion.div>

                  {/* Circular Progress */}
                  <svg className="w-full mb-4" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/20" />

                    {/* Progress Circle */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2.5"
                      strokeDasharray={`${(skill.value / 100) * 251.2} 251.2`}
                      strokeLinecap="round"
                      className="transform -rotate-90"
                      style={{ transformOrigin: '50px 50px' }}
                      initial={{ strokeDasharray: '0 251.2' }}
                      animate={inView ? { strokeDasharray: `${(skill.value / 100) * 251.2} 251.2` } : { strokeDasharray: '0 251.2' }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: idx * 0.12 }}
                    />

                    {/* Gradient Definition */}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" />
                        <stop offset="100%" stopColor="var(--accent)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p className="text-sm font-semibold text-foreground/80">{skill.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
