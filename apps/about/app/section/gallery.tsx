"use client"
import Gallery from '@src/components/Gallery'
import ReactLenis, { Lenis } from '@studio-freight/react-lenis'
import { useMotionValue, useSpring } from 'framer-motion'
import React, { Suspense, useEffect, useState } from 'react'
import BgWithImageBox from "@ui/custom/gallery/BgWithPlane"
/*
 * simple sticky gallery + image plane follow mouse
 * suspense prevent scrolling to the next section
 */
const data = [
    {
        title: "sky",
        handle: "play game"
    },
    {
        title: "sky",
        handle: "food deliver"
    }
]

export default function page() {

    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1
    }

    const mousePosition = {
        x: useSpring(0, spring),
        y: useSpring(0, spring)
    }


    useEffect(() => {

    }, [])
    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const targetX = clientX - (window.innerWidth / 2 * 0.25);
        const targetY = clientY - (window.innerWidth / 2 * 0.30);
        mousePosition.x.set(targetX);
        mousePosition.y.set(targetY);
    }
    return (
        <ReactLenis root>
            <main className='h-[120vh] bg-red-100' onMouseMove={mouseMove}>page
                {data && data.map((d, idx) => {
                    return (
                        <div>
                            <p>{d.title} is {d.handle}</p>
                            <BgWithImageBox title={d.title} key={idx} mousePosition={mousePosition} />
                        </div>
                    )
                }
                )
                }

            </main>
        </ReactLenis>
    )
}

