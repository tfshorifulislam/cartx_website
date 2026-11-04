import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<typeof InputPrimitive> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <InputPrimitive
        ref={ref}
        type={type}
        data-slot="input"
        aria-invalid={error ? "true" : undefined}
        className={cn(
          "flex h-10 w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm text-foreground shadow-2xs transition-all placeholder:text-muted-foreground outline-none",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
            : "hover:border-border/80",
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

