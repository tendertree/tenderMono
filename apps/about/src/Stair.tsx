"use client"
import { motion } from 'framer-motion';
import React from 'react'
const Animation: any = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    }
}
const reverseIndex = (index: any) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

function Stair() {
    return (
        <>
            {
                [...Array(6)].map((_, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={Animation}
                            initial="initial"
                            animate="animate"
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                                delay: reverseIndex(index) * 0.1,
                            }}
                            className='h-full w-full bg-dark/40 relative'
                        >
                        </motion.div>

                    )
                })


            }

        </ >
    )
}

export default Stair
