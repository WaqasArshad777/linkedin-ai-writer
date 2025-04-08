"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-gray-100 dark:bg-gray-800">
      <div
        className="h-full bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-800"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  )
}

