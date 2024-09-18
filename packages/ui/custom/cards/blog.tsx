import React from 'react'
import Image from "next/image"

interface BlogProps {
    tag: string;
    day: string;
    title: string;
    description: string;
    image: string;
}
export default function Blog({ tag, day, title, description, image }: BlogProps) {
    return (
        <div className="md:w-96 w-80 bg-white p-6 border rounded-custom-medium shadow-custom hover:shadow-custom-lg hover:cursor-pointer">
            <div>
                <div className='relative w-[334px] h-[200px] overflow-hidden'>
                    <Image
                        src="https://picsum.photos/400"
                        alt="blog image"
                        width={334}
                        height={200}
                        objectFit="cover"
                        className="rounded-sm"
                    />
                </div>
                <p className="capitalize text-black py-1 px-3 inline-block font-extrabold rounded bg-strong mt-6">
                    learning
                </p>
                <span className="block my-3 capitalize text-black text-sm">{day}</span>
                <a href="#" className="mb-3 block md:font-extrabold font-bold md:text-2xl text-xl hover:text-yellow">
                    <h1>{title} this is title</h1>
                </a>
                <p className="text-grey font-medium leading-6">
                    {description} and description
                </p>
                <div className="mt-6 flex items-center">
                    <div className="relative w-16 h-16">
                        <Image 
                            src="https://picsum.photos/400" 
                            alt="blogger-img" 
                            width={64}
                            height={65}
                            className="rounded-full"
                        />
                    </div>
                    <p className="ms-3 font-bold">Greg Hooper</p>
                </div>
            </div>
        </div>
    );
};

