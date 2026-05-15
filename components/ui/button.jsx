"use client"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-white hover:bg-zinc-700 rounded-none",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 rounded-none",
        outline:
          "border border-zinc-900 bg-transparent text-zinc-900 hover:bg-zinc-100 rounded-none",
        secondary:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 rounded-none",
        ghost:
          "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 rounded-none",
        link:
          "text-zinc-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }