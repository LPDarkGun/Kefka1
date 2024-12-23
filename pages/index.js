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
      <div ref={containerRef} className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
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

          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Split Text Animation */}
              <div className="overflow-hidden mb-16">
                <motion.p
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xl md:text-2xl text-white/60"
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
                    className="absolute w-1 h-1 bg-white/40 rounded-full"
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
        </section>

        {/* Featured Work Section */}
        <section className="min-h-screen py-32 relative">
          {/* Background Effect - Matched with Hero grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
              {[...Array(64)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-white/30"
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
                    className="text-xl text-white/60 mb-4"
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
                    key={project.title}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    {/* Project Content */}
                    <div className="relative grid grid-cols-2 gap-8">
                      {/* Text Content */}
                      <div className="space-y-6">
                        <p className="text-white/60 mb-2">
                          {project.category} • {project.year}
                        </p>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                          {project.title}
                        </h2>
                      </div>

                      {/* Image */}
                      <motion.div
                        className="relative aspect-[4/3] rounded-xl overflow-hidden"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full"
                        />
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
                  className="border border-white/30"
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
                  className="text-white/60 text-xl"
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
                    onClick={() => {
                      window.location.href =
                        "mailto:erosimcity@gmail.com?subject=Project Inquiry&body=Hi, I'd like to discuss a project with you."
                    }}
                    className="group relative px-12 py-6 bg-white text-black rounded-full text-lg font-medium overflow-hidden"
                    data-cursor="text"
                  >
                    {/* Button Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
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
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
