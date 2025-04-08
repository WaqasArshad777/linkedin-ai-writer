"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DemoPlayground() {
  const [audience, setAudience] = useState("professionals")
  const [tone, setTone] = useState("conversational")
  const [goal, setGoal] = useState("thought-leadership")
  const [generated, setGenerated] = useState(false)

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

  const handleGenerate = () => {
    setGenerated(true)
  }

  return (
    <section id="demo" className="bg-gradient-to-b from-purple-50 to-white py-20 dark:from-gray-900 dark:to-gray-950">
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
              highlight="Playground Demo"
            >
              Interactive Demo / Live Playground
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              Try generating a sample LinkedIn post with our AI writer.
            </Description>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900 dark:shadow-gray-900/30"
          >
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Target Audience
                </label>
                <Select value={audience} onValueChange={setAudience}>
                  <SelectTrigger className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectItem value="professionals">Professionals</SelectItem>
                    <SelectItem value="entrepreneurs">Entrepreneurs</SelectItem>
                    <SelectItem value="job-seekers">Job Seekers</SelectItem>
                    <SelectItem value="recruiters">Recruiters</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Tone</label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectItem value="conversational">Conversational</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="inspirational">Inspirational</SelectItem>
                    <SelectItem value="educational">Educational</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Post Goal</label>
                <Select value={goal} onValueChange={setGoal}>
                  <SelectTrigger className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
                    <SelectValue placeholder="Select goal" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectItem value="thought-leadership">Thought Leadership</SelectItem>
                    <SelectItem value="engagement">Maximize Engagement</SelectItem>
                    <SelectItem value="lead-generation">Lead Generation</SelectItem>
                    <SelectItem value="personal-story">Personal Story</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6 flex justify-center">
              <Button onClick={handleGenerate} className="rounded-2xl bg-purple-600 px-8 hover:bg-purple-700">
                Generate Post
              </Button>
            </div>

            {generated && (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=You"
                      alt="Your profile"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold dark:text-white">Your Name</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Your Title • Just now</div>
                  </div>
                </div>
                <div className="mb-4 text-gray-800 dark:text-gray-200">
                  <p className="mb-3">
                    <span className="font-semibold text-purple-700 dark:text-purple-400">
                      I've noticed something interesting about productivity:
                    </span>
                    The most effective professionals aren't those who work the longest hours—they're the ones who master
                    the art of deep work.
                  </p>
                  <p className="mb-3">
                    After studying high-performers across industries for 3 years, I've identified three common habits:
                  </p>
                  <p className="mb-3">
                    1️⃣ They block 90-minute distraction-free sessions
                    <br />
                    2️⃣ They ruthlessly eliminate context-switching
                    <br />
                    3️⃣ They measure output, not hours
                  </p>
                  <p>The result? They accomplish in 4 focused hours what takes others an entire day.</p>
                  <p className="mt-3">What's one productivity technique that's been game-changing for you?</p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
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
                        className="text-purple-600 dark:text-purple-400"
                      >
                        <path d="M7 10v12" />
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                      </svg>
                      <span className="text-sm font-medium dark:text-gray-300">0</span>
                    </div>
                    <div className="flex items-center gap-1">
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
                        className="text-purple-600 dark:text-purple-400"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span className="text-sm font-medium dark:text-gray-300">0</span>
                    </div>
                  </div>
                  <div className="text-xs text-purple-600 dark:text-purple-400">
                    AI Generated with LinkedIn AI Writer
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

