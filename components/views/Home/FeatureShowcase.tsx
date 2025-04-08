"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { BarChart3, BookOpen, Calendar, Target, Zap, MessageSquare } from "lucide-react"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"

export function FeatureShowcase() {
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

  // Add this before the return statement
  const [currentIndex, setCurrentIndex] = useState(0)

  // Define features array
  const features = [
    {
      icon: <Target className="h-7 w-7" />,
      title: "Hook Generator",
      description:
        "Scroll-stopping openings powered by viral data analysis to capture attention in the first 2 seconds.",
    },
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Story Engine",
      description: "Personalized storytelling based on your journey and experiences that resonates with your audience.",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Optimization Engine",
      description: "Data-backed edits to boost engagement with suggestions for improving your content's performance.",
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Smart Drafts",
      description: "New ideas daily based on trending topics and your past performance to keep your content fresh.",
    },
    {
      icon: <Calendar className="h-7 w-7" />,
      title: "Auto-Scheduler",
      description:
        "Set it and forget it with our intelligent scheduling system that posts at optimal times for engagement.",
    },
    {
      icon: <MessageSquare className="h-7 w-7" />,
      title: "Engagement Assistant",
      description: "AI-powered responses to comments that keep the conversation going and build deeper connections.",
    },
  ]


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === features.length - 3 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section
      id="features"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-b-full bg-purple-50 opacity-50 dark:bg-purple-900/10"></div>
        <div className="absolute left-1/4 top-1/3 h-4 w-4 rounded-full bg-purple-200 dark:bg-purple-700"></div>
        <div className="absolute right-1/3 top-1/4 h-3 w-3 rounded-full bg-purple-300 dark:bg-purple-600"></div>
        <div className="absolute bottom-1/4 right-1/4 h-5 w-5 rounded-full bg-purple-200 dark:bg-purple-700"></div>
      </div>

      <div className="container relative z-10">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div variants={itemVariants} className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-2 dark:from-purple-900/20 dark:to-purple-800/20">
              <span className="bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-sm font-medium text-transparent dark:from-purple-400 dark:to-purple-200">
                Built for Serious LinkedIn Growth
              </span>
            </div>
            <Title
              align="center"
              highlight="Transform LinkedIn"
            >
              Features That Transform Your LinkedIn Presence
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              Our AI-powered features are designed to help you create content that stands out, engages your audience,
              and builds your personal brand.
            </Description>
          </motion.div>

          <div className="relative mx-auto max-w-6xl">
            <div className="overflow-hidden px-4 py-8">
              {/* Slider container */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Slides */}
                <motion.div
                  className="flex"
                  animate={{
                    x: `-${currentIndex * (100 / 3)}%`,
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  {/* Duplicate the features array for infinite loop effect */}
                  {[...features, ...features].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-4"
                      initial={{ scale: 0.9, opacity: 0.7 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="group h-full overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/30 dark:bg-gray-900 dark:shadow-purple-900/10 dark:hover:shadow-purple-900/20">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600 dark:from-purple-900/50 dark:to-purple-800/50 dark:text-purple-400">
                          {feature.icon}
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                        <p className="mb-6 text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Navigation arrows - redesigned */}
                <div className="mt-8 flex items-center justify-center gap-4">
                  <button
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-purple-600 shadow-md transition-all hover:bg-purple-50 hover:text-purple-700 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700"
                    onClick={() => {
                      const newIndex = currentIndex === 0 ? features.length - 3 : currentIndex - 1
                      setCurrentIndex(newIndex)
                    }}
                    aria-label="Previous slide"
                  >
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
                      className="h-5 w-5"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: features.length - 2 }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 w-3 rounded-full transition-all ${
                          currentIndex === index ||
                          (currentIndex === features.length - 3 && index === 0) ||
                          (currentIndex === features.length - 2 && index === 1) ||
                          (currentIndex === features.length - 1 && index === 2)
                            ? "bg-purple-600 dark:bg-purple-400"
                            : "bg-purple-200 dark:bg-purple-800"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-purple-600 shadow-md transition-all hover:bg-purple-50 hover:text-purple-700 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700"
                    onClick={() => {
                      const newIndex = currentIndex === features.length - 3 ? 0 : currentIndex + 1
                      setCurrentIndex(newIndex)
                    }}
                    aria-label="Next slide"
                  >
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
                      className="h-5 w-5"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

