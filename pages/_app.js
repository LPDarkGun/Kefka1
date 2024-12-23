import "@/styles/globals.css"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CustomCursor from "@/components/CustomCursor"
import Preloader from "@/components/Preloader"

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const isRefresh = window.performance
      .getEntriesByType("navigation")
      .some((nav) => nav.type === "reload")

    if (!isRefresh && localStorage.getItem("hasSeenLoader")) {
      setIsLoading(false)
      return
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
      localStorage.setItem("hasSeenLoader", "true")
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      <div className="bg-black min-h-screen">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {isLoading ? (
            <Preloader key="preloader" />
          ) : (
            <motion.div
              key="page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Component {...pageProps} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
