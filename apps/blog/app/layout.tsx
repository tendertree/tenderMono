import type { Metadata } from "next";
import "./globals.css";
import MaxWidthWrapper from "@ui/shadcn/base/MaxWidthWrapper"
import Nav_Simple from "@ui/shadcn/menu/Nav_Simple";
import QueryProvider from "@src/QueryProvider";


import { ThemeProvider } from "@ui/shadcn/base/ThemeToggle";
import { Noto_Sans, Nanum_Gothic } from 'next/font/google'

const noto = Noto_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-noto',
    weight: '400',
})
const nanum = Nanum_Gothic({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nanum',
    weight: ['400', '700'],
})
export const metadata: Metadata = {
    title: "blog",
    description: "my blog page",
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-p-20">
            <body
                className={' antialiased min-h-screen dark:bg-black'}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <MaxWidthWrapper>
                        <Nav_Simple />
                        <QueryProvider>
                            {children}
                        </QueryProvider>
                    </MaxWidthWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
