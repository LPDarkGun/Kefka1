'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 z-50 bg-background  backdrop-blur-md"
      >
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold"
              data-cursor="text"
            >
              K.
            </motion.div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <Link 
                  href={item.href}
                  className={`text-lg font-medium transition-colors relative ${
                    router.pathname === item.href 
                      ? "text-foreground" 
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                  data-cursor="text"
                >
                  {item.title}
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-px bg-primary origin-left"
                    initial={{ scaleX: router.pathname === item.href ? 1 : 0 }}
                    animate={{ scaleX: router.pathname === item.href ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Burger Button */}
          {isMobile && (
            <motion.button
              className="z-50 relative w-10 h-10 flex md:hidden flex-col justify-center items-center"
              onClick={() => setIsOpen(!isOpen)}
              animate={isOpen ? "open" : "closed"}
              data-cursor="text"
            >
              <motion.span
                className="w-6 h-0.5 bg-foreground block absolute"
                variants={{
                  closed: { rotate: 0, y: -4 },
                  open: { rotate: 45, y: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-foreground block absolute"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-foreground block absolute"
                variants={{
                  closed: { rotate: 0, y: 4 },
                  open: { rotate: -45, y: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          )}
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-background flex items-center justify-center md:hidden"
          >
            {/* Staggered Grid Background */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-6">
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-primary/5"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{
                    duration: isOpen ? 0.3 : 0.15,
                    ease: [0.22, 1, 0.36, 1],
                    delay: isOpen ? 0.03 * i : 0.01 * i,
                  }}
                  style={{
                    originY: i % 2 === 0 ? 0 : 1
                  }}
                />
              ))}
            </div>

            <nav className="relative z-50 w-full px-12">
              <motion.ul 
                className="flex flex-col items-center gap-6"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.02, staggerDirection: -1 }
                  }
                }}
              >
                {menuItems.map((item, i) => (
                  <div key={item.title} className="overflow-hidden w-full">
                    <motion.li
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                        delay: i * 0.05
                      }}
                    >
                      <Link 
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-center py-3 text-5xl font-bold ${
                          router.pathname === item.href 
                            ? "text-primary" 
                            : "text-foreground/60 hover:text-foreground"
                        }`}
                      >
                        {item.title}
                        <motion.div
                          className="h-px w-0 bg-primary/20 mx-auto mt-2"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 0.2, delay: 0.1 + i * 0.05 }}
                        />
                      </Link>
                    </motion.li>
                  </div>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
