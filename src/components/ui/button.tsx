import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary/90 shadow-none",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-none",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-none",
        secondary:
          "bg-transparent border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/5 shadow-none",
        ghost: "hover:bg-accent hover:text-accent-foreground shadow-none",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
        // Custom variants matching globals.css
        primary: "bg-[#0071e3] text-white hover:bg-[#0077ED] shadow-none",
        // Replaced yellow/golden accents with Apple Blue as requested
        accent: "bg-[#0071e3] text-white hover:bg-[#0077ED] shadow-none",
        gold: "bg-[#0071e3] text-white font-semibold hover:bg-[#0077ED] shadow-none",
        // Replaced black with Apple Blue as requested
        apple: "bg-[#0071e3] text-white hover:bg-[#0077ED] shadow-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-full px-3",
        lg: "h-11 rounded-full px-8",
        xl: "h-14 rounded-full px-8 text-lg font-medium", // matching .btn sizes roughly
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

export { Button, buttonVariants }
