import { Navbar, LoginBtn } from "@ui/shadcn/comp/menu/index"
import React, { Suspense } from "react";

const items = [
    { name: 'home', link: '/home' },
    { name: 'blog', link: '/blog' },
    { name: 'tutorial', link: '/tutorial' }
];
const ToggleTheme = React.lazy(() => import('./toggleThemeBtn'));

export function NavMenu() {
    return (
        <Navbar items={items} >
            <LoginBtn />
            <Suspense fallback={<div>Loading...</div>}>
                <ToggleTheme />
            </Suspense>
        </Navbar>

    )
}
