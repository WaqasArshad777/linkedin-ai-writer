"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"

export function CommunityFeed() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const posts = [
    {
      author: "Alex Chen",
      role: "Product Manager",
      avatar: "/avatars/alex-chen.png",
      time: "1d",
      content:
        "I've been testing a new approach to my LinkedIn content: sharing micro-case studies of product decisions. Engagement is up 215% in just two weeks!",
      likes: 127,
      comments: 32,
      timeSaved: "45 min",
    },
    {
      author: "Sarah Williams",
      role: "Marketing Consultant",
      avatar: "/avatars/sarah-williams.png",
      time: "3d",
      content:
        "The secret to LinkedIn growth isn't posting more—it's posting with intention. Since focusing on my audience's pain points rather than my services, I've seen 3x more inquiries.",
      likes: 89,
      comments: 17,
      timeSaved: "30 min",
    },
    {
      author: "Michael Torres",
      role: "Software Engineer",
      avatar: "/avatars/michael-torres.png",
      time: "5h",
      content:
        "Breaking down complex tech concepts into 5-part carousels has completely changed my LinkedIn game. From 10 likes per post to 200+ and multiple job offers.",
      likes: 214,
      comments: 46,
      timeSaved: "60 min",
    },
    {
      author: "Priya Sharma",
      role: "Startup Founder",
      avatar: "/avatars/priya-sharma.png",
      time: "2d",
      content:
        "Transparency about our startup journey—both wins and failures—has been our best marketing strategy. Our last funding announcement reached 50K people without a penny spent on ads.",
      likes: 342,
      comments: 78,
      timeSaved: "90 min",
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
            <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-2 dark:from-purple-900/20 dark:to-purple-800/20">
              <span className="bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-sm font-medium text-transparent dark:from-purple-400 dark:to-purple-200">
                Community Showcase
              </span>
            </div>
            <Title
              align="center"
              highlight="Posting"
            >
              Here's What People Are Posting (and Earning)
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              Real posts from real users, all generated with our AI writer.
            </Description>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800/90 dark:shadow-gray-900/30"
              >
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-100 opacity-0 transition-opacity duration-300 group-hover:opacity-50 dark:bg-purple-900/30"></div>

                <div className="relative p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full ring-4 ring-purple-100 dark:ring-purple-800/30">
                      <Image
                        src={post.avatar || "/placeholder.svg"}
                        alt={post.author}
                        width={56}
                        height={56}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">{post.author}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {post.role} • {post.time}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 rounded-xl bg-purple-50 p-5 dark:bg-purple-900/10">
                    <p className="text-gray-800 dark:text-gray-200">{post.content}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
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
                        <span className="font-medium text-gray-700 dark:text-gray-300">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
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
                        <span className="font-medium text-gray-700 dark:text-gray-300">{post.comments}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
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
                        className="text-green-500"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        Time saved: {post.timeSaved}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

