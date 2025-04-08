"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"

export function Solution() {
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
    <section
      id="features"
      className="bg-gradient-to-b from-white to-purple-50 py-20 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <Title
              align="center"
              highlight="AI Voice  Seen"
            >
              An AI That Gets Your Voice and Gets You Seen
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              Stop struggling with what to post. Our AI learns your style and generates engaging content that sounds
              like you at your best.
            </Description>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative mx-auto mb-16 max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl shadow-purple-200/50 dark:bg-gray-900 dark:shadow-purple-900/20"
          >
            <Image 
              src="/images/live-demo.png" 
              alt="LinkedIn AI Writer Interface" 
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900 dark:shadow-gray-900/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M17.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M6 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  <path d="M17.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M6 15h4" />
                  <path d="M13.5 8h-7" />
                  <path d="M17.5 16v-3" />
                  <path d="M17.5 8v3" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Learns Your Voice</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Upload past content or start from scratch. Our AI adapts to your unique style and tone.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900 dark:shadow-gray-900/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Generates Engagement</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Data-backed templates and hooks designed to maximize likes, comments, and shares.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900 dark:shadow-gray-900/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Builds Authority</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Strategic content planning that positions you as a thought leader in your niche.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

