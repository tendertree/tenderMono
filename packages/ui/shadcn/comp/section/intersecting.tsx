import { HTMLAttributes } from "react";
import { Section } from "./section"
interface SectionProps extends HTMLAttributes<HTMLElement> {
    sectionData: Section;
    isFirst?: boolean;
    isLast?: boolean;
}
export default function  Intersecting(
    { sectionData: data,isFirst, isLast,...props }: SectionProps): JSX.Element {
    return (
        <div> This is {data.title}</div>
    )
}
