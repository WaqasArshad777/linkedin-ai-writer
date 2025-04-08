"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"

export function Results() {
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
    <section className="bg-gradient-to-b from-white to-purple-50 py-20 dark:from-gray-950 dark:to-gray-900">
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
              highlight="Days, Months"
            >
              Growth in Days, Not Months
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              Our users are seeing remarkable results in record time.
            </Description>
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="mb-2 text-2xl font-bold text-purple-600 dark:text-purple-400">+682% views</div>
              <p className="text-gray-600 dark:text-gray-400">
                A freelance designer saw her post views increase by 682% in just 7 days using our AI-generated content.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Verified result</span>
              </div>
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="mb-2 text-2xl font-bold text-purple-600 dark:text-purple-400">+12 sales calls</div>
              <p className="text-gray-600 dark:text-gray-400">
                A SaaS founder booked 12 qualified sales calls in one month directly from LinkedIn messages.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Verified result</span>
              </div>
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="mb-2 text-2xl font-bold text-purple-600 dark:text-purple-400">5,300 followers</div>
              <p className="text-gray-600 dark:text-gray-400">
                A content creator grew from 250 to 5,300 followers in 90 days with consistent, AI-powered posting.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Verified result</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 rounded-2xl bg-purple-600 p-8 text-center text-white shadow-lg dark:bg-purple-900/80 dark:shadow-purple-900/30"
          >
            <div className="mb-4 text-2xl font-bold">"I used to dread writing. Now I look forward to posting."</div>
            <p className="mb-6 text-purple-100">
              The AI understands my voice so well that sometimes I forget I didn't write the posts myself. It's like
              having a personal ghostwriter who knows exactly how I think and speak.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-purple-500">
                <Image
                  src="/avatars/marcus-thompson.png"
                  alt="Marcus Thompson"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold">Marcus Thompson</div>
                <div className="text-sm text-purple-200">Tech Consultant</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

