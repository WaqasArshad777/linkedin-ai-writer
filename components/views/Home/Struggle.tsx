"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowDown, CheckCircle, XCircle } from "lucide-react"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"

export function Struggle() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 dark:from-gray-950 dark:to-gray-900"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-100 opacity-30 blur-3xl dark:bg-purple-900 dark:opacity-10"></div>
        <div className="absolute right-1/4 top-3/4 h-64 w-64 rounded-full bg-purple-100 opacity-30 blur-3xl dark:bg-purple-900 dark:opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <Title
              align="center"
              spacing="normal"
              highlight="Honest. LinkedIn Nowhere"
            >
              Let's Be Honest. Most LinkedIn Posts Go Nowhere
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              The struggle is real. You're putting in the work, but not seeing the results.
            </Description>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl shadow-gray-200/50 transition-all hover:shadow-2xl hover:shadow-gray-200/70 dark:bg-gray-900 dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-red-900/20"></div>
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                  <XCircle className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Your Current Reality</h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-3">
                    <ArrowDown className="mt-1 h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
                    <span>Spending 30+ minutes crafting each post</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowDown className="mt-1 h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
                    <span>Getting minimal engagement (3-5 likes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowDown className="mt-1 h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
                    <span>Inconsistent posting schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowDown className="mt-1 h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
                    <span>No clear strategy or voice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowDown className="mt-1 h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
                    <span>Zero inbound opportunities</span>
                  </li>
                </ul>
                <div className="mt-6 rounded-xl bg-red-50 p-4 text-center text-sm font-medium text-red-800 dark:bg-red-900/20 dark:text-red-300">
                  <span className="font-semibold">Result:</span> Frustration and wasted time
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl shadow-gray-200/50 transition-all hover:shadow-2xl hover:shadow-gray-200/70 dark:bg-gray-900 dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-purple-900/20"></div>
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">What You See Others Doing</h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400" />
                    <span>Posting compelling content daily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400" />
                    <span>Getting 100s of likes and comments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400" />
                    <span>Building a personal brand effortlessly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400" />
                    <span>Attracting opportunities and DMs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400" />
                    <span>Growing their network exponentially</span>
                  </li>
                </ul>
                <div className="mt-6 rounded-xl bg-purple-50 p-4 text-center text-sm font-medium text-purple-800 dark:bg-purple-900/20 dark:text-purple-300">
                  <span className="font-semibold">The question:</span> Why not you?
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

