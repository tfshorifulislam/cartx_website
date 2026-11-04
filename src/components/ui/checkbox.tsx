import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  error?: boolean
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        data-slot="checkbox"
        className={cn(
          "peer inline-flex size-4.5 shrink-0 items-center justify-center rounded-md border border-border bg-background shadow-2xs transition-all outline-none cursor-pointer",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground",
          error
            ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
            : "hover:border-primary/60",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          <Check className="size-3.5 stroke-[3]" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }

