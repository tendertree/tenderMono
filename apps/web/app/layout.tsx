import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@ui/shadcn/comp/menu/navbar"
import "./global.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "tenderMono",
    description: "monorepo introduce page",
};

const items = [
    { name: 'home', link: '/home' },
    { name: 'blog', link: '/blog' },
    { name: 'tutorial', link: '/tutorial' }
];

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="content">
                    <div className="wrapper">
                        <Navbar items={items} > </Navbar>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
