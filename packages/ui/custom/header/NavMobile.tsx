"use client"
import { Menu } from "lucide-react";

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
        <>
            <div>arst this </div>
            <Menu />
        </>
    )
}
