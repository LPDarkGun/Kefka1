"use client"
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import PageTransition from "@/components/PageTransition"

export default function Contact() {
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
                className="border border-primary/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.01 }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Pre-title */}
              <div className="overflow-hidden mb-8">
                <motion.p
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xl text-primary/60"
                >
                  Get in Touch
                </motion.p>
              </div>

              {/* Main Title - More Dynamic Version */}
              <div className="flex flex-col gap-6 mb-16 relative">
                <div className="overflow-hidden relative">
                  <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-center gap-4"
                  >
                    {/* Let's */}
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="overflow-hidden relative"
                    >
                      <motion.span
                        className="text-[6vw] text-white"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        let's
                      </motion.span>
                      <motion.div
                        className="absolute -right-12 top-1/2 w-24 h-[1px] bg-primary/20"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      />
                    </motion.div>

                    {/* Create */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.div
                        className="absolute -left-8 -top-8 text-8xl text-primary/10"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        {"{"}
                      </motion.div>
                      <motion.span
                        className="text-[15vw] font-bold tracking-tighter block"
                        data-cursor="text"
                        animate={{
                          x: [0, 10, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        Create
                      </motion.span>
                      <motion.div
                        className="absolute -right-8 -bottom-8 text-8xl text-primary/10"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        {"}"}
                      </motion.div>
                    </motion.div>

                    {/* Together */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      <motion.div
                        className="absolute -left-16 top-1/2 w-12 h-[1px] bg-primary/20"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                      />
                      <motion.span
                        className="text-[12vw] font-bold tracking-tighter block"
                        data-cursor="text"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      >
                        Together
                      </motion.span>
                      <motion.div
                        className="absolute -right-16 top-1/2 w-12 h-[1px] bg-primary/20"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -left-4 top-1/2 text-4xl text-primary/20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ◈
                </motion.div>
                <motion.div
                  className="absolute right-4 bottom-0 text-3xl text-primary/20"
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ◇
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
