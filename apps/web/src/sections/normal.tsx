import { SectionDataType } from "@ui/shadcn/comp/section/type"
import { HTMLAttributes } from "react";
import { UseSectionStore } from "@ui/shadcn/comp/section/sectionStore"



interface SectionPropsType extends HTMLAttributes<HTMLDivElement> {
    data: SectionDataType;
    isFirst?: boolean;
    isLast?: boolean;
}


export const Normal = ({ data, isFirst = false, isLast = false, children, ...props }: SectionPropsType): JSX.Element => {

    const activeSection = UseSectionStore((state) => state.activeSection);
    const setActiveSection = UseSectionStore((state) => state.setActiveSection);


    return (
        <section {...props}>
            {children || (
                <div>
                    <h1>{data.title}</h1>
                </div>
            )}
        </section>
    )
}

