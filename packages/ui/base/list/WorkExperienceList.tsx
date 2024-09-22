import React from 'react'
import { ScrollArea } from '../base/scroll-area'
import { ReactNode } from "react"
import { Tabs, TabsList, TabsTrigger } from '../base/tabs-forPortflio'
import { TabsContent } from '../base/tabs'

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

const WorkExperience: IExperience = {
    icon: <Award />,
    title: "my exp",
    description: "my exp",
    items: [
        {
            name: "home",
            duration: "2040-2323",
            desc: "my home and play game"
        },
        {
            name: "kong",
            duration: "2040-2323",
            desc: "my home and play game"
        },

    ]
}

export  function WorkExperienceList(WorkExperience: IExperience) {
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





export default function Experience() {
  return (
    <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2.4,
                        duration: 0.4,
                        ease: 'easeIn'
                    },
                }} className='min-h-[80v] flex items-center justify-center py-12 xl:py-0'>
                <div className='container mx-auto'>
                    <Tabs {...({} as any)} defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                        <TabsList {...({} as any)} className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0-gap-6">
                            <TabsTrigger value="experience" {...({} as any)}>Experience</TabsTrigger>
                            <TabsTrigger value="education" {...({} as any)}>Education</TabsTrigger>
                            <TabsTrigger value="skills" {...({} as any)}>Skills</TabsTrigger>
                            <TabsTrigger value="about" {...({} as any)}>about me</TabsTrigger>                        </TabsList>
                        <div className='min-h-[70vh] w-full'>
                            <TabsContent value="experience" className="w-full" {...({} as any)}>
                                <WorkExperienceList icon={"rst"} title={"kim"} description={"rstarst"} items={WorkExperience.items} />

                            </TabsContent>
                            <TabsContent value="education" className="w-full" {...({} as any)}>
                                content...!
							//luicd or skill icon should be here
                            </TabsContent>
                            <TabsContent value="skills" className="w-full" {...({} as any)}>
                                content
                            </TabsContent>
                            <TabsContent value="about" className="w-full" {...({} as any)}>
                                content
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </motion.div>

  )
}
