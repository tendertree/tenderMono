import React from 'react'

export default function ImageWithTitle() {
    return (
        <section>
            <div className="container mx-auto h-full flex items-center xl:items-start">
                {/*text*/}
                <div>
                    <h1 className="text-[60px] font-bold tracking-[-0.5px] leading-none max-w-[800px] xl:max-w-max">Boost yur Productivyt Instatntly</h1>
                </div>
                {/*image*/}
                <div className="hidden xl:flex w-full max-w-[960px] mx-auth h-[520px] bg-no-repaet sticky left-0 right-0" style={{
                    //main Hero image
                    backgroundImage: "url('/hero/img.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>image</div>
            </div>
        </section >
    )
}
