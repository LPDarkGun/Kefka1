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
                className="border border-primary/20"
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
                    className="text-2xl text-primary/60"
                  >
                    Est. 2014
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-[15vw] font-bold"
                    data-cursor="text"
                  >
                    WE
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
                    CREATE
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
                    THE
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-2xl text-primary/60 text-right"
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
                    className="text-[20vw] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                    data-cursor="text"
                  >
                    FUTURE
                  </motion.div>
                </div>

                {/* Decorative Lines */}
                <motion.div
                  className="absolute left-0 top-1/3 w-1/4 h-[1px] bg-primary/20"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.div
                  className="absolute right-0 bottom-1/3 w-1/4 h-[1px] bg-primary/20"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 relative">
          {/* Background Grid */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20">
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

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
              {[
                { number: 10, suffix: "+", label: "Years Experience" },
                { number: 150, suffix: "+", label: "Projects Completed" },
                { number: 50, suffix: "+", label: "Happy Clients" },
                { number: 3, suffix: "", label: "International Awards" },
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
                      className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
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

        {/* Team Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20">
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

          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[8vw] font-bold text-center mb-32 tracking-tighter"
              data-cursor="text"
            >
              Meet The Team
            </motion.h2>

            <div className="grid grid-cols-1 gap-32">
              {[
                {
                  name: "Alex Rivera",
                  role: "Creative Director",
                  image:
                    "https://images.unsplash.com/photo-1673100749940-d9a899cb3968?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww",
                  quote:
                    "Design is not just what it looks like, it's how it works.",
                  socials: [
                    { name: "Twitter", icon: "𝕏", link: "#" },
                    { name: "LinkedIn", icon: "in", link: "#" },
                    { name: "GitHub", icon: "⌘", link: "#" },
                  ],
                },
                {
                  name: "Sarah Chen",
                  role: "Lead Designer",
                  image:
                    "https://images.unsplash.com/photo-1615104603156-3dc403ca7cc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww",
                  image:
                    "https://images.unsplash.com/photo-1620828771830-fb3fa87866b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D",
                  quote: "Simplicity is the ultimate sophistication.",
                  socials: [
                    { name: "Twitter", icon: "𝕏", link: "#" },
                    { name: "LinkedIn", icon: "in", link: "#" },
                    { name: "Dribbble", icon: "◉", link: "#" },
                  ],
                },
                {
                  name: "Mark Thompson",
                  role: "Tech Lead",
                  image:
                    "https://images.unsplash.com/photo-1633718505538-65b4d3d09cec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D",
                  quote:
                    "Innovation distinguishes between a leader and a follower.",
                  socials: [
                    { name: "Twitter", icon: "𝕏", link: "#" },
                    { name: "LinkedIn", icon: "in", link: "#" },
                    { name: "GitHub", icon: "⌘", link: "#" },
                  ],
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-16 ${
                    i % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Side */}
                  <motion.div
                    className="w-1/2 relative"
                    initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      className="relative aspect-[3/4] rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Background Pattern */}
                      <motion.div
                        className="absolute inset-0 bg-primary/10"
                        style={{
                          backgroundImage: `radial-gradient(circle at ${
                            i % 2 === 0 ? "right" : "left"
                          } bottom, rgba(255,255,255,0.1) 0%, transparent 70%)`,
                        }}
                      />

                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full relative z-10"
                      />

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-20"
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <div className="flex gap-4 justify-center">
                            {member.socials.map((social) => (
                              <motion.a
                                key={social.name}
                                href={social.link}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center text-lg hover:bg-primary/20 transition-colors"
                              >
                                {social.icon}
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute -z-10 w-full h-full top-8 -left-8 rounded-xl border border-primary/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    />
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    className="w-1/2 space-y-6"
                    initial={{ x: i % 2 === 0 ? 100 : -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.p
                      className="text-primary/60 text-xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {member.role}
                    </motion.p>

                    <motion.h3
                      className="text-5xl font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {member.name}
                    </motion.h3>

                    <motion.div
                      className="relative"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.div
                        className="absolute -left-8 top-0 text-6xl opacity-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.2 }}
                        transition={{ delay: 0.5 }}
                      >
                        "
                      </motion.div>
                      <p className="text-xl text-muted-foreground leading-relaxed pl-8">
                        {member.quote}
                      </p>
                    </motion.div>

                    <motion.div
                      className="w-24 h-1 bg-primary/20"
                      initial={{ width: 0 }}
                      whileInView={{ width: 96 }}
                      transition={{ delay: 0.6 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
