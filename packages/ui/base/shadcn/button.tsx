import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	//@ts-expect-error : ts server not recognize, but seemed bug
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"




const RoundButton = ( text : string): React.ReactElement => {
    return (

        <button className='relative min-w-[184px] inline-flex items-center justify-center px-6 py-[18px] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group'>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-dark via-neutral to-dark"></span>
            <span className="absolute bottim-9 right-9 block w-72 h-72 mb-32 mr-4 transition suration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-red-200 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white text-sm uppercase tracking-[1px]">
                {text}
            </span>
        </button>
    )
}



export { Button, buttonVariants,RoundButton }
