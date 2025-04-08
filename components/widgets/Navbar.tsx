"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/widgets/ThemeToggle"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-white/90 backdrop-blur-md dark:bg-gray-900/90" : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 6 7 17l-5-5" />
                <path d="m22 10-7.5 7.5L13 16" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight dark:text-white">LinkedIn AI Writer</span>
          </div>

          <nav className="hidden items-center md:flex">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="#features"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector("#features")
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector("#benefits")
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector("#pricing")
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector("#faq")
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <div className="hidden md:block">
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              >
                Sign In
              </Link>
            </div>
            <Button
              size="sm"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md shadow-purple-200 transition-all hover:shadow-lg hover:shadow-purple-200 dark:shadow-purple-900/20"
            >
              Get Started
            </Button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 md:hidden dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b bg-white dark:bg-gray-900 dark:border-gray-800 md:hidden"
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#features"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector("#features")
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" })
                      setMobileMenuOpen(false)
                    }
                  }}
                >
                  Features
                </Link>
                <Link
                  href="#benefits"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector("#benefits")
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" })
                      setMobileMenuOpen(false)
                    }
                  }}
                >
                  Benefits
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector("#pricing")
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" })
                      setMobileMenuOpen(false)
                    }
                  }}
                >
                  Pricing
                </Link>
                <Link
                  href="#faq"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector("#faq")
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" })
                      setMobileMenuOpen(false)
                    }
                  }}
                >
                  FAQ
                </Link>
                <div className="flex items-center justify-between pt-4">
                  <Link
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

