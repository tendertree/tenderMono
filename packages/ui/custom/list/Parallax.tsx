/** it use framer motion to control animation, using scrolly, and scrollYProgress to adjust centerImage property */
"use client"
import React, { useRef } from 'react'
import { motion, MotionValue, useMotionTemplate, useScroll, useTransform } from "framer-motion"




/**
 * this class show parallax imags
 */
export default function ScrollPage() {
    return (
        <div className="relative w-full" style={{ height: `calc(${SECTION_HEIGHT}px +100vh)` }}>
            <CenterImage />
            <ParallaxImages />
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-zinc-50/0 to-zinc-50"></div>
            <div className='h-[3500px]' />
        </div >
    )
}
const SECTION_HEIGHT = 1500;

export function ParallaxImg({
    className, alt, src, start, end
}: {
    className?: string;
    alt?: string;
    src?: string;
    start: number;
    end: number;
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
		target:ref,
		offset: [`${start}px end`, `end ${end *-1}px`],
	});
	const opacity=useTransform(scrollYProgress,[0.75,1],[1,0]);
	const y=useTransform(scrollYProgress,[0,1],[start,end]);
	const scale=useTransform(scrollYProgress,[0.75,1],[1,0.85]);
	const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
   
    return (
        <motion.img src={src} alt={alt} className={className} />
    )

}

export function ParallaxImages() {
    return (
        <div className='relative  z-10  mx-auto   max-w-5xl px-4 pt-[200px]'>
			
            <ParallaxImg className="w-1/3" src="https://picsum.photos/seed/picsum/200/400" alt="image1"
                start={-200} end={400} />
            <ParallaxImg className="mx-auto w-2/3" src="https://picsum.photos/seed/picsum/200/400" alt="image1"
                start={200} end={250} />
            <ParallaxImg className="w-1/3" src="https://picsum.photos/seed/picsum/200/400" alt="image1"
                start={-200} end={400} />
        </div>)
}

export function CenterImage() {
    const { scrollY, scrollYProgress } = useScroll();
    const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
    const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);
    const clipPath =
        useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%,${clip2}% ${clip2}%,${clip1}% ${clip2}%)`;
    const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);
    const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"]);
    return (

        <motion.div className='sticky top-0 h-screen w-full' style={{
            opacity,
            backgroundSize,
            clipPath,
            backgroundImage: "url(https://picsum.photos/seed/picsum/200/1600)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} />


    )
}


