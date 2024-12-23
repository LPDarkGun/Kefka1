'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const words = ["Բարեվ", "Hello", "Привет", "Салам ұаілекұм", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight});
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1500 : 100);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    };

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="introduction-container flex items-center justify-center fixed inset-0 z-[99]"
        >
            {dimension.width > 0 && (
                <>
                    <motion.p
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        className="relative z-10 text-white text-4xl flex items-center"
                    >
                        <span className="dot-indicator"></span>
                        {words[index]}
                    </motion.p>
                    <svg className="svg-overlay absolute inset-0 h-[calc(100%+300px)] w-full top-0">
                        <motion.path
                            variants={curve}
                            initial="initial"
                            exit="exit"
                            className="fill-[#141516]"
                        ></motion.path>
                    </svg>
                </>
            )}
        </motion.div>
    );
}
