"use client";
import Logo from "@ui/custom/basic/Logo";
import dynamic from 'next/dynamic';
import { NavigationNext } from "@ui/custom/header/Navigation-Next";
const MenuItem = dynamic(() => import('@ui/custom/header/MenuItem'), { ssr: true });

const menuData = [
    { name: 'Blog', link: '/blog' },
    { name: 'About', link: '/about' },
    { name: 'Work', link: '/work' },
];
export default function Home() {

    return (
        <div className="mx-3">
            <NavigationNext MenuData={menuData} MenuItem={MenuItem} Logo={Logo} />
            <main className="container mx-auto mt-8 px-4">
                <h1 className="text-3xl font-bold mb-4">Welcome to TenderTree</h1>
                <p className="text-lg">This is the main content of your page.</p>
            </main>

            <footer>this is footer</footer>
        </div>
    );
}
