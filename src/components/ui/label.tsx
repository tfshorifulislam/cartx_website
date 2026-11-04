import * as React from "react"
import { cn } from "@/lib/utils"

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  error?: boolean
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <label
        ref={ref}
        data-slot="label"
        className={cn(
          "text-xs sm:text-sm font-semibold leading-none text-foreground select-none",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          error && "text-destructive",
          className
        )}
        {...props}
      />
    )
  }
)
Label.displayName = "Label"

export { Label }

