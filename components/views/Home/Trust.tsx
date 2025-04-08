"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lock, Shield, UserCheck } from "lucide-react"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"
export function Trust() {
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
    <section className="bg-white py-20 dark:bg-gray-950">
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
              highlight="Data, Privacy, Priority"
            >
              Your Data, Your Privacy, Our Priority
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              We take your privacy and data security seriously. Here's our commitment to you.
            </Description>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900 dark:shadow-gray-900/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Your Data is Never Sold</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We never sell your data to third parties. Your content and information remain yours, period.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900 dark:shadow-gray-900/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Trained on Public Content</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI is trained on public content and your own posts if you choose to share them. We never access your
                private messages.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900 dark:shadow-gray-900/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">LinkedIn Safe</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We follow all LinkedIn policies. No automation, no scraping, no risk to your account. Just great
                content.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 rounded-2xl bg-purple-50 p-6 text-center shadow-inner dark:bg-purple-900/20"
          >
            <h3 className="mb-4 text-xl font-semibold text-purple-800 dark:text-purple-300">
              Our Security Certifications
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2">
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
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="font-medium dark:text-gray-300">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
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
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
                <span className="font-medium dark:text-gray-300">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
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
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                >
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                </svg>
                <span className="font-medium dark:text-gray-300">256-bit Encryption</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

