import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/*
 * it fill text list, when mouse hover text, image appear
 */


interface TextHoverImageProps {
    textlist: {
        name: string;
        handle: string;
    }[];
    mousePosition: {
        x: number;
        y: number;
    };
}


export default function TextHoverImage({ mousePosition, textlist }: TextHoverImageProps) {
    const [index, setIndex] = useState(0);
    const { x, y } = mousePosition;
    return (
        <div className="relative h-[120vh] clip-path-polygon-[0_0,_0_100%,_100%_100%,_100%_0]">
            <div className="absolute w-full h-full flex flex-col items-center justify-center z-10">
                {textlist.map(({ name }, i) => (
                    <p
                        onMouseOver={() => setIndex(i)}
                        key={`p${i}`}
                        className="text-[7vw] cursor-default uppercase m-0"
                    >
                        {name}
                    </p>
                ))}
            </div>
                <motion.div
                    className="fixed top-0 w-[25vw] h-[30vw] rounded-[1.5vw] overflow-hidden"
                    style={{ x, y }}
                >
                    <Image
                        src={`/images/${textlist[index]!.handle}/about.jpg`}
                        alt="image"
                        fill
                        className="object-cover w-full"
                    />
                </motion.div>
        </div>
    );
}

