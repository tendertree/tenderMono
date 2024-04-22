import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Drawer from "@ui/shadcn/comp/menu/drawer"
import { Navbar } from "@ui/shadcn/comp/menu/navbar"
import "./global.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "tenderMono",
    description: "monorepo introduce page",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="content">
                    <Navbar></Navbar>
                    <div className="wrapper">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
