'use client'
import { ToggleTheme } from '@ui/shadcn/comp/menu';
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

export function ToggleThemeBtn() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const toggleThemes = () => {
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }

    }

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }


    return (
        <div>
            <ToggleTheme
                isLight={theme === "light"}
                lightOn={toggleThemes}
            />

        </div>
    )
}
