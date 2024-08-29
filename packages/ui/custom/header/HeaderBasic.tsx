"use client"
import React, { useState, ReactNode } from 'react';
import { LogoProps } from '../basic/Logo';
import { LinkComponentProps, LinkComponentType, MenuItemProps } from './MenuItem';
interface MenuItemData {
    name: string;
    link: string;
}


interface HeaderBasicProps {
    MenuItem: React.ComponentType<MenuItemProps>;  // MenuItem을 prop으로 받습니다
    MenuData: MenuItemData[];
    Logo?: React.ComponentType<LogoProps> | ReactNode;
    ThemeToggle?: React.ComponentType;
    Link?: LinkComponentType;
    MenuIcon?: React.ComponentType<any>;
    XIcon?: React.ComponentType<any>;
}

const HeaderBasic: React.FC<HeaderBasicProps> = ({
    MenuItem,
    MenuData,
    Logo,
    ThemeToggle,
    Link = 'a',
    MenuIcon,
    XIcon,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const LogoComponent = Logo
        ? (typeof Logo === 'function' ? Logo : () => <>{Logo}</>)
        : null;

    return (
        <header className="bg-white dark:bg-gray-800 shadow-md">

            <div className="container mx-auto px-4 bg-red-500">
                <div className="flex items-center justify-between h-16">
                    {LogoComponent && <LogoComponent />}
                    {/* Desktop Navigation */}
                    <nav className=" md:block">
                        <ul className="flex space-x-4">
                            {MenuData.map((item) => (
                                <MenuItem key={item.name} name={item.name} link={item.link} LinkComponent={Link} />
                            ))}
                        </ul>
                    </nav>

                    {/* Theme Toggle and Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        {ThemeToggle && <ThemeToggle />}
                        {(MenuIcon || XIcon) && (
                            <button
                                className="md:hidden text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen
                                    ? (XIcon ? <XIcon size={24} /> : null)
                                    : (MenuIcon ? <MenuIcon size={24} /> : null)
                                }
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4">
                        <ul className="flex flex-col space-y-2">
                            {MenuData.map((item: MenuItemProps) => (
                                <MenuItem
                                    key={item.name}
                                    name={item.name}
                                    link={item.link}
                                    LinkComponent={Link}
                                />
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default HeaderBasic;
