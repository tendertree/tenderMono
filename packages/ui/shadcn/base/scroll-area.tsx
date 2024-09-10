"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cn } from "@ui/shadcn/utils"

// Extend ScrollAreaPrimitiveProps to include HTMLAttributes
type ScrollAreaPrimitiveProps = React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>;

interface ScrollAreaProps extends ScrollAreaPrimitiveProps {
    children: React.ReactNode;
    className?: string;  // Explicitly include className
}
const ScrollArea = React.forwardRef<
    HTMLDivElement,
    ScrollAreaProps
>(({ className, children, ...props }, ref) => (        // ... component implementation
    <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn("relative overflow-hidden")}
        {...props}
    >
        <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
            {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar />
        <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root >
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
            "flex touch-none select-none transition-colors",
            orientation === "vertical" &&
            "h-full w-2.5 border-l border-l-transparent p-[1px]",
            orientation === "horizontal" &&
            "h-2.5 border-t border-t-transparent p-[1px]",
            className
        )}
        {...props}
    >
        <ScrollAreaThumb />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

const ScrollAreaThumb = React.forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaThumb>,
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaThumb>
>(({ className, ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaThumb
        ref={ref}
        className={cn("relative flex-1 rounded-full bg-border", className)}
        {...props}
    />
))
ScrollAreaThumb.displayName = ScrollAreaPrimitive.ScrollAreaThumb.displayName

export { ScrollArea, ScrollBar }
