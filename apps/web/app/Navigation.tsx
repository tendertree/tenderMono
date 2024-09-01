"use client"
import { NavigationNext } from '@ui/custom/header/Navigation-Next';
import Logo from "@ui/custom/basic/Logo";
import dynamic from 'next/dynamic';
import Searchbar from '@ui/shadcn/feature/Searchbar';

const MenuItem = dynamic(() => import('@ui/custom/header/MenuItem'), { ssr: true });

const menuData = [
    { name: 'Blog', link: '/blog' },
    { name: 'About', link: '/about' },
    { name: 'Work', link: '/work' },
];

export const Navigation = () => {
    return <NavigationNext MenuData={menuData} MenuItem={MenuItem} Logo={Logo} >
        <Searchbar />
    </NavigationNext>;
};
