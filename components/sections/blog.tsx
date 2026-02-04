'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Calendar, ArrowRight } from 'lucide-react'

const articles = [
  {
    title: 'Getting Started with Machine Learning',
    excerpt: 'Learn the fundamentals of ML, understand different algorithms, and build your first model from scratch.',
    date: 'Feb 2024',
    category: 'Tutorial',
    readTime: '8 min read',
    link: '#',
    featured: true,
  },
  {
    title: 'NLP in Production: Best Practices',
    excerpt: 'Deep dive into deploying NLP models at scale, handling edge cases, and optimizing performance.',
    date: 'Jan 2024',
    category: 'Advanced',
    readTime: '12 min read',
    link: '#',
  },
  {
    title: 'Building Real-Time Data Pipelines',
    excerpt: 'Explore how to build scalable data pipelines for real-time analytics and AI applications.',
    date: 'Dec 2023',
    category: 'Tutorial',
    readTime: '10 min read',
    link: '#',
  },
]

export default function BlogSection() {
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
    <section id="blog" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
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
          Latest Articles
        </motion.h2>

        <div className="space-y-6">
          {articles.map((article, idx) => (
            <motion.a
              key={article.title}
              href={article.link}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group block"
            >
              <div className="relative">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                />

                {/* Card */}
                <div className="relative bg-background/40 backdrop-blur-md border border-primary/20 group-hover:border-accent/50 rounded-xl p-6 md:p-8 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <BookOpen size={20} className="text-primary" />
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {article.category}
                      </motion.span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-foreground/60">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-foreground/70 mb-4 leading-relaxed">{article.excerpt}</p>

                  <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                    <span>Read Article</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
          >
            View All Articles <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
