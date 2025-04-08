"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-gradient-to-b from-white to-gray-50 py-20 dark:border-gray-800 dark:from-gray-950 dark:to-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-100/50 blur-3xl dark:bg-purple-900/10"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-100/50 blur-3xl dark:bg-purple-900/10"></div>
        <div className="absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-purple-400 opacity-30 dark:opacity-20"></div>
        <div className="absolute right-1/3 top-1/4 h-3 w-3 rounded-full bg-purple-400 opacity-30 dark:opacity-20"></div>
        <div className="absolute left-2/3 top-1/2 h-2 w-2 rounded-full bg-purple-400 opacity-30 dark:opacity-20"></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-200/50 transition-transform duration-300 hover:scale-105 dark:shadow-purple-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 6 7 17l-5-5" />
                    <path d="m22 10-7.5 7.5L13 16" />
                  </svg>
                </div>
                <span className="text-2xl font-bold tracking-tight dark:text-white">LinkedIn AI Writer</span>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                AI-powered content creation for LinkedIn professionals. Build your personal brand and grow your
                business.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-purple-100 hover:scale-110 hover:text-purple-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-purple-900/30 dark:hover:text-purple-400"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-purple-100 hover:scale-110 hover:text-purple-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-purple-900/30 dark:hover:text-purple-400"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-purple-100 hover:scale-110 hover:text-purple-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-purple-900/30 dark:hover:text-purple-400"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <div className="rounded-xl p-6 transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-900/50">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
                Product
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6 transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-900/50">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
                Company
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6 transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-900/50">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
                Legal
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    Data Processing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative mt-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-b from-white to-gray-50 px-4 text-sm text-gray-500 dark:from-gray-950 dark:to-gray-900 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-purple-500 dark:text-purple-400"
                >
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400"
          >
            <p>© {new Date().getFullYear()} LinkedIn AI Writer. All rights reserved.</p>
            <p className="mt-2">
              Made with <span className="text-purple-500 dark:text-purple-400">💜</span> by our team
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

