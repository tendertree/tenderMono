import React, { useEffect, useState } from 'react'

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@ui/base/shadcn/dialog"
import { ScrollArea } from "@ui/base/shadcn/scroll-area"
import { Badge } from "@ui/base/shadcn/badge"
import { motion } from 'framer-motion';
interface ArtworkProp {
    id: string
    title: string
    artist: string
    date: string
    description: string
    image: string
    tags: string[]
    likes: number
    comments: number
}
interface ArtworkDetailProps {
    artwork: ArtworkProp
    onClose: () => void
}

export function ArtworkDetailDialog({ artwork, onClose }: ArtworkDetailProps) {
    if (!artwork) return null

    return (
        <Dialog open={!!artwork} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[90vw] max-h-[90vh] p-0 bg-background">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left side - Image */}
                    <div className="w-full md:w-2/3 h-[50vh] md:h-[90vh] relative">
                        <Image
                            src={artwork.image}
                            alt={artwork.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                        />
                    </div>

                    {/* Right side - Description */}
                    <div className="w-full md:w-1/3 p-6 flex flex-col">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">{artwork.title}</DialogTitle>
                            <p className="text-muted-foreground">{artwork.artist} | {artwork.date}</p>
                        </DialogHeader>

                        <ScrollArea className="flex-grow mt-4 pr-4">
                            <p className="mb-4">{artwork.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {artwork.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </ScrollArea>

                        <div className="mt-4 flex items-center justify-between text-muted-foreground">
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                </svg>
                                <span>{artwork.likes} likes</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                <span>{artwork.comments} comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )

}


export function ArtWorkGallery({ artworks }: { artworks: ArtworkProp[] }) {
    const [selectedArtwork, setSelectedArtwork] = useState<ArtworkProp | null>(null)
    const [columns, setColumns] = useState(4)

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth < 640) setColumns(1)
            else if (window.innerWidth < 768) setColumns(2)
            else if (window.innerWidth < 1024) setColumns(3)
            else setColumns(4)
        }

        updateColumns()
        window.addEventListener('resize', updateColumns)
        return () => window.removeEventListener('resize', updateColumns)
    }, [])

    const columnedArtworks = Array.from({ length: columns }, (_, i) =>
        artworks.filter((_, index) => index % columns === i)
    )

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Artistic Gallery</h1>
            <div className="flex flex-wrap -mx-2">
                {columnedArtworks.map((column, columnIndex) => (
                    <div key={columnIndex} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
                        {column.map((artwork, index) => (
                            <motion.div
                                key={artwork.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="mb-4 cursor-pointer group"
                                onClick={() => setSelectedArtwork(artwork)}
                            >
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <Image
                                        src={artwork.image}
                                        alt={artwork.title}
                                        width={400}
                                        height={400}
                                        objectFit="cover"
                                        className="w-full transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                        <h2 className="text-white text-xl font-semibold mb-1">{artwork.title}</h2>
                                        <p className="text-white text-sm">{artwork.artist}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
            {selectedArtwork && (
                <ArtworkDetailDialog
                    artwork={selectedArtwork}
                    onClose={() => setSelectedArtwork(null)}
                />
            )
			}
    </div>
    )
}



export const ArtworkExample = {
    id: 'artwork-123',
    title: 'Starry Night',
    artist: 'Vincent van Gogh',
    date: '1889',
    description: 'A famous painting by Vincent van Gogh, depicting a swirling night sky over a small town.',
    image: 'https://picsum.photos/seed/picsum/200/300',
    tags: ['Impressionism', 'Post-Impressionism', 'Van Gogh', 'Masterpiece'],
    likes: 1532,
    comments: 248,
}

export const ArtworkGalleryExample: ArtworkProp[] = [
    {
        id: "1",
        title: "Dream in Colors",
        artist: "Alice Walker",
        date: "2023-01-15",
        description: "A vibrant abstract painting full of life and energy.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["abstract", "modern", "vibrant"],
        likes: 120,
        comments: 15,
    },
    {
        id: "2",
        title: "Silent Serenity",
        artist: "Bob Ross",
        date: "2022-12-10",
        description: "A peaceful landscape capturing the tranquility of nature.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["landscape", "nature", "serenity"],
        likes: 250,
        comments: 30,
    },
    {
        id: "3",
        title: "Urban Chaos",
        artist: "Charlie Smith",
        date: "2021-11-05",
        description: "A chaotic portrayal of life in a bustling city.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["urban", "chaos", "city"],
        likes: 180,
        comments: 22,
    },
    {
        id: "4",
        title: "Mystic Forest",
        artist: "Dana White",
        date: "2020-09-30",
        description: "A dark and mysterious forest full of secrets.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["forest", "mystery", "nature"],
        likes: 300,
        comments: 40,
    },
    {
        id: "5",
        title: "Ocean's Whisper",
        artist: "Eleanor Rigby",
        date: "2019-08-25",
        description: "A serene seascape that captures the gentle whispers of the ocean.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["ocean", "seascape", "serene"],
        likes: 210,
        comments: 28,
    },
    {
        id: "6",
        title: "Golden Hour",
        artist: "Frank Ocean",
        date: "2018-07-12",
        description: "A beautiful portrayal of the golden hour in the countryside.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["sunset", "golden hour", "countryside"],
        likes: 275,
        comments: 35,
    },
    {
        id: "7",
        title: "Eternal Flame",
        artist: "Grace Lee",
        date: "2017-06-18",
        description: "An abstract representation of passion and desire.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["abstract", "passion", "flame"],
        likes: 145,
        comments: 18,
    },
    {
        id: "8",
        title: "Winter's Embrace",
        artist: "Henry Frost",
        date: "2016-05-05",
        description: "A cold and calming winter landscape.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["winter", "landscape", "cold"],
        likes: 198,
        comments: 25,
    },
    {
        id: "9",
        title: "Radiant Blossoms",
        artist: "Ivy Green",
        date: "2015-04-10",
        description: "A colorful depiction of blooming flowers in spring.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["flowers", "spring", "colorful"],
        likes: 320,
        comments: 42,
    },
    {
        id: "10",
        title: "City Lights",
        artist: "Jake Stone",
        date: "2014-03-22",
        description: "A vibrant night scene of the city lights.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["city", "night", "lights"],
        likes: 230,
        comments: 27,
    },
    {
        id: "11",
        title: "Echoes of the Past",
        artist: "Kara Davis",
        date: "2013-02-14",
        description: "A nostalgic piece reflecting on memories of the past.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["nostalgia", "memories", "past"],
        likes: 165,
        comments: 20,
    },
    {
        id: "12",
        title: "Desert Mirage",
        artist: "Liam Sands",
        date: "2012-01-08",
        description: "A surreal vision of a mirage in the desert.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["desert", "mirage", "surreal"],
        likes: 255,
        comments: 33,
    },
    {
        id: "13",
        title: "Majestic Peaks",
        artist: "Mia Snow",
        date: "2011-12-02",
        description: "A breathtaking view of mountain peaks during sunrise.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["mountains", "sunrise", "majestic"],
        likes: 290,
        comments: 38,
    },
    {
        id: "14",
        title: "Autumn's Glow",
        artist: "Noah Leaf",
        date: "2010-11-19",
        description: "A warm and inviting autumn scene.",
        image: "https://picsum.photos/seed/picsum/200/300",
        tags: ["autumn", "warm", "glow"],
        likes: 275,
        comments: 31,
    },
]
