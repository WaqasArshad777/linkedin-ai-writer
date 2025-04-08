import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: "fadeIn" | "slideUp" | "slideDown" | "scale" | "bounce";
}

const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  },
  slideDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  },
  bounce: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
      }
    },
    exit: { scale: 0.8, opacity: 0 },
  },
};

export function Animation({ 
  children, 
  variant = "fadeIn",
  ...props 
}: AnimationProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants[variant]}
      {...props}
    >
      {children}
    </motion.div>
  );
} 