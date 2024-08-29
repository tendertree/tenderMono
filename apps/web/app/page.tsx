"use client";
import Logo from "@ui/custom/basic/Logo";
import Link from "next/link";
import HeaderBasic from "@ui/custom/header/HeaderBasic";
import { Menu, X } from 'lucide-react';

import dynamic from 'next/dynamic';
import { LinkComponentType } from "@ui/custom/header/MenuItem";
const MenuItem = dynamic(() => import('@ui/custom/header/MenuItem'), { ssr: true });

const menuData = [
    { name: 'Blog', link: '/blog' },
    { name: 'About', link: '/about' },
    { name: 'Work', link: '/work' },
];
export default function Home() {

    return (
        <div >

            <HeaderBasic
                MenuData={menuData}
                MenuItem={MenuItem}
                Logo={<Logo />}
                MenuIcon={Menu}
                XIcon={X}
                Link={Link as LinkComponentType}
            />


            <main className="container mx-auto mt-8 px-4">
                <h1 className="text-3xl font-bold mb-4">Welcome to TenderTree</h1>
                <p className="text-lg">This is the main content of your page.</p>
            </main>

            <footer>this is footer</footer>
        </div>
    );
}
