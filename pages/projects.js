"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Navigation from "@/components/Navigation"
import PageTransition from "@/components/PageTransition"
import { useState, useEffect, useRef, useCallback } from "react"

export default function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const magnetRef = useRef(null)
  const textRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e
    const magnetButton = magnetRef.current
    const textElement = textRef.current

    if (magnetButton && textElement) {
      const rect = magnetButton.getBoundingClientRect()
      const x = clientX - (rect.left + rect.width / 2)
      const y = clientY - (rect.top + rect.height / 2)

      magnetButton.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
      textElement.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    const magnetButton = magnetRef.current
    const textElement = textRef.current

    if (magnetButton && textElement) {
      magnetButton.style.transform = "translate(0, 0)"
      textElement.style.transform = "translate(0, 0)"
    }
  }, [])

  // Split text animation function
  const SplitText = ({ children }) => {
    return (
      <span className="inline-block">
        {children.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 50, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    )
  }

  const projects = [
    {
      id: 1,
      title: "Digital Experience",
      category: "Web Design",
      year: "2024",
      color: "rgb(200, 100, 250)",
      image:
        "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/10/67176c1bbb626752670143.png",
      description:
        "An immersive digital experience pushing the boundaries of web design.",
      tags: ["React", "Three.js", "WebGL"],
      link: "#",
    },
    {
      id: 2,
      title: "Brand Evolution",
      category: "Identity",
      year: "2023",
      color: "rgb(100, 200, 250)",
      image:
        "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/10/67153ece11ba0725696861.png",
      description:
        "Redefining brand identity through modern design principles.",
      tags: ["Branding", "UI/UX", "Motion"],
      link: "#",
    },
    {
      id: 3,
      title: "Future Vision",
      category: "Development",
      year: "2023",
      color: "rgb(250, 100, 100)",
      image:
        "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/10/6712ab48cfa92805253680.png",
      description:
        "Next-generation web application with cutting-edge features.",
      tags: ["Next.js", "AI", "Animation"],
      link: "#",
    },
  ]

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <PageTransition>
      <div
        ref={containerRef}
        className="min-h-screen bg-background text-foreground"
      >
        <Navigation />

        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden flex items-center justify-center pt-32 pb-16">
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
              {/* Staggered Text Animation */}
              <div className="overflow-hidden mb-24">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-wrap justify-center gap-8 text-[11vw] font-bold leading-none tracking-tighter"
                >
                  {["P", "R", "O", "J", "E", "C", "T", "S"].map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: i * 0.05,
                      }}
                      whileHover={{
                        scale: 1.1,
                        color: "rgba(255,255,255,1)",
                        transition: { duration: 0.2 },
                      }}
                      data-cursor="text"
                      className="text-primary/40 hover:cursor-default"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Project Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-8 mb-24"
              >
                {[
                  { name: "All", count: "24" },
                  { name: "Digital", count: "12" },
                  { name: "Branding", count: "08" },
                  { name: "Motion", count: "04" },
                ].map((category, i) => (
                  <motion.button
                    key={category.name}
                    className="relative group px-8 py-4"
                    whileHover={{ scale: 1.05 }}
                    data-cursor="text"
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/5 rounded-full -z-10"
                      initial={false}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                    <span className="block text-lg text-primary/60 mb-2">
                      {category.count}
                    </span>
                    <span className="text-xl font-medium">{category.name}</span>
                  </motion.button>
                ))}
              </motion.div>

              {/* Scroll Indicator */}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-32">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Project Container */}
                  <motion.div
                    className="relative z-10 grid grid-cols-12 gap-8 items-center"
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Project Number */}
                    <motion.div
                      className="col-span-2 text-[20vw] font-bold opacity-10 select-none"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 0.1 }}
                      viewport={{ once: true }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.div>

                    {/* Project Content */}
                    <div className="col-span-10 relative">
                      <motion.div
                        className="absolute -inset-8 rounded-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.05 }}
                        style={{ backgroundColor: project.color }}
                      />

                      <div className="relative grid grid-cols-2 gap-8">
                        {/* Text Content */}
                        <div className="space-y-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                          >
                            <p className="text-primary/60 mb-2">
                              {project.category} • {project.year}
                            </p>
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">
                              {project.title}
                            </h2>
                            <p className="text-muted-foreground">
                              {project.description}
                            </p>
                          </motion.div>

                          {/* Tags */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-2"
                          >
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-primary/5 text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </motion.div>

                          {/* View Project Button */}
                          <motion.a
                            href={project.link}
                            className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors group"
                            whileHover={{ x: 10 }}
                          >
                            View Project
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
                          </motion.a>
                        </div>

                        {/* Image */}
                        <motion.div
                          className="relative aspect-[4/3] rounded-xl overflow-hidden"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full"
                          />
                          <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.2 }}
                            style={{ backgroundColor: project.color }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Background Number */}
                  <motion.div
                    className="absolute -right-20 top-1/2 -translate-y-1/2 text-[40vh] font-bold opacity-5 select-none hidden xl:block"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 0.05, x: 0 }}
                    viewport={{ once: true }}
                  >
                    {String(i + 1).padStart(2, "0")}
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
