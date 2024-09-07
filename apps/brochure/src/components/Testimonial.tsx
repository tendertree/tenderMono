import { fadeInOnScroll } from '@src/utlis/motionVariatns';
import { motion } from 'framer-motion';
import React from 'react';

type TestimonialItem = {
    name: string;
    message: string;
}

const testimonial: TestimonialItem[] = [
    {
        name: "kim", message: "good"
    },
    {
        name: "yoon", message: "hello"
    }
];

export default function Testimonial() {
    return (
        <section className="w-full xl:py-24 mb-24 xl:mb-32 flex justify-center items-center">
            <div className='overflow-hidden'>
                <motion.div
                    variants={fadeInOnScroll(0.2, 0.4)}
                    initial="hidden"
                    whileInView="visible"
                >
                    <h2 className='h2 mb-4 text-center'>What people Are Saying</h2>
                    <p className='lead text-center mb-24'>Heri is the client say about our service</p>
                </motion.div>
                <motion.div variants={fadeInOnScroll(0.2, 0.6)} className='flex' initial="hidden" whileInView="visible"  >
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex"
                    >
                        {testimonial.map((item, index) => (
                            <div key={index} className="relative w-[468px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14">
                                <p className='text-accent mb-3 text-3xl'>icon </p>
                                <p className='mb-4 text-lg text-white/80'>{item.message}</p>
                                <p className="text-xl">{item.name}</p>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex"
                    >
                        {testimonial.map((item, index) => (
                            <div key={index} className="relative w-[468px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14">
                                <p className='text-accent mb-3 text-3xl'>icon </p>
                                <p className='mb-4 text-lg text-white/80'>{item.message}</p>
                                <p className="text-xl">{item.name}</p>
                            </div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section >

    )
}
