"use client"
import { Sheet, SheetContent, SheetTrigger } from '@ui/shadcn/base/sheet'
import { Menu } from 'lucide-react'
import { usePathname } from "next/navigation";
import Link from 'next/link'
import React from 'react'
const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "contact",
        path: "/contact"
    },

]
export default function NavMobile() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger>
                <div className="flex justify-center items-center">
                    <Menu className="text-[32px] text-light" />
                </div>
            </SheetTrigger>
            <SheetContent className="flex  flex-col bg-dark/80">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className='text-4xl font-semiboild'>tendertree<span className="text-accent">.</span></h1>
                    </Link>

                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return <Link href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-light border-b-2 font-bold"}text-xl capitalize hover:text-strong transition-all`}
                        >
                            {link.name}

                        </Link>

                    })}


                </nav>
            </SheetContent>
        </Sheet>
    )
}
