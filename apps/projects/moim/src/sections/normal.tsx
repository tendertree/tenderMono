import { Section } from "@ui/shadcn/comp/section/section"
export const Normal = ({ data }: { data: Section }): JSX.Element => {
    return (
        <div className="h-screen bg-red-100">
            This is basic section for {data.title}
        </div>
    )
}
