/*
 *  it recevie stat data and number, and show count Up 
*/
"use client"
import React from 'react'
import CountUp from "react-countup"
const stats = [
    {
        num: 12,
        text: "experience"
    },
    {
        num: 20,
        text: "project completen"
    },
    {
        num: 500,
        text: "code commits"
    },
    {
        num: 12,
        text: "masterd tech"
    }


]
export default function Stats() {
    return (
        <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
            <div className="container mx-auto">
                <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                    {stats.map((item, index) => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center xl: justify-start" key={index}>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                    {...({} as any)}>
                                </CountUp>
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                                    {item.text}
                                </p>
                            </div>

                        );
                    })}
                </div>
            </div>
        </section >
    );
}
