"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"
export function FAQ() {
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

  const faqs = [
    {
      question: "How is this different from ChatGPT or other AI writers?",
      answer:
        "Our AI is fine-tuned for LinkedIn content structure, engagement psychology, and platform-specific SEO signals. It doesn't just write—it ranks.",
    },
    {
      question: "Do I need to be a good writer to use this?",
      answer: "Nope. Just answer a few questions and let the AI do the storytelling. You're the idea; we're the pen.",
    },
    {
      question: "Will it sound like me?",
      answer:
        'Yes. Our "Write Like Me" training mode adapts the tone and structure to match your voice with uncanny accuracy.',
    },
    {
      question: "Is this LinkedIn-approved? Will I get banned?",
      answer: "100% safe. No automation, no scraping. You write and post manually—or schedule with approved tools.",
    },
    {
      question: "Can I try it before I buy?",
      answer: "Absolutely. Our live demo lets you create a post in under a minute—no signup needed.",
    },
    {
      question: "What industries does this work for?",
      answer:
        "Tech, coaching, finance, real estate, SaaS, startups, freelancers, and more. If your audience is on LinkedIn—it works.",
    },
    {
      question: "Is the content really original?",
      answer:
        "Yes. Every post is generated uniquely based on your inputs, style, and goals. Zero templates. Zero plagiarism.",
    },
    {
      question: "What if I don't like a generated post?",
      answer: "You can regenerate, edit, or refine it instantly. You're always in control.",
    },
  ]

  return (
    <section id="faq" ref={ref} className="py-24 dark:bg-gray-950">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-2 dark:from-purple-900/20 dark:to-purple-800/20">
              <span className="bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-sm font-medium text-transparent dark:from-purple-400 dark:to-purple-200">
                Frequently Asked Questions
              </span>
            </div>
            <Title
              align="center"
              highlight="Wondering You?"
            >
              Still Wondering If It's For You?
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              Get answers to the most common questions about our LinkedIn AI Writer.
            </Description>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-white p-6 shadow-xl shadow-purple-100/10 dark:bg-gray-900 dark:shadow-purple-900/5 md:p-8"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-100 py-2 dark:border-gray-800"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">
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

