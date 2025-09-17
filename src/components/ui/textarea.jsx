import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow,border] duration-150 ease-in-out placeholder:text-muted-foreground",
        // Gradient border only
        "border-[2px] border-transparent",
        "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-border",
        // Focus + hover effects
        "focus:border-transparent focus:ring-[3px] focus:ring-yellow-400/60",
        "hover:border-transparent hover:ring-[2px] hover:ring-yellow-500/60",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 dark:bg-input/30",
        "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
