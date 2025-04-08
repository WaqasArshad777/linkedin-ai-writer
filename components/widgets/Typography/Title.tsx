import { cn } from "@/lib/utils"
import React from "react"

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  highlight?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: "sm" | "md" | "lg" | "xl"
  align?: "left" | "center" | "right"
  spacing?: "tight" | "normal" | "wide"
}

const sizeClasses = {
  sm: "text-2xl md:text-3xl",
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl",
  xl: "text-4xl md:text-5xl lg:text-6xl",
}

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
}

const spacingClasses = {
  tight: "mb-4",
  normal: "mb-6",
  wide: "mb-8",
}

export function Title({
  children,
  highlight,
  tag = "h2",
  size = "lg",
  align = "left",
  spacing = "normal",
  className,
  ...props
}: TitleProps) {
  const Tag = tag
  const words = typeof children === "string" ? children.split(" ") : null
  const highlightWords = highlight ? highlight.split(" ") : []
  console.log({ words, highlightWords })
  return (
    <Tag
      className={cn(
        "font-bold tracking-tight text-gray-900 dark:text-white",
        sizeClasses[size],
        alignClasses[align],
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {words && highlightWords.length > 0
        ? words.map((word, i) => (
            <React.Fragment key={i}>
              {highlightWords.includes(word) ? (
                <span className="text-purple-600 dark:text-purple-400">{word}</span>
              ) : (
                word
              )}{" "}
            </React.Fragment>
          ))
        : children}
    </Tag>
  )
} 