'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@ui/base/shadcn/card"
import { Badge } from "@ui/base/shadcn/badge"
import { Sheet, SheetContent, SheetTitle, SheetHeader, SheetDescription } from "@ui/base/shadcn/sheet"
import { Dialog, DialogTitle, DialogHeader, DialogContent, DialogDescription } from "@ui/base/shadcn/dialog"
import { ScrollArea } from "@ui/base/shadcn/scroll-area"
import Image from 'next/image'
import React from 'react'

// Define the structure of a work item
interface WorkItem {
    id: number
    title: string
    company: string
    period: string
    thumbnail: string
    skills: string[]
    description: string
    detailedDescription: string
    images: string[]
}

// Sample work history data
const workHistory: WorkItem[] = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "Tech Innovators Inc.",
        period: "2020 - Present",
        thumbnail: "https://picsum.photos/seed/picsum/100/100",
        skills: ["React", "TypeScript", "Next.js"],
        description: "Led the frontend development of a cutting-edge SaaS platform.",
        detailedDescription: "As the Senior Frontend Developer at Tech Innovators Inc., I spearheaded the development of our flagship SaaS platform. I implemented advanced React patterns, optimized performance, and mentored junior developers.",
        images: ["https://picsum.photos/seed/picsum/300/400", "https://picsum.photos/seed/picsum/300/400"]
    },
    {
        id: 2,
        title: "Full Stack Developer",
        company: "WebSolutions Co.",
        period: "2018 - 2020",
        thumbnail: "https://picsum.photos/seed/picsum/100/100",
        skills: ["JavaScript", "Node.js", "MongoDB"],
        description: "Developed and maintained multiple client websites and web applications.",
        detailedDescription: "At WebSolutions Co., I worked on a variety of projects, from e-commerce platforms to content management systems. I utilized the MERN stack to deliver scalable and efficient web solutions.",
        images: ["https://picsum.photos/seed/picsum/300/400", "https://picsum.photos/seed/picsum/300/400"]
    },
    {
        id: 3,
        title: "Full Stack Developer",
        company: "WebSolutions Co.",
        period: "2018 - 2020",
        thumbnail: "https://picsum.photos/seed/picsum/100/100",
        skills: ["JavaScript", "Node.js", "MongoDB"],
        description: "Developed and maintained multiple client websites and web applications.",
        detailedDescription: "At WebSolutions Co., I worked on a variety of projects, from e-commerce platforms to content management systems. I utilized the MERN stack to deliver scalable and efficient web solutions.",
        images: ["https://picsum.photos/seed/picsum/300/400", "https://picsum.photos/seed/picsum/300/400"]
    },
]

interface CompanyDetailProps {
    work: WorkItem
    onClose: () => void
}

export function CompanyDetailSheet({ work, onClose }: CompanyDetailProps) {
    return (
        <Sheet open={true} onOpenChange={onClose}>
            <SheetContent className="w-[90%] sm:max-w-[540px]">
                <SheetHeader>
                    <SheetTitle>{work.title}</SheetTitle>
                    <SheetDescription>{work.company} | {work.period}</SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                    <p className="mb-4">{work.detailedDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {work.skills.map((skill, index) => (
                            <Badge key={index} variant="outline">{skill}</Badge>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {work.images.map((image, index) => (
                            <Image key={index} src={image} alt={`${work.title} image ${index + 1}`} width={400} height={300} className="rounded-lg" />
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
export function CompanyDetailDialog({ work, onClose }: CompanyDetailProps) {
    if (!work) return null
    return (
        <Dialog open={!!work} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] bg-white-100">
                <DialogHeader>
                    <div className="flex items-center space-x-4">
                        <Image
                            src={work.thumbnail}
                            alt={work.title}
                            width={64}
                            height={64}
                            className="object-cover w-16 h-16"
                        />
                        <div>
                            <DialogTitle>{work.title}</DialogTitle>
                            <DialogDescription>{work.company} | {work.period}</DialogDescription>
                        </div>
                    </div>
                </DialogHeader>
                <ScrollArea className="mt-6 max-h-[calc(90vh-200px)]">
                    <p className="mb-4">{work.detailedDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {work.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {work.images.map((image, index) => (
                            <Image key={index} src={image} alt={`${work.title} image ${index + 1}`} width={400} height={300} className="rounded-lg" />
                        ))}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}



export default function WorkHistory() {
    const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">Work History</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workHistory.map((work) => (
                    <Card key={work.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedWork(work)}>
                        <CardHeader>
                            <Image src={work.thumbnail} alt={work.title} width={100} height={100} className="rounded-full mx-auto" />
                            <CardTitle className="text-center">{work.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                                <p className="text-center text-gray-600 mb-2">{work.company}</p>
                                <p className="text-center text-sm text-gray-500 mb-4">{work.period}</p>
                                <p className="text-sm mb-4">{work.description}</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {work.skills.map((skill, index) => (
                                        <Badge key={index} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {selectedWork && (
                <CompanyDetailDialog work={selectedWork} onClose={() => setSelectedWork(null)} />
            )}
        </div>
    )
}



