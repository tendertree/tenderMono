import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css"
import { ThemeProvider } from 'next-themes'
import { NavMenu } from "@/src/comp/navmenu";
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
        <html suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class">
                    <div className="container">
                        <div className="wrapper">
                            <NavMenu />
                            {children}
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html >
    );
}
