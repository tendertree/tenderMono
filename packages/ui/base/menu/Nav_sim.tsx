"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
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

function Nav() {
    const pathname = usePathname()

    return (
        <nav className='flex gap-8'>
            {links.map((link, idx) => (
                <Link href={link.path} key={idx}
                    className={`${link.path === pathname ? "text-white border-b-2 border-white" : "text-light"} capitalize font-medium hover:text-strong transition-all`}>
                    {link.name}
                </Link>
            ))
            }
        </nav >
    )
} export default Nav
