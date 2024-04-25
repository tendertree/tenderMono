import { basicSection as Section } from "@ui/shadcn/comp/section/section"

const sections: Section[] = [
    {
        positionId: 0,
        title: "Ai Pin",
    },
    {
        positionId: 1,
        title: "New Interactions",
    },
]

export default function Page(): JSX.Element {
    return (
        <main className="relative">
            <section className="h-screen bg-white">
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                    <h1 className="text-6xl font-semibold">This is title</h1>
                    <p className="text-neutral-700">Starting at $699</p>
                    <div className="relative w-[90%] aspect-video overflow-hidden">
                        This page show the some image

                    </div>
                    <button className="bg-neutral-800 hover:bg-neutral-600 px-6 py-2 rounded-md text-white font-semibold transition-colors duration-200">
                        Order now
                    </button>
                </div>
            </section>
            <section className="h-[150vh] bg-green-300">section 1 </section>
            <section className="h-[150vh] bg-orange-300">section 2 </section>
            <section className="h-[150vh] bg-blue-300">section 3</section>
        </main>


    )
}
