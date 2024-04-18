import React, { ComponentType, isValidElement, cloneElement, ReactNode } from 'react';

interface LinkProps {
    href: string;
    children: ReactNode;
}

interface ChildrenProps extends React.HTMLAttributes<HTMLElement> {
    href?: string;
}

const Link: ComponentType<LinkProps> = ({ href, children }) => {
    const wrappedChildren = React.Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, { href } as ChildrenProps);
        }

        return child;
    });

    return (
        <div className="text-muted-foreground transition-colors hover:text-foreground">
            {wrappedChildren}
        </div>
    );
};

export default Link;
