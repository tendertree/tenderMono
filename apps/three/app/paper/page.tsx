import React from 'react'
import Career,{ JobProps} from "@ui/shadcn/cards/Career"
import MotionWrapper from "@ui/custom/list/MotionWrapper"
const data: JobProps =
{
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    duration: "2020 - Present",
    description: "Lead development of cloud-based solutions, mentored junior developers, and implemented CI/CD pipelines.",
    skills: ["React", "Node.js", "AWS", "Docker"],
    type: "work",
    thumbnail: "/placeholder.svg?height=40&width=40",
		 tags: [
        { name: "react" },
        { name: "unreal" },
        { name: "html5" }
    ]
}

function page() {
    return (
        <div className='h-screen flex flex-col grid-cols-1'>
            <MotionWrapper>            
				<Career thumbnail={data.thumbnail} company={data.company} icon={data.icon} title={data.title} duration={data.duration} description={data.description} tags={data.tags} index={0} />
                </MotionWrapper >
                <Career thumbnail={data.thumbnail} company={data.company} type={data.type} title={data.title} duration={data.duration} description={data.description} tags={data.tags} index={1} />
        </div>

    )
}

export default page
