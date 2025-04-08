"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Title } from "@/components/widgets/Typography/Title"
import { Description } from "@/components/widgets/Typography/Description"

export function Pricing() {
  const [annual, setAnnual] = useState(false)
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

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals just getting started with LinkedIn.",
      price: annual ? 7 : 9,
      features: ["5 AI posts per week", "Basic analytics", "Standard templates", "Email support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description: "For professionals serious about LinkedIn growth.",
      price: annual ? 24 : 29,
      features: [
        "Unlimited AI posts",
        "Advanced analytics",
        "Voice training mode",
        "Post scheduling",
        "Priority support",
        "Custom templates",
      ],
      cta: "Go Pro",
      popular: true,
    },
    {
      name: "Authority",
      description: "For teams and power users building a major presence.",
      price: annual ? 67 : 79,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Advanced analytics",
        "Custom prompts library",
        "API access",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" ref={ref} className="py-24 dark:bg-gray-950">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-5xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-2 dark:from-purple-900/20 dark:to-purple-800/20">
              <span className="bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-sm font-medium text-transparent dark:from-purple-400 dark:to-purple-200">
                Simple Pricing
              </span>
            </div>
            <Title
              align="center"
              highlight="Plans Pay"
            >
              Plans That Pay for Themselves
            </Title>
            <Description
              align="center"
              maxWidth="md"
            >
              Choose the plan that's right for your LinkedIn growth goals.
            </Description>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium ${annual ? "text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-white"}`}
            >
              Monthly
            </span>
            <div className="flex items-center">
              <Switch
                id="billing-toggle"
                checked={annual}
                onCheckedChange={setAnnual}
                className="data-[state=checked]:bg-purple-600"
              />
              <Label htmlFor="billing-toggle" className="sr-only">
                Toggle billing period
              </Label>
            </div>
            <span
              className={`flex items-center gap-2 text-sm font-medium ${annual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
            >
              Annual
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                Save 20%
              </span>
            </span>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative overflow-hidden rounded-2xl ${
                  plan.popular
                    ? "bg-gradient-to-b from-white to-purple-50 shadow-xl shadow-purple-200/30 dark:from-gray-900 dark:to-purple-900/20 dark:shadow-purple-900/20"
                    : "bg-white shadow-xl shadow-gray-200/30 dark:bg-gray-900 dark:shadow-gray-900/30"
                } p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <div className="rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-1 text-sm font-medium text-white shadow-lg shadow-purple-300/30 dark:shadow-purple-900/30">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">/mo</span>
                  </div>
                  {annual && (
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Billed annually (${plan.price * 12}/year)
                    </p>
                  )}
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-xl ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-200/30 hover:shadow-xl hover:shadow-purple-300/40 dark:shadow-purple-900/30"
                      : "bg-white text-purple-700 shadow-lg shadow-gray-200/20 hover:bg-gray-50 dark:bg-gray-800 dark:text-purple-400 dark:shadow-gray-900/20 dark:hover:bg-gray-700"
                  } h-12 text-base font-medium`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

