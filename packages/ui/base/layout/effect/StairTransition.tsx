"use client"
import React from 'react'
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from 'framer-motion'

const animation = {
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
const reverseindex = (index: number) => {
    const totalsteps = 6;
    return totalsteps - index - 1;
}

export function Stair() {
    return (
        <>
            {
                [...Array(6)].map((_, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={animation}
                            initial="initial"
                            animate="animate"
                            transition={{
                                duration: 0.2,
                                ease: "easeinout",
                                delay: reverseindex(index) * 0.1,
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



export default function StairTransition() {
    const pathname = usePathname();

    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
                        <Stair />
                    </div>
                    <motion.div className="h-screen w-screen fixed bg-dark top-0 pointer-events-none" initial={{ opacity: 1 }} animate={{
                        opacity: 0, transition: {
                            delay: 1, duration: 0.2, ease: 'easeInOut'
                        }
                    }} />
                </div>
            </AnimatePresence>
        </>
    )
}
