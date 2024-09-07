import React from 'react'
import { motion } from 'framer-motion'
import Button from "../button/roundButton";

function Banner() {
    return (
        <section className='xl:mb-32 w-full'
        >
            <div className="py-24 w-full xl:max-w-[1140px] mx-auto min-h-[300px]
				bg-gradient-to-r from-dark via-light to-dark h-full flex items-center xl:rounded-2xl">
                <div className='flex flex-col xl:flex-row items-center justify-between w-full xl:px-24'>
                    <div>
                        <div className='text-center mb-12 xl:mb-0 xl:text-left'>
                            <h2 className="text-[40px] leading-tight font-bold mb-2 text-sky-50">Start your 30-day free trial</h2>
                            <p className='lead max-w-[400px] xl:max-w-[560px] mx-auto xl:mx-0'>Experienc the full power of our platform with a 30-dya free trial
                                No Credit Card required</p>
                        </div>
                    </div>



                    <Button text="Get Started" />


                </div>

            </div>


        </section>
    )
}

export default Banner
