"use client"
/**
 * @module simple opacity Transiton motion wrapper
 */
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
}

export default function MotionWrapper({ children }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{
                y: 0, opacity: 1
            }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mb-9 flex items-center justify-between px-3 pb-3" >

            {children}

        </motion.div>
    )
}
