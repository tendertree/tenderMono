 import { motion } from 'framer-motion'
import React from 'react'

export default function UpperShowTransition({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{
                y: 0, opacity: 1
            }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9" >
            {children}
        </motion.div >
    )
export default function UpperShowTransition({ children }: { children: React.ReactNode }) {}
