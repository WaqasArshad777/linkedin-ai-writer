import { cn } from "@/lib/utils"
import React from "react"

interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  size?: "sm" | "md" | "lg"
  align?: "left" | "center" | "right"
  spacing?: "tight" | "normal" | "wide"
  maxWidth?: "none" | "sm" | "md" | "lg" | "xl"
}

const sizeClasses = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
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

const maxWidthClasses = {
  none: "",
  sm: "max-w-lg",
  md: "max-w-2xl",
  lg: "max-w-3xl",
  xl: "max-w-4xl",
}

export function Description({
  children,
  size = "lg",
  align = "left",
  spacing = "normal",
  maxWidth = "none",
  className,
  ...props
}: DescriptionProps) {
  return (
    <p
      className={cn(
        "text-gray-600 dark:text-gray-400",
        sizeClasses[size],
        alignClasses[align],
        spacingClasses[spacing],
        maxWidthClasses[maxWidth],
        maxWidth !== "none" && align === "center" && "mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
} 