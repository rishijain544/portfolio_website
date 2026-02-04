'use client'

import React from "react"

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'

export default function SentimentDemoSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [input, setInput] = useState('')
  const [result, setResult] = useState<{
    sentiment: 'positive' | 'negative' | 'neutral'
    confidence: number
  } | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzeSentiment = (text: string) => {
    if (!text.trim()) return

    setIsAnalyzing(true)
    
    // Simulate ML model analysis with timeout
    setTimeout(() => {
      // Simple mock sentiment analysis based on keywords
      const text_lower = text.toLowerCase()
      const positive_keywords = ['good', 'great', 'excellent', 'amazing', 'love', 'awesome', 'perfect', 'wonderful', 'fantastic', 'beautiful', 'happy', 'glad', 'best', 'wonderful']
      const negative_keywords = ['bad', 'terrible', 'awful', 'hate', 'worst', 'horrible', 'poor', 'sad', 'angry', 'frustrated', 'disappointing', 'ugly', 'worthless']
      
      const positive_count = positive_keywords.filter(keyword => text_lower.includes(keyword)).length
      const negative_count = negative_keywords.filter(keyword => text_lower.includes(keyword)).length
      
      let sentiment: 'positive' | 'negative' | 'neutral' = 'neutral'
      let confidence = 0.5
      
      if (positive_count > negative_count) {
        sentiment = 'positive'
        confidence = Math.min(0.95, 0.6 + (positive_count * 0.1))
      } else if (negative_count > positive_count) {
        sentiment = 'negative'
        confidence = Math.min(0.95, 0.6 + (negative_count * 0.1))
      } else if (text.includes('?')) {
        sentiment = 'neutral'
        confidence = 0.6
      }
      
      setResult({
        sentiment,
        confidence: Math.round(confidence * 100),
      })
      setIsAnalyzing(false)
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    analyzeSentiment(input)
  }

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

  const demoCardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateX: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.9, type: 'spring', stiffness: 100 },
    },
  }

  const sentimentColors = {
    positive: {
      bg: 'from-green-500/10 to-emerald-500/10',
      border: 'border-green-500/30',
      text: 'text-green-400',
      icon: '😊',
    },
    negative: {
      bg: 'from-red-500/10 to-rose-500/10',
      border: 'border-red-500/30',
      text: 'text-red-400',
      icon: '😞',
    },
    neutral: {
      bg: 'from-slate-500/10 to-gray-500/10',
      border: 'border-slate-500/30',
      text: 'text-slate-400',
      icon: '😐',
    },
  }

  return (
    <section id="demo" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-3xl w-full"
      >
        <motion.div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            AI Sentiment Analyzer
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground/70 text-lg"
          >
            Experience real-time sentiment analysis powered by machine learning
          </motion.p>
        </motion.div>

        <motion.div
          variants={demoCardVariants}
          className="relative"
        >
          {/* Glow Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl opacity-50"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Card */}
          <div className="relative bg-background/40 backdrop-blur-md border border-primary/30 rounded-2xl p-8 space-y-6">
            {/* Input Section */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type any text to analyze its sentiment..."
                  className="w-full bg-background/50 border border-primary/20 rounded-lg p-4 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 resize-none"
                  rows={4}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim() || isAnalyzing}
                  onClick={handleSubmit}
                  className="absolute bottom-4 right-4 p-2 bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground rounded-lg transition-all"
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </form>

            {/* Loading State */}
            <AnimatePresence>
              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-3 text-accent"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles size={20} />
                  </motion.div>
                  <span>Analyzing with ML model...</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Result Section */}
            <AnimatePresence>
              {result && !isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  className={`bg-gradient-to-br ${
                    sentimentColors[result.sentiment].bg
                  } border ${sentimentColors[result.sentiment].border} rounded-xl p-6 space-y-4`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        Result
                      </h3>
                      <p className={`text-3xl font-bold capitalize ${sentimentColors[result.sentiment].text}`}>
                        {result.sentiment === 'positive' && '😊 Positive'}
                        {result.sentiment === 'negative' && '😞 Negative'}
                        {result.sentiment === 'neutral' && '😐 Neutral'}
                      </p>
                    </div>
                    <span className="text-5xl">{sentimentColors[result.sentiment].icon}</span>
                  </div>

                  {/* Confidence Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/70">Confidence Score</span>
                      <span className="font-bold text-foreground">{result.confidence}%</span>
                    </div>
                    <div className="w-full bg-background/40 rounded-full h-3 overflow-hidden border border-primary/20">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${
                          result.sentiment === 'positive'
                            ? 'from-green-500 to-emerald-500'
                            : result.sentiment === 'negative'
                              ? 'from-red-500 to-rose-500'
                              : 'from-slate-500 to-gray-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${result.confidence}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setResult(null)
                      setInput('')
                    }}
                    className="w-full py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg font-medium transition-all"
                  >
                    Analyze Another Text
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Example Texts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView && !result ? { opacity: 1 } : { opacity: 0 }}
              className="pt-4 border-t border-primary/10"
            >
              <p className="text-foreground/60 text-sm mb-3">Try these examples:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  'This is absolutely amazing and wonderful!',
                  'I am feeling neutral about this.',
                  'This is terrible and disappointing.',
                ].map((example) => (
                  <motion.button
                    key={example}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setInput(example)
                      analyzeSentiment(example)
                    }}
                    disabled={isAnalyzing}
                    className="px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left line-clamp-2"
                  >
                    {example}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
