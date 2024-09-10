"use client"
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { ArrowDownRight } from 'lucide-react'
const services = [
    {
        num: "01",
        title: "design",
        desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.",
        href: ""
    },
    {
        num: "02",
        title: "front",
        desc: "laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.",
        href: ""
    }, {
        num: "03",
        title: "leisure",
        desc: "ectrstarst",
        href: ""
    }, {
        num: "04",
        title: "eating",
        desc: "ectrstr",
        href: ""
    },
]


export default function ServicesSection() {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className='container mx-auto'>
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
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-red-100 transition-all duration-500'>{service.num}</div>
                                    <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-mid group:hover:bg-strong transition-all duration-500 flex justify-center items-center group-hover:-rotate-45'>
                                        <ArrowDownRight className='text-light text-3xl' />
                                    </Link>
                                </div>
                                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-light transition-all duraton-500'>{service.title}</h2>
                                <p className="text-white/60  ">{service.desc}</p>
                                <div className="border-b border-white/20 w-full">
                                    arst
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
