import React from 'react'
import { ScrollArea } from '../base/scroll-area'
import { ReactNode } from "react"

export interface IExperienceItem {
    name: string
    duration: string
    desc: string
}

export interface IExperience {
    icon: ReactNode
    title: string
    description: string
    items: IExperienceItem[]
}

export default function WorkExperienceList(WorkExperience: IExperience) {
    return (
        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
            <h1 className='text-4xl font-bold '>  {WorkExperience.title}</h1>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                i lke berb home and anythings  {WorkExperience.description}
            </p>
            <ScrollArea className="h-[480px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {WorkExperience.items && WorkExperience.items.length > 0 && WorkExperience.items.map((item, index) => (
                        <li key={index} className='bg-darkWeak h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='text-strong'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.name}</h3>


                            <div className='flex items-center gap-3'>
                                <span className='w-2 h-2 rounded-full bg-red-100'></span>
                                <p className="text-white/60">{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </ScrollArea>
        </div>
    )
}

