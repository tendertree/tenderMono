/**
 * @module Simply get react children as child and stick effect
 */


import { cn } from "../lib/utils"
type StickyProps = {
    className?: string;
    children: React.ReactNode;
};

export default function StickyLayout({ className, children }: StickyProps) {
    return (
        <div className="relative">
            <div className={cn("sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400", className)}>
                {children}
            </div>
        </div>
    );
}

