'use client'
import { ToggleTheme } from '@ui/shadcn/comp/menu';
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

export default function ToggleThemeBtn() {
    const { theme, setTheme } = useTheme();
    const toggleThemes = () => {
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }

    }
    //
    // useEffect(() => {
    //     setMounted(true);
    // }, []);
    //
    // if (!mounted) {
    //     return null;
    // }


    return (
        <div>
            <ToggleTheme
                isLight={theme === "light"}
                lightOn={toggleThemes}
            />

        </div>
    )
}
