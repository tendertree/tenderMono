/**
 * @module background image gallery with tiny image box follow mouse
 */

import React from 'react'
import Image from 'next/image'
import { motion, MotionValue, useSpring } from 'framer-motion';

interface BgWithImageBoxProp {
    title: string;
    mousePosition: {
        x: MotionValue<number>;
        y: MotionValue<number>;
    };
}



export default function BgWithImageBox({ title, mousePosition }: BgWithImageBoxProp) {
    const { x, y } = mousePosition;

    return (
        <div className=' object-fill bg-green-100' >
            <div className='w-full h-full relative'>
                <Image src={`/gallery/${title}.png`}
                    width={1100} // specify the width
                    height={300} // specify the height
                    alt={'image'}
                    objectFit="cover" />
                <p>{`/gallery/${title}.png`} is ...?</p>
            </div>
            <motion.div className="w-[30vw] h-[25vw]  bg-red-100 border-mid fixed top-0" style={{ x, y }}>
                <Image src={`/feature/img-1.svg`}
                    layout='fill'
                    alt={'image'}
                    objectFit="cover" />
            </motion.div>
        </div>
    )
}
