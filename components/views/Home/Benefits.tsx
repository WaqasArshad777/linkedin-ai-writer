"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BarChart, Clock, MessageSquare, TrendingUp } from "lucide-react"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"

export function Benefits() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="benefits" className="bg-white py-20 dark:bg-gray-950">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <Title
              align="center"
              highlight="AI Writer"
            >
              Why This AI Isn't Just Another Writer
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              We've built a tool that doesn't just write content—it builds your personal brand and drives real business
              results.
            </Description>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  Consistency, without burnout
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Maintain a steady posting schedule without the daily grind of content creation. Our AI handles the
                  heavy lifting so you can focus on what matters.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <BarChart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Engagement that scales</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Watch your likes, comments, and shares grow exponentially as our AI learns what resonates with your
                  audience and optimizes your content.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  A LinkedIn presence that sells
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Transform your profile from a digital resume to a lead-generating machine. Our content strategies are
                  designed to convert connections into customers.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  From invisible to unforgettable
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Build authority in your niche one post at a time. Our AI helps you establish thought leadership and
                  become the go-to expert in your field.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 rounded-2xl bg-purple-50 p-8 text-center shadow-inner dark:bg-purple-900/20"
          >
            <h3 className="mb-4 text-2xl font-bold text-purple-800 dark:text-purple-300">
              The Results Speak for Themselves
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">247%</div>
                <p className="text-gray-600 dark:text-gray-400">Average increase in post engagement</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3.5x</div>
                <p className="text-gray-600 dark:text-gray-400">More profile views</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">68%</div>
                <p className="text-gray-600 dark:text-gray-400">Time saved on content creation</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

