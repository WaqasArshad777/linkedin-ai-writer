"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
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

  const faqs = [
    {
      question: "How does the AI learn my voice?",
      answer:
        "Our AI analyzes your past LinkedIn posts and writing samples to understand your unique style, tone, and communication patterns. You can also customize your voice settings manually.",
    },
    {
      question: "Will the posts sound authentically like me?",
      answer:
        "Yes! Our AI is trained to maintain your authentic voice while optimizing for engagement. You'll always have final control over the content before posting.",
    },
    {
      question: "How many posts can I generate?",
      answer:
        "Our Starter plan includes 5 AI-generated posts per week. Pro and Authority plans offer unlimited post generation to support your content strategy.",
    },
    {
      question: "Can I schedule posts in advance?",
      answer:
        "Yes, Pro and Authority plans include a post scheduler that lets you queue up content and automatically post at optimal times for maximum engagement.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! You can try our platform free for 14 days, including all Pro features. No credit card required to start your trial.",
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to know about the LinkedIn AI Writer.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 