import React from 'react'

interface Prop {
    message: string;
    name: string;
}
export const Testimonial = ({ message, name }: Prop) => {
    return (
        <div className="relative w-[468px] h-[300px] bg-white mr-12 rounded-2xl flex flex-col justify-center px-14">
            <p className='text-accent mb-3 text-3xl text-dark'>icon </p>
            <p className='mb-4 text-lg text-white/80'>{message}</p>
            <p className="text-xl">{name}</p>
        </div>
    )
}
