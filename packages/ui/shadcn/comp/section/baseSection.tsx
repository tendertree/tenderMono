import { HTMLAttributes, useRef } from "react";
import { Section } from "./section"
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
        target: container,
        offset:
            isFirst ? ['start start', 'end center']
                : isLast ? ['start center', 'end end']
                    : ['start center', 'end center'],

    })

    return (
        <section {...props} ref={container}>
            <div className="w-full flex justify-center pt-20">
                <h1 className="text-6xl font-semibold"> This is title</h1>
            </div>
        </section>
    )
}


