"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden bg-white pt-24 dark:bg-gray-950">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute left-0 right-0 top-0 h-full w-full bg-gradient-to-br from-purple-50/40 via-white to-purple-50/40 dark:from-purple-950/40 dark:via-gray-950 dark:to-purple-950/40"></div>

        {/* Animated gradient orbs */}
        <div className="absolute -left-20 -top-20 h-[500px] w-[500px] animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-purple-200/20 via-purple-300/20 to-purple-200/20 blur-3xl dark:from-purple-900/10 dark:via-purple-800/10 dark:to-purple-900/10"></div>
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] animate-[pulse_10s_ease-in-out_infinite_1s] rounded-full bg-gradient-to-tl from-purple-200/20 via-purple-300/20 to-purple-200/20 blur-3xl dark:from-purple-900/10 dark:via-purple-800/10 dark:to-purple-900/10"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmOGY4ZjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-[0.03] dark:opacity-[0.02]"></div>

        {/* Floating elements */}
        <div className="absolute left-1/4 top-1/3 h-20 w-20 animate-[float_10s_ease-in-out_infinite] rounded-full border border-purple-200/30 bg-gradient-to-br from-white to-purple-50/80 opacity-70 blur-sm dark:border-purple-800/20 dark:from-gray-900 dark:to-purple-900/30 dark:opacity-40"></div>
        <div className="absolute right-1/4 top-1/2 h-32 w-32 animate-[float_12s_ease-in-out_infinite_1s] rounded-full border border-purple-200/30 bg-gradient-to-br from-white to-purple-50/80 opacity-70 blur-sm dark:border-purple-800/20 dark:from-gray-900 dark:to-purple-900/30 dark:opacity-40"></div>

        {/* Small decorative elements */}
        <div className="absolute left-1/3 top-1/4 h-2 w-2 animate-pulse rounded-full bg-purple-400 opacity-70 dark:opacity-40"></div>
        <div className="absolute right-1/3 top-1/3 h-3 w-3 animate-pulse rounded-full bg-purple-400 opacity-70 dark:opacity-40"></div>
        <div className="absolute left-2/3 top-1/2 h-2 w-2 animate-pulse rounded-full bg-purple-400 opacity-70 dark:opacity-40"></div>

        {/* Geometric shapes */}
        <div className="absolute right-1/5 top-1/4 h-16 w-16 animate-[spin_20s_linear_infinite] rotate-45 border border-purple-200/50 opacity-30 dark:border-purple-800/30"></div>
        <div className="absolute left-1/5 bottom-1/4 h-24 w-24 animate-[spin_30s_linear_infinite] rotate-12 rounded-lg border border-purple-200/50 opacity-20 dark:border-purple-800/30"></div>
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 mix-blend-soft-light dark:opacity-20"></div>

      <div className="container relative z-10 pb-20 pt-10">
        <motion.div style={{ y, opacity }} className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-2 dark:from-purple-900/20 dark:to-purple-800/20"
          >
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-purple-600 dark:bg-purple-400"></span>
            <span className="bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-sm font-medium text-transparent dark:from-purple-400 dark:to-purple-200">
              The LinkedIn Game Changer
            </span>
          </motion.div>

          <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:via-gray-300 dark:to-white">
            Write LinkedIn Posts That Rank, Resonate & Build Authority.
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10 text-xl text-gray-600 dark:text-gray-400"
          >
            An AI-powered content engine tailored to your voice, audience, and growth goals.
            <br />
            Turn your expertise into engaging content that builds your personal brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group h-12 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 px-8 text-base font-medium text-white shadow-lg shadow-purple-200/50 transition-all hover:shadow-xl hover:shadow-purple-300/50 dark:shadow-purple-900/30"
            >
              Generate My First Post
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-purple-200 bg-white/80 px-8 text-base font-medium text-purple-700 backdrop-blur-sm transition-all hover:bg-purple-50 hover:text-purple-800 dark:border-purple-800/30 dark:bg-gray-950/80 dark:text-purple-400 dark:hover:bg-gray-900 dark:hover:text-purple-300"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo (60s)
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="relative rounded-2xl bg-white p-8 shadow-2xl shadow-purple-200/20 dark:bg-gray-900 dark:shadow-purple-900/10">
            <div className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-300/30 dark:shadow-purple-900/30">
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
                <path d="M16 8a6 6 0 0 1 6 6v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2 2 2 0 0 0-2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1a6 6 0 0 1 6-6z" />
                <rect width="4" height="6" x="10" y="2" rx="2" />
              </svg>
            </div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full ring-4 ring-purple-100 dark:ring-purple-800/30">
                <Image
                  src="/avatars/sarah-johnson.png"
                  alt="Profile"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Sarah Johnson</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Product Designer • 2h</div>
              </div>
            </div>
            <div className="mb-6 text-gray-800 dark:text-gray-300">
              <p className="mb-4">
                <span className="font-semibold text-purple-700 dark:text-purple-400">
                  I used to struggle with consistency on LinkedIn.
                </span>
                Posting regularly felt like a chore, and my content rarely got engagement.
              </p>
              <p className="mb-4">
                That changed when I discovered a simple framework: Share a specific challenge, explain how you solved
                it, and end with an actionable takeaway.
              </p>
              <p>Now my posts regularly get 50+ comments and my network has grown by 3,000+ in just 3 months.</p>
            </div>
            <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
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
                  <span className="font-medium text-gray-700 dark:text-gray-300">247</span>
                </div>
                <div className="flex items-center gap-2">
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
                  <span className="font-medium text-gray-700 dark:text-gray-300">42</span>
                </div>
              </div>
              <div className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                AI Generated with LinkedIn AI Writer
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-gray-950 dark:to-transparent"></div>
      </div>
    </section>
  )
}

