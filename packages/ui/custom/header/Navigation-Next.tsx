import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
interface MenuItemData {
    name: string;
    link: string;
}

interface MenuItemProps {
    name: string;
    link: string;
}

interface LogoProps {
    Link?: React.ComponentType<any>;
    href?: string;
    className?: string;
    logo?: string | ReactNode;
    altText?: string;
    children?: ReactNode;
}

interface NavigationNextProps {
    MenuItem: React.ComponentType<MenuItemProps>;
    MenuData: MenuItemData[];
    Logo: React.ComponentType<LogoProps>;
    logoProps?: Omit<LogoProps, 'Link'>;
    children?: ReactNode;
}


export const NavigationNext: React.FC<NavigationNextProps> = ({
    MenuData,
    MenuItem,
    Logo,
    logoProps = {},
    children

}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className='relative'>
            <div className='flex items-center  justify-between md:px-24'>
                <div className='justify-start	bg-blue-100 flex flex-row'>
                    {/* Logo */}
                    <Logo Link={Link} {...logoProps} />
                </div>
                {/* Desktop Navigation */}
                <div className='justfy-end flex-row flex'>
                    <ul className="hidden md:flex space-x-4 mr-10">
                        {MenuData.map((item) => (
                            <MenuItem
                                key={item.name}
                                name={item.name}
                                link={item.link}
                            />
                        ))}
                    </ul>

                    {children}
                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen
                                ? <X size={24} /> : <Menu size={24} />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-gray-800 shadow-lg">
                        <ul className="flex flex-col w-full">
                            {MenuData.map((item) => (
                                <li key={item.name} className="w-full">
                                    <Link
                                        href={item.link}
                                        className="block w-full py-2 px-4 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};
