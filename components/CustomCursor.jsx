'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - 16,
        y: e.clientY - 16
      });
    };

    const handleTextEnter = () => {
      setCursorVariant("text");
    };

    const handleTextLeave = () => {
      setCursorVariant("default");
    };

    // Function to add event listeners to elements
    const addEventListeners = () => {
      const textElements = document.querySelectorAll('[data-cursor="text"]');
      textElements.forEach(element => {
        element.addEventListener('mouseenter', handleTextEnter);
        element.addEventListener('mouseleave', handleTextLeave);
      });
    };

    // Create an observer instance
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          addEventListeners();
        }
      });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    // Initial setup
    window.addEventListener("mousemove", mouseMove);
    addEventListeners();
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      observer.disconnect();
      const textElements = document.querySelectorAll('[data-cursor="text"]');
      textElements.forEach(element => {
        element.removeEventListener('mouseenter', handleTextEnter);
        element.removeEventListener('mouseleave', handleTextLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1,
      backgroundColor: "rgba(150, 150, 150, 0.15)"
    },
    text: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1,
      backgroundColor: "rgba(150, 150, 150, 0.1)"
    }
  };

  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:block backdrop-blur-[1px]"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor; 