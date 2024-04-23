'use client'
import { Navbar, LoginBtn, ToggleTheme } from "@ui/shadcn/comp/menu/index"
import { useTheme } from 'next-themes'

const items = [
    { name: 'home', link: '/home' },
    { name: 'blog', link: '/blog' },
    { name: 'tutorial', link: '/tutorial' }
];

export function NavMenu() {
    const { theme, setTheme } = useTheme();
    const toggleThemes = () => {
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }

    }
    return (
        <Navbar items={items} >
            <LoginBtn />
            <ToggleTheme
                isLight={theme === "light"}
                lightOn={toggleThemes}
            />
        </Navbar>

    )
}
