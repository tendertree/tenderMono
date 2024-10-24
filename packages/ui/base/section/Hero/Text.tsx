import { Button, buttonVariants } from '@/shadcn/button'
import Link from 'next/link'
import React from 'react'

export default function TextHero() {
    return (
        <div className="h-screen bg-red-100 py-20 mx-auto text-center flex flex-col items-center ">
            <h1 className='text-4xl font-bold tracking-tight sm:text-6xl '> helo this is simple text section
                <span className='text-strong'> hello</span>

            </h1>
            <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
                description should be here
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                <Link
                    href='/products'
                    className={buttonVariants()}>
                    product button
                </Link>
                <Button variant='ghost'>
                    other info
                </Button>
            </div>
        </div>
    )
}


export function Text_2() {
    return (
        <div >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg-leading-[3.5rem] xl:leading-[4rem] text-dartT">
                title
            </h1>
            <p className='mt-6 text-sm md:text-base text-white text-opacity-60'>description some hero section </p>
            <div className='mt-8 flex items-center space-x-4'>
                <button className="md:px-12 md:py-2.5 px-6 py-1.5 font-semibold text-sm md:text-lg trnasition-all duration-200 rounded-lg bg-green-700 hover:bg-green-900">get Started</button>
                <button className="md:px-12 md:py-2.5 px-6 py-1.5 font-semibold text-sm md:text-lg trnasition-all duration-200 rounded-lg bg-green-700 hover:bg-green-900">Learn more</button>
            </div>
            <div className='flex items-center flex-wrap space-x-16 mt-8'>
                <div>
                    <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>280</p>
                    <p className='w-[1080px] h-[3px] bg-green-100 mt-2 mb-2 rounded-lg'></p>
                    <p className="md:text-lg text-sm text-white text-opacity"> feature</p>
                </div>
                <div>
                    <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>280</p>
                    <p className='w-[1080px] h-[3px] bg-green-100 mt-2 mb-2 rounded-lg'></p>
                    <p className="md:text-lg text-sm text-white text-opacity"> feature</p>
                </div>
                <div>
                    <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>280</p>
                    <p className='w-[1080px] h-[3px] bg-green-100 mt-2 mb-2 rounded-lg'></p>
                    <p className="md:text-lg text-sm text-white text-opacity"> feature</p>
                </div>
            </div>
        </div>
    )
}
