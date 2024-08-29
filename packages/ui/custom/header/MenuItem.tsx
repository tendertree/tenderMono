import React from 'react';

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
    link: string;
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
        className: "text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white",
        onClick: onClick
    };

    return (
        <li>
            {React.createElement(
                LinkComponent,
                linkProps,
                name
            )}
        </li>
    );
};

export default MenuItem;
