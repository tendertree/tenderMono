"use client"
import { motion, MotionStyle, useScroll, useTransform } from "framer-motion";
import Button from "../button/roundButton";

type HeroProps = {
    title: string;
    desc: string;
}

export default function Hero({ title, desc }: HeroProps): JSX.Element {
    const { scrollY } = useScroll();
    const imgTopPosition = useTransform(scrollY, [0, 400] as const, ["480px", "140px"]);
    const imgScale = useTransform(scrollY, [0, 200, 1300] as const, [1, 1.4, 1]);
    const textOpacity = useTransform(scrollY, [0, 200] as const, [1, 0]);
    const textScale = useTransform(scrollY, [0, 200] as const, [1, 0.8]);
    const textDisplay = useTransform(scrollY, [0, 400] as const, ["flex", "none"]);

    return (
        <section className="h-screen xl:h-[1600px] overflow-x-clip relative bg-white">
            <div className="container mx-auto h-full flex items-center xl:items-start">
                {/*text*/}
                <motion.div className="flex flex-col justify-center items-center gap-6 text-center  fixed left-0 right-9 mt-24 xl:mt-[160px]" style={{
                    //@ts-ignore
                    opacity: textOpacity,
                    scale: textScale,
                }}>
                    <h1 className="text-[60px] font-bold tracking-[-0.5px] leading-none max-w-[800px] xl:max-w-max">{title}</h1>
                    <p className="max-w-[680px] text-[20px] text-dark/80 font-light px-8 xl:px-0 mb-2">{desc}</p>
                    <Button text="Click me" />
                </motion.div>
                {/*image*/}
                <motion.div className="hidden xl:flex w-full max-w-[960px] mx-auto h-[520px] bg-no-repaet sticky left-0 right-0" style={{
                    backgroundImage: "url('/hero/hero.jpg')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    top: imgTopPosition as any,
                    scale: imgScale,
                } as MotionStyle}>image</motion.div>
            </div>
        </section >
    )
}
