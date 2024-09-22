/*
 *  left on image,  right desc (feature)
 */
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import Image from 'next/image';

type FeaturesData = {
    src: string
    title: string
    desc: string
    highlights: string[]
}

const featuresData: FeaturesData[] = [{
    src: "/feature/img-1.svg",
    title: "smart task",
    desc: "Organize yur work",
    highlights: [
        "plan betters",
        "study clrear",
        "power enhancer"
    ]
},
{
    src: "/feature/img-2.svg",
    title: "collaboration",
    desc: "work with other people",
    highlights: [
        "smile",
        "workness",
        "dureence"
    ]
},
{
    src: "/feature/img-3.svg",
    title: "collaboration",
    desc: "work with other people",
    highlights: [
        "smile",
        "workness",
        "dureence"
    ]
}

]

export default function Feature(): JSX.Element {
    const [index, setIndex] = useState(0);
    const [imgIndex, setImgIndex] = useState(0);
    useEffect(() => {
        setImgIndex(index);
        console.log("index is change");

    }, [index])
    return (
        <section className="text-white pt-32 relative">
            <div className="container mx-auto">
                <div className='flex gap-16'>
                    <motion.div key={featuresData[index]?.src}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.6, -0.05, 0.01, 0.99], delay: 0.2,
                        }} className="hidden xl:flex jusify-center flex-1 w-full h-[480px]
						sticky top-[calc(50%-240px)]">
                        <div className="relative w-full h-full">
                            <Image
                                src={featuresData[imgIndex]!.src}
                                fill
                                alt={featuresData[imgIndex]!.title}
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                    <div className="flex-1 flex flex-col gap-24">
                        {
                            featuresData.map((item: FeaturesData, itemIndex: number) => {
                                return (
                                    <motion.div
                                        onViewportEnter={() => setIndex(itemIndex)}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ amount: "all" }}
                                        key={itemIndex}
                                        className="w-full h-auto xl:h-[480px] flex items-center">
                                        <div className='w-[80vw] xl:w-auto mx-auto xl:mx-0'>
                                            <h2 className='h2 mb-4 text-strong'>{item.title}</h2>
                                            <p className='lead mb-8 text-dark/80'>{item.desc}</p>
                                            <div className="flex flex-col gap-5">
                                                {item.highlights.map((highlight, index: number) => {
                                                    return <div key={index} className="flex items-center gap-4">
                                                        <p className='text-neutral text-2xl'>{highlight}</p>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}
