"use client"
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation"


export default function PageTransition({ children }: any) {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
                    }}
                    className='h-screen w-screen fixed bg-black top-0 pointer-events-none'
                />
                {children}
            </div>
        </AnimatePresence>
    )
}
