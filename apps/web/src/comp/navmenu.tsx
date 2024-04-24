import { Navbar, LoginBtn } from "@ui/shadcn/comp/menu/index"
import { ToggleThemeBtn } from "./toggleThemeBtn";

const items = [
    { name: 'home', link: '/home' },
    { name: 'blog', link: '/blog' },
    { name: 'tutorial', link: '/tutorial' }
];

export function NavMenu() {

    return (
        <Navbar items={items} >
            <LoginBtn />
            <ToggleThemeBtn />
        </Navbar>

    )
}
