import React, { useState } from 'react';
import MenuItem, { LinkComponentType } from './MenuItem';

interface MenuItemData {
    name: string;
    link: string;
}

interface NavigationProps {
    menuData: MenuItemData[];
    LinkComponent: LinkComponentType;
    MenuIcon?: React.ComponentType<any>;
    XIcon?: React.ComponentType<any>;
}

const Navigation: React.FC<NavigationProps> = ({
    menuData,
    LinkComponent,
    MenuIcon,
    XIcon
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-4">
                {menuData.map((item) => (
                    <MenuItem
                        key={item.name}
                        name={item.name}
                        link={item.link}
                        LinkComponent={LinkComponent}
                    />
                ))}
            </ul>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <button
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen
                        ? (XIcon ? <XIcon size={24} /> : 'Close')
                        : (MenuIcon ? <MenuIcon size={24} /> : 'Menu')
                    }
                </button>
                {isMenuOpen && (
                    <ul className="mt-2 space-y-2">
                        {menuData.map((item) => (
                            <MenuItem
                                key={item.name}
                                name={item.name}
                                link={item.link}
                                LinkComponent={LinkComponent}
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
