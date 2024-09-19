import React from 'react'
import { motion } from 'framer-motion'
import { Pin } from 'lucide-react'

export function ScheduleItem({ title, date, location }
    : { title: string, date: string, location: string }) {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{
                y: 0, opacity: 1
            }}
			  viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9" >
            <div>
                <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
                <p className="text-sm uppercase text-zinc-400">{date}</p>

            </div>
            <div className='flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500'>
                <p>{location}</p>
                <Pin />
            </div>
        </motion.div >

    )

}

export default function ScheduleList() {
    return (
        <section
            id="schedule"
            className='mx-auto max-w-5xl px-4 py-48 '
        >Schedule
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-20 text-4xl font-black uppercase text-zinc-50"
                viewport={{ once: true }}
            >
                Lanch Schedule
            </motion.h1>
            <ScheduleItem title="hi" date="arst" location="arst" />
<ScheduleItem title="hi" date="arst" location="arst" />
			<ScheduleItem title="hi" date="arst" location="arst" />
        </section>
    )
}

