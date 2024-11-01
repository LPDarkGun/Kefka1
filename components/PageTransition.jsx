'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PageTransition = ({ children }) => {
  const router = useRouter();
  const [columns, setColumns] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(3);
      } else if (window.innerWidth < 1024) {
        setColumns(4);
      } else {
        setColumns(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname} className="relative">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>

        {/* Grid transition effect */}
        <motion.div
          className="fixed inset-0 z-50 grid"
          style={{ 
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            pointerEvents: 'none'
          }}
          initial="initial"
          exit="exit"
        >
          {[...Array(columns)].map((_, i) => (
            <motion.div
              key={i}
              className="h-screen"
              style={{ 
                originY: 0,
                transformOrigin: 'top',
                backgroundColor: '#111111'
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.04
              }}
            />
          ))}
        </motion.div>

        {/* Enter transition */}
        <motion.div
          className="fixed inset-0 z-50 grid"
          style={{ 
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            pointerEvents: 'none'
          }}
          initial="exit"
          animate="initial"
        >
          {[...Array(columns)].map((_, i) => (
            <motion.div
              key={i}
              className="h-screen"
              style={{ 
                originY: 1,
                transformOrigin: 'bottom',
                backgroundColor: '#111111'
              }}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.04
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition; 