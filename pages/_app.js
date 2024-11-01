import "@/styles/globals.css"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CustomCursor from "@/components/CustomCursor"

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if this is a page refresh
    const isRefresh = window.performance
      .getEntriesByType("navigation")
      .some((nav) => nav.type === "reload")

    // If it's not a refresh and we've seen the loader before, don't show it
    if (!isRefresh && localStorage.getItem("hasSeenLoader")) {
      setIsLoading(false)
      return
    }

    // Show loader
    setTimeout(() => {
      setIsLoading(false)
      localStorage.setItem("hasSeenLoader", "true")
    }, 2500)
  }, [])

  if (isLoading) {
    return (
      <motion.div
        className="h-screen bg-background flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative flex items-center justify-center">
          <motion.div
            className="flex items-center space-x-1"
            animate={{
              scale: [1, 1, 1.2, 0],
              opacity: [1, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              times: [0, 0.5, 0.8, 1],
              ease: "easeInOut",
            }}
          >
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-6xl font-bold"
            >
              K
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-6xl font-bold"
            >
              .
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  )
}
