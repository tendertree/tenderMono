import { Section } from "@ui/shadcn/comp/section/section"

export const Last = ({ data }: { data: Section }): JSX.Element => {
    return (
        <div className="h-screen bg-blue-100">
            This is Last section for {data.title}
        </div>

    )
}
