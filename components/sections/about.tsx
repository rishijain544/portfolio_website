'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
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

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, type: 'spring', stiffness: 100 },
    },
  }

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={containerVariants}
            className="space-y-4 text-foreground/80 leading-relaxed"
          >
            <motion.p variants={textVariants} className="text-lg">
              I am a student passionate about Artificial Intelligence and Machine Learning. With a focus on building innovative solutions that leverage cutting-edge AI technologies.
            </motion.p>
            <motion.p variants={textVariants} className="text-lg">
              I am interested in building AI-powered web applications and training ML & deep learning models. My expertise spans across various domains including computer vision, natural language processing, and model optimization.
            </motion.p>
            <motion.p variants={textVariants} className="text-lg">
              Currently learning advanced deep learning techniques and working on real-time AI projects that push the boundaries of what's possible with modern ML frameworks.
            </motion.p>
            <motion.p variants={textVariants} className="text-lg">
              My goal is to become a Machine Learning Engineer and AI-based web app developer using prompt engineering and advanced AI techniques to create impactful solutions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative bg-background/40 backdrop-blur-md border border-primary/20 rounded-2xl p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-primary font-semibold text-sm uppercase tracking-wider">Quick Facts</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border/30">
                  <span className="text-foreground/70">Location</span>
                  <span className="text-accent font-medium">Jaipur, India</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border/30">
                  <span className="text-foreground/70">Focus</span>
                  <span className="text-accent font-medium">AI/ML Engineering</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border/30">
                  <span className="text-foreground/70">Primary Language</span>
                  <span className="text-accent font-medium">Python</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Experience</span>
                  <span className="text-accent font-medium">Multiple Projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
