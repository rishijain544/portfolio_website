'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Project Collaborator',
    role: 'AI Developer',
    content: 'Rishi is an exceptional developer with deep knowledge in ML and Python. His ability to turn complex problems into elegant solutions is remarkable.',
    rating: 5,
    image: '🎯',
  },
  {
    name: 'Code Reviewer',
    role: 'Senior Engineer',
    content: 'The code quality and attention to detail in his projects is impressive. He demonstrates strong problem-solving skills and passion for AI/ML.',
    rating: 5,
    image: '⭐',
  },
  {
    name: 'Project Lead',
    role: 'Tech Lead',
    content: 'Working with Rishi was a great experience. He consistently delivers high-quality work and is always eager to learn new technologies.',
    rating: 5,
    image: '🚀',
  },
]

export default function TestimonialsSection() {
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

  return (
    <section id="testimonials" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
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
          What People Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
              />

              {/* Card */}
              <div className="relative bg-background/40 backdrop-blur-md border border-primary/20 hover:border-accent/50 rounded-xl overflow-hidden transition-all duration-300 p-6 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star size={18} className="fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 mb-6 flex-grow">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-foreground/50 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
