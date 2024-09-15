"use client"
import { motion } from 'framer-motion';
import { Award, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/shadcn/base/tabs-forPortflio'
import WorkExperienceList, { IExperience } from "@ui/shadcn/lists/WorkExperienceList"
import React from 'react'
import { FaReact, FaCss3, FaHtml5, FaJs, } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"
import Product from "@ui/shadcn/cards/Product"
import Feature from "@ui/custom/cards/Feature"
import StarRating from "@ui/custom/icons/StarRating";
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
const EducationExperience: IExperience = {
    icon: <GraduationCap />,
    title: "school",
    description: "my exp",
    items: [
        {
            name: "home",
            duration: "2040-2323",
            desc: "Study in the home"
        },
        {
            name: "team sola",
            duration: "full stack",
            desc: "follow your hearct"
        },


    ]
}
const SkillExperience: IExperience = {
    icon: <BriefcaseBusiness />,
    title: "my exp",
    description: "my exp",
    items: [
    ]
}

const PossibleList: IExperience = {
    icon: <BriefcaseBusiness />,
    title: "Currently I Can",
    description: "my exp",
    items: [
    ]
}

const SkillList = [
    {
        icon: <FaReact />,
        name: "React"
    },
    {
        icon: <FaHtml5 />,
        name: "Html5"
    },
    {
        icon: <FaCss3 />,
        name: "CSS"
    },
    {
        icon: <FaJs />,
        name: "Javascripts"
    },
    {
        icon: <SiNextdotjs />,
        name: "Nextjs"
    },
    {
        icon: <SiTailwindcss />,
        name: "Tailwind"
    },

]


function page() {
    return (
        <>
			<Profile/>
            <Product />
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
                                <Feature icon={FaHtml5} title={"home"} description={"school is bad"} />
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
        </>


    )
}

export default page
