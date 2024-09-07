/*
* Icon Desc with Button
*/
"use client;"
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { fadeInOnScroll, fadeInUpSpring } from '@src/utlis/motionVariatns';
const icons = [
    {
        src: "/feature/img-1.svg",
    },
    {
        src: "/feature/img-2.svg",
    },
    {
        src: "/feature/img-3.svg",
    }
]
const iconAnimation = {
    initial: {
        opacity: 0,
        y: 60,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    })
}


function Intergration() {
    return (
        <section className='py-24 xl:py-32 min-h-[720px] xl:mt-32'>
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 xl:gap-16">
                <motion.div variants={fadeInOnScroll(0.2, 0.6)} className='text-center' initial="hidden" whileInView="visible">
                    <h2 className="h2">Integrations</h2>
                    <p className="lead">
                        Integrate wit top apps to create a seamless, connected experience
                    </p>
                </motion.div>
                <div className='flex flex-wrap gap-8 w-full max-w-[1024px] mx-auto place-content-center mb-8'>
                    {icons.map((icon, index) => {
                        return <motion.div
                            className='relative w-[80px] h-[80px] key={index}'
                            key={index}
                            custom={index}
                            variants={iconAnimation}
                            whileInView="animate"
                            initial="initial"
                        >
                            <Image src={icon.src} alt={'icon'} fill></Image>
                        </motion.div>
                    })}
                </div>
                <motion.div
                    initial={{ y: 60, opacity: 0, scale: 0.8 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                        dealy: 0.6, duration: 0.4, sase: [0.6, -0.05, 0.01, 0.99],
                        type: "spring", stiffness: 100,
                    }}
                >
                    <Button text="Click me" />
                </motion.div>
            </div>
        </section >
    )
}

export default Intergration
