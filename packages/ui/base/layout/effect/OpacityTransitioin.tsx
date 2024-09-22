import { motion } from 'framer-motion'
import React from 'react'

export const OpacityTransitioin = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
        >
            {children}
        </motion.div >
    )
}
