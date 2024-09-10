/* eslint-disable no-unused-vars */
"use client"
import { motion } from 'framer-motion';
import { Award, BriefcaseBusiness, GraduationCap, LucideIcon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/shadcn/base/tabs'
import React from 'react'
interface IExperience {
    icon: React.ReactElement;
    title: string;
    description: string;
    items: (IExperienceItem | ISkillItem)[];
}

interface IExperienceItem {
    name: string;
    description: string;
}

interface ISkillItem {
    icon: React.ReactElement;
    description: string;
}

const about = {
    title: "introduce",
    description: "hehe",
    info: [

        {
            field: "name",
            value: "kim"
        }, {
            field: "phone",
            value: "01087270868`"
        }, {
            field: "experience",
            value: "hi"
        },
        {
            field: "nation",
            value: "south korae"
        },
        {
            field: "email",
            value: "tendertree@gmail.com"
        },
        {
            field: "freelancer",
            value: "avaliable"
        },
    ]

}


const WorkExperience: IExperience = {
    icon: <Award />,
    title: "my exp",
    description: "my exp",
    items: [
        {
            name: "team sola",
            description: "full stack"
        },
        {
            name: "team sola",
            description: "full stack"
        },
    ]
}
const EducationExperience: IExperience = {
    icon: <GraduationCap />,
    title: "school",
    description: "my exp",
    items: [
        {
            name: "kim University",
            description: "full stack"
        },
        {
            name: "team sola",
            description: "full stack"
        },
    ]
}
const SkillExperience: IExperience = {
    icon: <BriefcaseBusiness />,
    title: "my exp",
    description: "my exp",
    items: [
        {
            name: "team sola",
            description: "full stack"
        },
        {
            name: "team sola",
            description: "full stack"
        },
    ]
}
function page() {
    const ab = about;
    return (

        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2.4,
                        duration: 0.4,
                        ease: 'easeIn'
                    },
                }}
                className='min-h-[80v] flex items-center justify-center py-12 xl:py-0'>
                rstarst
                <div className='container mx-auto'>
                    <Tabs {...({} as any)} defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                        <TabsList {...({} as any)} className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0-gap-6">
                            <TabsTrigger value="experience" {...({} as any)}>Experience</TabsTrigger>
                            <TabsTrigger value="education" {...({} as any)}>Education</TabsTrigger>
                            <TabsTrigger value="skills" {...({} as any)}>Skills</TabsTrigger>
                            <TabsTrigger value="about" {...({} as any)}>about me</TabsTrigger>                        </TabsList>
                        <div className='min-h-[70vh] w-full'>
                            <TabsContent value="experience" className="w-full" {...({} as any)}>
                                content
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </motion.div >



        </div >
    )
}

export default page
