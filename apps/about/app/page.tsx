import Photo from '@src/components/Photo'
import Social from '@src/components/Social'
import { Button } from '@ui/shadcn/base/button'
import { FileDown } from 'lucide-react'
import React from 'react'

function Home() {
    return (
        <section className='h-full'>
            <div className='container mx-auto h-full'>
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className='text-center xl:text-left order-2 xl:order-none '>
                        <span className='text-xl'>software</span>
                        <h1 className="h1">Hello<br />
                            <span>I'm your <span className='text-strong'>Energy</span></span>
                        </h1>
                        <p className='max-w-[500px] mb-9 text-white/80'>I like something to play game</p>

                        <div className="flex flex-col xl:flex-row items-center gap-8">

                            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 bg-dark">
                                <span>Download cv</span>
                                <FileDown className='text-xl' />
                            </Button>
                            <div className='mb-8 xl:mb-0'>
                                <Social
                                    containerStyle={"flex gap-6"}
                                    iconStyle={"w-9 h-9 border border-white rounded-full flex justify-center items-center text-accent text-base hover:bg-white hover:text-strong hover:transition-all duratoin-500"} />
                            </div>
                        </div>
                    </div>
                    <div className='order-1 xl:order-none mb-8 xl:mb-0'>
                        <Photo />
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Home
