'use client'
import { ToggleTheme } from '@ui/shadcn/comp/menu';
import { useTheme } from 'next-themes'
import { useEffect } from 'react';

export default function ToggleThemeBtn() {
    const { theme, setTheme } = useTheme();
    const toggleThemes = () => {
        if (theme == "dark") {
            setTheme("Light");
        } else {
            setTheme("dark");
        }

    }
    useEffect(() => {


    }, [])
    return (
        <div>
            <ToggleTheme
                isLight={theme === "light"}
                lightOn={toggleThemes}
            />

        </div>
    )
}
