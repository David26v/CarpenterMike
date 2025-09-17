import * as React from "react";
import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  size = "md",
  ...props
}) {
  const sizeClasses = {
    sm: "h-8 text-sm",
    md: "h-9 text-base",
    xl: "h-12 text-lg",
  };

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-md bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        sizeClasses[size],
        // Yellow gradient border only
        "border-[2px] border-transparent",
        "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-border",
        // Focus + hover effects
        "focus:border-transparent focus:ring-[3px] focus:ring-yellow-400/60 focus:outline-none",
        "hover:border-transparent hover:ring-[2px] hover:ring-yellow-500/60",
        className
      )}
      {...props}
    />
  );
}

export { Input };
