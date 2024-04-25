import { Section } from "@ui/shadcn/comp/section/section"

export const Intro = ({ data }: { data: Section }): JSX.Element => {
    return (
        <main className="relative">
            <section className="h-screen bg-white">
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                    <h1 className="text-6xl font-semibold"> {data.title}</h1>
                    <p className="text-neutral-700">Starting at $699</p>
                    <div className="relative w-[90%] aspect-video overflow-hidden">
                        This page show the some image
                        {data.title}
                    </div>
                    <button className="bg-neutral-800 hover:bg-neutral-600 px-6 py-2 rounded-md text-white font-semibold transition-colors duration-200">
                        Order now
                    </button>
                </div>
            </section>
        </main>
    )
}

