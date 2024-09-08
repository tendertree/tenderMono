/*
 *  Basic footer with logo and Icon
 */
import React from 'react'
import Image from "next/image";
import Link from "next/link";
type IconType = {
    src: string;
    href: string;
}


const icons: IconType[] = [
    {
        src: "/feature/img-1.svg",
        href: "https://www.daum.net"
    },
    {
        src: "/feature/img-2.svg",
        href: "kakao"

    }
]

function Footer() {
    return (
        <footer className="bg-[#13112f] py-24">
            <div className='container mx-auto text-white-100'>
                <div className='flex flex-col xl:flex-row items-center gap-12 xl:jutify-between'>
                    <div className='flex-1 flex gap-8'>
                        {icons.map((icon, index) => {
                            //@ts-ignore
                            return <Link href={icon.href} key={index}>
                                <div className='relative w-6 h-6'>
                                    <Image src={icon.src} alt={'icon'} fill className='object-contain'></Image>
                                </div>
                            </Link>
                        })}
                    </div>
                    <div className='flex-1'>
                        logo
                    </div>
                    <p className="flex-1"> copy 2024 All rights reserved</p>

                </div>
            </div>
        </footer >
    )
}

export default Footer
