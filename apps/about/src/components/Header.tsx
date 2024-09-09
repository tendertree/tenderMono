import { Button } from '@ui/shadcn/base/button'
import Link from 'next/link';
import Nav from './Nav';
import NavMobile from './NavMobile';
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center ">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">tendertree<span className='text-strong'> .</span>

                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button className='bg-strong'>Hire me</Button>
                    </Link>
                </div>

                <div className='xl:hidden'>
                    <NavMobile />
                </div>
            </div>
        </header>
    )
}

export default Header;
