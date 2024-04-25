import { HTMLAttributes, useRef } from "react";
import {  Section } from "./section"
import { useScroll } from "framer-motion";



interface SectionProps extends HTMLAttributes<HTMLElement> {
    section: Section;
    isFirst?: boolean;
    isLast?: boolean;
}

export default function BaseSection(
    { section, isFirst, isLast, ...props }: SectionProps): JSX.Element {
    const container = useRef(null)
    const scrollYProgress = useScroll({
        target:container,
		offset: 
		    isFirst?['start start','end center']
			:isLast?['start center','end end']
			:['start center','end center'],
		
    })
	useMotionValueEvent(scrollYProgress, "change", (value) => {
		if(value > 0 && value < 1){
               //현재 아이디를 current section으로 지정 
		}
	})
    return (
		<section {...props} ref={container}>
			<div className="w-full flex justify-center pt-20">
			<h1 className="text-6xl font-semibold"> This is title</h1>
			</div>
		</section>
    )
}


