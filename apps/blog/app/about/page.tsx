import React from 'react'
import Career from "@ui/shadcn/cards/Career"
const data =
{
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    duration: "2020 - Present",
    description: "Lead development of cloud-based solutions, mentored junior developers, and implemented CI/CD pipelines.",
    skills: ["React", "Node.js", "AWS", "Docker"],
    icon: "server",
    thumbnail: "/placeholder.svg?height=40&width=40",
		tags:["react","unreal","html5"]
}

function page() {
    return (
        <div className='h-screen bg-red-100'>
			
            <Career thumbnail={data.thumbnail} company={data.company} icon={data.icon} title={data.title} duration={data.duration} description={data.description} tags={data.tags} index={0} />
            <Career thumbnail={data.thumbnail} company={data.company} icon={data.icon} title={data.title} duration={data.duration} description={data.description} tags={data.tags} index={1} />
        </div >
    )
}

export default page
