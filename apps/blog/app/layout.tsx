import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MaxWidthWrapper from "@ui/base/layout/wrapper/MaxWidthWrapper"
import NavSimple from "@ui/base/menu/NavSimple"
import NavMobileBottom from "@ui/base/menu/NavMobileBottom"
import {DropDownBarCategoryList} from "@ui/base/menu/NavDropDown/DropDownBar"
import { ThemeProvider } from "next-themes";
import {ExampleProductCategoryList} from "@entity/commerce/product/category"
import ProductNavItem from "@ui/base/menu/NavDropDown/ProductNavItem";
import LoginStat from "@ui/base/feature/login/LoginStat";
import Cart from "@ui/commerce/product/Cart"
import { CartImpl, useCart } from '@entity/commerce/product/cart'
import { useMemo } from "react";
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: 'blog template',
    description: 'basic blog page for monorepo',
    keywords: ['monorepo', 'blog'],
    openGraph: {
        title: 'tender blog',
        description: 'some descripiton',
        url: 'URL',
        siteName: 'search keyword',
        images: [
            {
                url: 'logo path should be absolute',
                width: 800,
                height: 600,
                alt: 'logo'
            },

        ],
        type: 'website',
    },

};



const navlinks = [
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


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {




    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased relative h-full`}
            >
                <ThemeProvider attribute="class">
                    <MaxWidthWrapper>
						{/*
                        <NavSimple navList={navlinks} />
						*/}
                        <DropDownBarCategoryList list={ExampleProductCategoryList} NavItemComponent={ProductNavItem} />
						<LoginStat/>
						<Cart />
                        <NavMobileBottom />

                        <main className="relative flex flex-col min-h-screen ">
                            <div className="flex-1 flex-grow">
                                {children}
                            </div>
                        </main>
                    </MaxWidthWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
function CartImplZustand(): any {
    throw new Error("Function not implemented.");
}

