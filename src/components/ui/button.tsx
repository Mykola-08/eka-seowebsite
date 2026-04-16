import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] tap-highlight-transparent",
  {
    variants: {
      variant: {
        default: "bg-[#0071e3] text-white hover:bg-[#005bb5]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border-[1.5px] border-gray-200 bg-transparent text-gray-900 hover:bg-gray-50/50 hover:border-gray-300",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "hover:bg-gray-100 text-gray-900",
        link: "text-blue-500 underline-offset-4 hover:underline",
        white: "bg-white text-black hover:bg-gray-50",
        "white-outline": "bg-transparent text-white border-[1.5px] border-white/40 hover:bg-white/10 hover:border-white",
      },
      size: {
        default: "h-12 px-6", // Premium default touch area
        sm: "h-9 px-4 text-sm", // Compact but clickable
        lg: "h-14 px-8 text-lg", // Large
        xl: "h-16 px-10 text-xl font-semibold", // Hero size
        icon: "h-12 w-12",
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
