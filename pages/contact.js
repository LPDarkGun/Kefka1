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

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                {/* Left Column - Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-xl text-primary/60 mb-4">Location</h3>
                    <p className="text-2xl">New York City, USA</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-primary/60 mb-4">Email</h3>
                    <motion.a
                      href="mailto:hello@kefka.studio"
                      className="text-2xl hover:text-primary transition-colors inline-block"
                      data-cursor="text"
                    >
                      hello@kefka.studio
                    </motion.a>
                  </div>
                  <div>
                    <h3 className="text-xl text-primary/60 mb-4">Phone</h3>
                    <motion.a
                      href="tel:+1234567890"
                      className="text-2xl hover:text-primary transition-colors inline-block"
                      data-cursor="text"
                    >
                      +1 (234) 567-890
                    </motion.a>
                  </div>
                </motion.div>

                {/* Right Column - Contact Form */}
                <motion.form
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <motion.input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-primary/20 py-4 focus:outline-none focus:border-primary transition-colors"
                      whileFocus={{ scale: 1.01 }}
                      data-cursor="text"
                    />
                    <motion.input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-transparent border-b border-primary/20 py-4 focus:outline-none focus:border-primary transition-colors"
                      whileFocus={{ scale: 1.01 }}
                      data-cursor="text"
                    />
                    <motion.textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full bg-transparent border-b border-primary/20 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                      whileFocus={{ scale: 1.01 }}
                      data-cursor="text"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor="text"
                  >
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
                      Send Message
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
                </motion.form>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap justify-center gap-8"
              >
                {[
                  { name: "Twitter", link: "#" },
                  { name: "LinkedIn", link: "#" },
                  { name: "Instagram", link: "#" },
                  { name: "Dribbble", link: "#" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    className="text-primary/60 hover:text-primary transition-colors"
                    whileHover={{ y: -5 }}
                    data-cursor="text"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
