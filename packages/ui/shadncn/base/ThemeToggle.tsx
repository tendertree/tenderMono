'use client'

import * as React from "react"
import { Sun, Moon } from 'lucide-react'
import { Button } from './button'
import { useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"



interface ThemeToggleProps {
    theme: string | undefined
    toggleTheme: () => void
}

export default function ThemeToggleBtn() {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }
    return (
        <Button variant="outline" size="icon" onClick={toggleTheme} className="mb-2 pb-2">
            {theme == "dark" ?
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all pt-1" /> :
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all top-2" />
            }
        </Button>
    )
}





export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

