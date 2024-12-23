"use client"
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import PageTransition from "@/components/PageTransition"
import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

const Counter = ({ from, to, duration = 2 }) => {
  const nodeRef = useRef()
  const inView = useInView(nodeRef, { once: true })
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (inView) {
      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 1000)

        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(to)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [inView, from, to, duration])

  return <span ref={nodeRef}>{count}</span>
}

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
          {/* Background Grid */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.01 }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Main Title */}
              <div className="flex flex-col items-start gap-24">
                {/* First Line */}
                <div className="w-full flex justify-between items-baseline">
                  <motion.span
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl text-primary"
                  >
                    Est. 2020
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-[15vw] font-bold"
                    data-cursor="text"
                  >
                    Kefka
                  </motion.div>
                </div>

                {/* Second Line */}
                <div className="w-full flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-[20vw] font-bold tracking-tighter"
                    data-cursor="text"
                  >
                    Creates
                  </motion.div>
                </div>

                {/* Third Line */}
                <div className="w-full flex justify-between items-baseline">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-[15vw] font-bold"
                    data-cursor="text"
                  >
                    The
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-2xl text-primary text-right"
                  >
                    Digital
                    <br />
                    Studio
                  </motion.span>
                </div>

                {/* Fourth Line */}
                <div className="w-full flex justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-[20vw] font-bold tracking-tighter bg-clip-text text-transparent text-white"
                    data-cursor="text"
                  >
                    Future
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 relative">
          {/* Background Grid */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.01 }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
              {[
                { number: 5, suffix: "+", label: "Years Experience" },
                { number: 150, suffix: "+", label: "Projects Completed" },
                { number: 50, suffix: "+", label: "Happy Clients" },
                { number: 3, suffix: "+", label: "Major Projects" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center relative group"
                  data-cursor="text"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary"
                    >
                      <Counter from={0} to={stat.number} />
                      {stat.suffix}
                    </motion.div>
                    <p className="text-muted-foreground text-lg">
                      {stat.label}
                    </p>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-xl -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
