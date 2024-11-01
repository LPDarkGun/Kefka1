"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Navigation from "@/components/Navigation"
import PageTransition from "@/components/PageTransition"
import { useRef, useEffect, useState } from "react"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  return (
    <PageTransition>
      <div
        ref={containerRef}
        className="min-h-screen bg-background text-foreground"
      >
        <Navigation />

        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-primary/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.01 }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Split Text Animation */}
              <div className="overflow-hidden mb-16">
                <motion.p
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xl md:text-2xl text-primary/60"
                >
                  Digital Studio
                </motion.p>
              </div>

              {/* Main Title */}
              <div className="flex flex-col gap-8 mb-16">
                {["CRAFTING", "DIGITAL", "EXPERIENCE"].map((word, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h1
                      initial={{ y: 200 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.1 * i,
                      }}
                      className="text-[12vw] font-bold leading-[0.8] tracking-tighter"
                      data-cursor="text"
                    >
                      {word}
                    </motion.h1>
                  </div>
                ))}
              </div>

              {/* Floating Elements - Simplified version without mouse position */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/40 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex items-center justify-center">
                <motion.div
                  className="w-1.5 h-1.5 bg-primary/60 rounded-full"
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-sm text-primary/60">Scroll</span>
            </div>
          </motion.div>
        </section>

        {/* Featured Work Section */}
        <section className="min-h-screen py-32 relative">
          {/* Background Effect - Matched with Hero grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
              {[...Array(64)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-primary/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.01 }}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-32 overflow-hidden"
              >
                <div className="overflow-hidden">
                  <motion.p
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-xl text-primary/60 mb-4"
                  >
                    Selected Projects
                  </motion.p>
                </div>
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1,
                    }}
                    className="text-[8vw] font-bold leading-none tracking-tighter"
                  >
                    Featured Work
                  </motion.h2>
                </div>
              </motion.div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 gap-40">
                {[
                  {
                    title: "Digital Experience",
                    category: "Web Design",
                    year: "2024",
                    image:
                      "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/10/67176c1bbb626752670143.png",
                    color: "rgb(200, 100, 250)",
                  },
                  {
                    title: "Brand Evolution",
                    category: "Identity",
                    year: "2023",
                    image:
                      "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/10/67153ece11ba0725696861.png",
                    color: "rgb(100, 200, 250)",
                  },
                  {
                    title: "Future Vision",
                    category: "Development",
                    year: "2023",
                    image:
                      "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/10/6712ab48cfa92805253680.png",
                    color: "rgb(250, 100, 100)",
                  },
                ].map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="group relative"
                    data-cursor="text"
                  >
                    {/* Project Number */}
                    <motion.span
                      className="absolute -left-8 top-0 text-8xl font-bold opacity-10"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 0.1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      0{i + 1}
                    </motion.span>

                    {/* Project Content */}
                    <div className="grid grid-cols-12 gap-8 items-center">
                      {/* Text Content */}
                      <motion.div
                        className="col-span-12 md:col-span-5 space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="space-y-2">
                          <p className="text-primary/60">
                            {project.category} • {project.year}
                          </p>
                          <h3 className="text-4xl md:text-6xl font-bold">
                            {project.title}
                          </h3>
                        </div>

                        <motion.button
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors group"
                        >
                          <span>View Project</span>
                          <span className="group-hover:translate-x-2 transition-transform">
                            →
                          </span>
                        </motion.button>
                      </motion.div>

                      {/* Image */}
                      <motion.div
                        className="col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <motion.div
                          className="w-full h-full relative rounded-xl overflow-hidden"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.6 }}
                        >
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            style={{ backgroundColor: project.color }}
                          />
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full"
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="min-h-screen py-32 relative overflow-hidden">
          {/* Background Grid - matching other sections */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
              {[...Array(64)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-primary/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.01 }}
                />
              ))}
            </div>
          </div>

          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(200, 100, 250, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(100, 200, 250, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 100%, rgba(250, 100, 100, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* Pre-title */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-primary/60 text-xl"
                >
                  Got a project in mind?
                </motion.p>

                {/* Main Title with Split Animation */}
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[8vw] py-10 px-10 font-bold leading-none tracking-tighter"
                    data-cursor="text"
                  >
                    Let's Create Together
                  </motion.h2>
                </div>

                {/* Subtitle with Stagger */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl text-muted-foreground max-w-2xl mx-auto"
                >
                  Ready to transform your ideas into reality? Let's build
                  something extraordinary.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="pt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-12 py-6 bg-primary text-primary-foreground rounded-full text-lg font-medium overflow-hidden"
                    data-cursor="text"
                  >
                    {/* Button Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      animate={{
                        scale: [1, 2],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />

                    <span className="relative flex items-center gap-3">
                      Get in Touch
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </motion.div>

                {/* Optional: Social Links */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center gap-8 pt-12"
                >
                  {["Twitter", "LinkedIn", "Instagram"].map((social, i) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ y: -5 }}
                      className="text-primary/60 hover:text-primary transition-colors"
                    >
                      {social}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
