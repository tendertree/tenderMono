import "@repo/ui/global.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@repo/ui/utils"
const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                {children}
            </body>
        </html>
    )
}

