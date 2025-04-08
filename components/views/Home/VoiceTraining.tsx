"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"

export function VoiceTraining() {
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
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100 py-24 dark:from-gray-900 dark:via-gray-950 dark:to-purple-900/20">
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
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-2 dark:from-purple-900/20 dark:to-purple-800/20">
              <span className="bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-sm font-medium text-transparent dark:from-purple-400 dark:to-purple-200">
                Personalized AI Technology
              </span>
            </div>
            <Title
              align="center"
              highlight="AI Unique Voice"
            >
              We Train the AI on Your Unique Voice
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              Our "Write Like Me" mode ensures that every post sounds authentically like you—just on your best day.
            </Description>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">How Voice Training Works</h3>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 shadow-md dark:bg-purple-900/50 dark:text-purple-400 dark:shadow-purple-900/30">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Upload your content</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Share a few of your past posts or writing samples (optional but recommended).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 shadow-md dark:bg-purple-900/50 dark:text-purple-400 dark:shadow-purple-900/30">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Define your style</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Tell us about your tone, personality, and communication preferences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 shadow-md dark:bg-purple-900/50 dark:text-purple-400 dark:shadow-purple-900/30">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Set your goals</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Specify what you want to achieve with your LinkedIn presence.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 shadow-md dark:bg-purple-900/50 dark:text-purple-400 dark:shadow-purple-900/30">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Let AI do its magic</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our system analyzes and learns your unique voice to create content that sounds like you.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-10 w-fit rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 text-base font-medium text-white shadow-lg shadow-purple-200/50 transition-all hover:shadow-xl hover:shadow-purple-300/50 dark:shadow-purple-900/30">
                Try Voice Training
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-100 opacity-50 dark:bg-purple-900/30"></div>
              <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-purple-100 opacity-50 dark:bg-purple-900/30"></div>

              <div className="relative rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900 dark:shadow-purple-900/20">
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">BEFORE AI TRAINING</div>
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                </div>
                <div className="mb-8 rounded-xl bg-gray-50 p-6 shadow-inner dark:bg-gray-800">
                  <p className="text-gray-700 dark:text-gray-300">
                    I've been working on improving team productivity lately. We've implemented some new tools and
                    processes that have helped us get more done in less time. It's been a good experience overall.
                  </p>
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">AFTER AI TRAINING</div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                </div>
                <div className="rounded-xl bg-purple-50 p-6 shadow-inner dark:bg-purple-900/20">
                  <p className="mb-3">
                    <span className="font-semibold text-purple-700 dark:text-purple-400">
                      I've been obsessed with one question lately:
                    </span>{" "}
                    How can my team 2x our output without burning out?
                  </p>
                  <p className="mb-3">
                    After 3 weeks of experimenting, we found our answer. By implementing async standups and "deep work"
                    blocks, we've cut meeting time by 70% and increased sprint completion rates from 65% to 94%.
                  </p>
                  <p className="mb-3">The biggest surprise? Team happiness scores are up 32%.</p>
                  <p>What's one process change that transformed your team's productivity?</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
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
                      >
                        <path d="M7 10v12"></path>
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">247</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
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
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">42</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

