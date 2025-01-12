import React from 'react';
import { motion } from 'framer-motion';

const LoadingPage = () => {
    return (
        <motion.div
            className="fixed bg-[#0006] w-full min-h-screen top-0 flex justify-center items-center flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className="text-white text-5xl"
                animate={{
                    scale: [1, 1.2, 1], // Pulsing effect
                    opacity: [1, 0.8, 1], // Fading effect
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                Loading...
            </motion.h1>
        </motion.div>
    );
};

export default LoadingPage;
