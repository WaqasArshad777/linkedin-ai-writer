"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Description } from "@/components/widgets/Typography/Description"
import { Title } from "@/components/widgets/Typography/Title"
export function JourneyTimeline() {
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

  const steps = [
    {
      number: "1",
      title: "Set Your Profile Goals",
      description:
        "Tell us what you want to achieve. Personal branding? Hiring? Sales? We calibrate the AI to your specific objectives.",
    },
    {
      number: "2",
      title: "Answer 5 Quick Prompts",
      description:
        "Share details about your tone, niche, and target persona. This helps our AI understand your unique voice and audience.",
    },
    {
      number: "3",
      title: "Let AI Generate 3+ Posts Daily",
      description:
        "Our AI creates tailored, story-driven posts optimized for engagement. Each post is crafted to sound like you and resonate with your audience.",
    },
    {
      number: "4",
      title: "Post or Schedule",
      description:
        "Publish immediately with one click or use our scheduler to queue posts for optimal times. Connect directly to LinkedIn for seamless posting.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-24 dark:from-gray-900 dark:to-gray-950">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20"></div>
        <div className="absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-purple-400 opacity-70 dark:opacity-40"></div>
        <div className="absolute right-1/3 top-1/4 h-3 w-3 rounded-full bg-purple-400 opacity-70 dark:opacity-40"></div>
        <div className="absolute left-2/3 top-1/2 h-2 w-2 rounded-full bg-purple-400 opacity-70 dark:opacity-40"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-5xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-white px-6 py-2 shadow-md dark:bg-gray-800 dark:shadow-gray-900/30">
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-sm font-medium text-transparent">
                Simple Four-Step Process
              </span>
            </div>
            <Title
              align="center"
              highlight="How It Works"
            >
              The Journey: How It Works
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              From setup to success, here's how our platform transforms your LinkedIn presence.
            </Description>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800/90 dark:shadow-gray-900/30 dark:hover:shadow-purple-900/20"
              >
                <div className="relative border-b border-gray-100 bg-gradient-to-r from-purple-50 to-purple-100/50 p-6 dark:border-gray-700 dark:from-purple-900/20 dark:to-purple-800/10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-purple-300">
                      {step.title}
                    </h3>
                    <div className="relative">
                      {/* Animated ring on hover */}
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 blur transition-all duration-300 group-hover:opacity-100"></div>
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-purple-400 text-2xl font-bold text-white shadow-lg shadow-purple-200/50 transition-all duration-300 group-hover:shadow-purple-300/50 dark:shadow-purple-900/30">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-purple-600/20 to-transparent dark:from-purple-400/20"></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative element at the bottom */}
          <motion.div variants={itemVariants} className="mx-auto mt-12 flex max-w-xs items-center justify-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-700"></div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md dark:bg-gray-800 dark:shadow-gray-900/30">
              <div className="h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-700"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

