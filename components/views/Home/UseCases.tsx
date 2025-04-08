"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, GraduationCap, Lightbulb, Users } from "lucide-react"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"

export function UseCases() {
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
    <section className="bg-purple-50 py-20 dark:bg-gray-900">
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
            >
              Who's This For?
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              Our AI writer helps professionals across industries build their personal brand and grow their business.
            </Description>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 dark:bg-gray-800 dark:shadow-gray-900/50 dark:hover:shadow-purple-900/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Founders</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Build your personal brand alongside your company. Attract users, investors, and partners through thought
                leadership.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Establish thought leadership</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Share your founder journey</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Attract investors and partners</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 dark:bg-gray-800 dark:shadow-gray-900/50 dark:hover:shadow-purple-900/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Consultants</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Establish credibility in your niche and attract high-quality clients through consistent, valuable
                content.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Showcase your expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Generate inbound leads</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Build a referral network</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 dark:bg-gray-800 dark:shadow-gray-900/50 dark:hover:shadow-purple-900/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Job Seekers</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Stand out from other candidates and get noticed by recruiters with a strong professional presence.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Get noticed by recruiters</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Demonstrate your knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Bypass traditional applications</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 dark:bg-gray-800 dark:shadow-gray-900/50 dark:hover:shadow-purple-900/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Creators</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Build an authentic voice at scale and grow your audience while maintaining your unique perspective.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Grow your audience</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Maintain consistent output</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Attract brand partnerships</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

