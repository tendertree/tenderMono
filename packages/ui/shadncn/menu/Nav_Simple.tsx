"use client"
import Link from 'next/link'
import React from 'react'
import { useTheme } from 'next-themes'
import { buttonVariants } from '../base/button'
import ThemeToggleBtn from '../base/ThemeToggle'
import { Menu } from 'lucide-react'
import { cn } from '../lib/utils'
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from '../base/sheet'

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "blog",
        path: "/blog"
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

export default function Nav_Simple() {
    const pathname = usePathname();

	const isActiveLink = (path: string) => {
    if (path === '/') {
        return pathname === path;
    }
    return pathname.startsWith(path);
};

    return (
        <nav className="flex md:flex-row h-15 sticky top-0 border-b px-8 backdrop-blur items-center justify-between">
            <div className='font-bold text-xl flex flex md:text-3xl'>
                tendertree <span className='text-strong'>.</span>
            </div>
            <ul className='w-full justify-end space-x-4 items-center hidden md:flex'>
                {links.map((link, index) => (
                    <li key={index} className='font-medium hover:text-strong transition-all'>
                        <Link 
                            href={link.path}
                            className={cn(
                                isActiveLink(link.path)  && "text-red-500",
                                "hover:text-strong transition-all"
                            )}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
                <li className="buttons space-x-2">
                    <Link href={"/login"} className={cn(buttonVariants({ variant: "outline" }), "font-medium", "hover:text-strong", "transition-all")}>Login</Link>
                    <Link href={"/login"} className={cn(buttonVariants({ variant: "outline" }), "font-medium", "hover:text-strong", "transition-all")}>SignUp</Link>
                    <ThemeToggleBtn />
                </li>
            </ul>
            <ul className="flex md:hidden w-full justify-end font-medium hover:text-strong transition-all">
                <Sheet>
                    <SheetTrigger>
                        <div className="flex justify-center items-center">
                            <Menu className="text-[32px] text-light" />
                        </div>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col bg-batang">
                        <div className="mt-32 mb-40 text-center text-2xl">
                            <Link href="/">
                                <h1 className='text-4xl font-semiboild'>tendertree<span className="text-strong">.</span></h1>
                            </Link>
                        </div>
                        <nav className="flex flex-col justify-center items-center gap-8">
                            {links.map((link, index) => {
                                return <Link 
                                    href={link.path}
                                    key={index}
                                    className={cn(
                                        "text-xl capitalize hover:text-strong transition-all",
                                        link.path === pathname && "text-red-500 border-b-2 border-strong font-bold"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            })}
                        </nav>
                    </SheetContent>
                </Sheet>
            </ul>
        </nav>
    )
}
