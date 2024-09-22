import React from 'react'
import { cn } from '../../lib/utils';


interface Props {
    className?: string;
    children?: React.ReactNode;
}
function MaxWidthWrapper({ className, children }: Props) {
    return (
        <div className={cn('mx-auto max-w-screen-xl w-full my-12 flex flex-col',className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper
