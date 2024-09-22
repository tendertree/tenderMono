"use client"

import * as React from "react"
import { Sun, Moon } from 'lucide-react'
import { Button } from '../shadcn/button'
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useState } from "react"


export default function ThemeToggleBtn() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }

    if (!mounted) {
        return null
    }

    return (
        <button onClick={toggleTheme} aria-label="Toggle theme">
            <div style={{ display: theme === 'dark' ? 'block' : 'none' }}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all pt-1" /> :
                {/* Light mode icon */}
            </div>
            <div style={{ display: theme === 'light' ? 'block' : 'none' }}>
                {/* Dark mode icon */}
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all top-2" />
            </div>
        </button>
    )
}





export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
