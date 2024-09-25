/*
 * simple picture gallery
 */
import React from 'react'
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "../../shadcn/dialog"
import { cn } from "../../lib/utils"
import RealitySemiCircle from "@feature/three/gallery/RealitySemiCircle";
interface PicProp {
    src: string
    alt: string
    width: number
    height: number
    url: string
}

interface PicGalleryProp {
    images: PicProp[];
}

export default function PicGallery({ images }: PicGalleryProp) {
    // const [selectedImage, setSelectedImage] = useState<string | null>(null)
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Picture Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <div className={cn(
                                "relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer",
                                index % 3 === 0 ? "row-span-2" : ""
                            )}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        View
                                    </span>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl h-[600px]">
                            <div className='overflow-hidden'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    )
}

// simple minial grid gallery
//   const images = [
//     { src: "https://picsum.photos/seed/picsum/200/300", alt: "Gallery image 1", width: 200, height: 200  ,url:"/arst"},
// ]

export  function PicGirdGallery({images}: PicGalleryProp) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-muted-foreground">Minimalist Gallery</h2>
			<div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {images.map((image, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <div className="relative aspect-square overflow-hidden rounded-md cursor-pointer transition-opacity duration-300 hover:opacity-80">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl h-[600px]">
                           <div className='overflow-hidden'>
                  <RealitySemiCircle/>              
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
				</div>
        </div>

    )
}
