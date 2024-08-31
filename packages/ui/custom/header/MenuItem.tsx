import React from 'react';
import { twMerge } from 'tailwind-merge';

export type LinkComponentProps = {
    href: string | { pathname: string; query?: Record<string, string> };
    className?: string;
    onClick?: () => void;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export type LinkComponentType =
    | React.ComponentType<LinkComponentProps>
    | React.ForwardRefExoticComponent<LinkComponentProps>

    | keyof JSX.IntrinsicElements;



export interface MenuItemProps {
    name: string;
    link: any;
    onClick?: () => void;
    LinkComponent?: LinkComponentType;

}
const MenuItem: React.FC<MenuItemProps> = ({
    name,
    link,
    onClick,
    LinkComponent = 'a'
}) => {
    const linkProps: LinkComponentProps = {
        href: link,
        className: twMerge(
            "text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white",
            "transition-all duration-300 ease-in-out" // Added for tween effect
        ),
        onClick: onClick
    };
    return (
        <li className="group flex flex-1 list-none items-center justify-center space-x-1 hover:bg-amber-100 transition-all duration-300 ease-in-out bg-amber-100	">
            {React.createElement(
                LinkComponent,
                linkProps,
                name
            )}
        </li>
    );
};

export default MenuItem;
