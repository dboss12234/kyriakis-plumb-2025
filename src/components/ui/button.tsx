import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 modern-hover",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground shadow-md hover:shadow-lg border border-primary/20",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
        outline: "border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 text-foreground",
        secondary: "bg-gradient-secondary text-secondary-foreground shadow-sm hover:shadow-md border border-secondary/30",
        ghost: "hover:bg-primary/10 hover:text-primary text-muted-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        emergency: "bg-emergency text-emergency-foreground shadow-lg hover:shadow-xl animate-pulse-glow font-semibold",
        cta: "bg-gradient-accent text-accent-foreground shadow-accent hover:shadow-lg font-semibold text-base border border-accent/30",
        hero: "bg-gradient-hero text-primary-foreground shadow-glow hover:shadow-xl font-bold text-lg px-8 py-4 border border-primary/30",
        glass: "glass text-foreground hover:bg-primary/20 border border-border/50",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-lg",
        icon: "h-11 w-11",
        xl: "h-16 rounded-2xl px-12 text-xl font-bold",
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
