import React, { ReactNode } from 'react';

export interface LogoProps {
    Link?: React.ComponentType<any>;
    href?: string;
    className?: string;
    logo?: string | ReactNode;
    altText?: string;
    children?: ReactNode;
}

export default function Logo({
    Link,
    href = "/",
    className = "",
    logo,
    altText = "Logo",
    children
}: LogoProps) {
    const LinkComponent = Link || 'a';

    const content = children || logo || altText;

    return (
        <LinkComponent
            href={href}
            className={`text-xl font-bold text-gray-800 dark:text-white ${className}`}
        >
            {typeof content === 'string' && content.match(/\.(jpeg|jpg|gif|png)$/) ? (
                <img src={content} alt={altText} className="h-8" />
            ) : (
                logo
            )}
        </LinkComponent>
    );
}

