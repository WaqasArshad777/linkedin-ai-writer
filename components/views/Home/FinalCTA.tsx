"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export function FinalCTA() {
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
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-purple-600 p-8 text-center text-white shadow-xl md:p-12 dark:bg-purple-900 dark:shadow-purple-900/30"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              The Only Tool You Need to Own LinkedIn.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-purple-100">
              Start posting smarter, building your audience, and generating real opportunities from your LinkedIn
              presence.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="rounded-2xl bg-white px-8 text-base text-purple-600 hover:bg-purple-50 dark:hover:bg-white/90 dark:hover:text-purple-700"
              >
                Start Posting Smarter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border-purple-400 px-8 text-base text-purple-600 dark:text-white dark:border-purple-400/50"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Try a Free Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-purple-200">No account needed. Generate your first post in 30 seconds.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

