"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BarChart3, BookOpen, Calendar, Target, Zap } from "lucide-react"

export function FeatureCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="bg-purple-50 py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Built for Serious LinkedIn Growth
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Our AI-powered features are designed to help you create content that stands out, engages your audience,
              and builds your personal brand.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Hook Generator</h3>
              <p className="text-gray-600">
                Scroll-stopping openings powered by viral data analysis to capture attention in the first 2 seconds.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Story Engine</h3>
              <p className="text-gray-600">
                Personalized storytelling based on your journey and experiences that resonates with your audience.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Optimization Engine</h3>
              <p className="text-gray-600">
                Data-backed edits to boost engagement with suggestions for improving your content's performance.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Smart Drafts</h3>
              <p className="text-gray-600">
                New ideas daily based on trending topics and your past performance to keep your content fresh.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Auto-Scheduler</h3>
              <p className="text-gray-600">
                Set it and forget it with our intelligent scheduling system that posts at optimal times for engagement.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-center text-white shadow-md"
            >
              <div>
                <p className="mb-2 text-lg font-medium">And much more...</p>
                <p className="text-purple-100">
                  Discover all the powerful features designed to make your LinkedIn presence unforgettable.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

