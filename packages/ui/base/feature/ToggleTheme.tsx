"use client"

import * as React from "react"
import { Sun, Moon } from 'lucide-react'
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useEffect, useState } from "react"
import { Button } from "../shadcn/button"


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
       <Button variant="outline" size="icon" onClick={toggleTheme} className="">
            {theme == "dark" ?
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " /> :
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
            }
        </Button>
    )
}





export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
