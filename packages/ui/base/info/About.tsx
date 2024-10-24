export function AboutText() {
    return (
        <div className="pt-16 pb-16">
            <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 item-center gap-16">
                <div>
                    <div className="flex item-center space-x-4">
                        <div className="w-12 h-12 bg-rose--600 rounded-full flex items-center justify-center flex-col">
                            some icon
                        </div>
                        <h1 className="text-xl text-block font-semibold">
                            he
                        </h1>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading[3.5rem] xl:leading-[3.9rem] text-gray-800">title</h1>
                    <p className="mt-4 text-gray-600">description</p>
                    <button className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white"
                    >
                        <span>Learn More</span>
                    </button>
                </div>
                <div>
                    <div>
                        <h1 className="text-7xl lg:text-9xl font-bold text-black text-opacity-5">01</h1>
                        <div className="-mt-10">
                            <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold"> se</h1>
                            <p className="w-[90%] lg:w-[70%] text-base text-black font-bold text-opacity-60">description</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-7xl lg:text-9xl font-bold text-black text-opacity-5">02</h1>
                        <div className="-mt-10">
                            <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold"> se</h1>
                            <p className="w-[90%] lg:w-[70%] text-base text-black font-bold text-opacity-60">description</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
