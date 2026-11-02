import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Select = React.forwardRef(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn("flex h-11 w-full appearance-none rounded-lg border border-input bg-white px-3.5 pr-10 text-sm text-foreground shadow-sm shadow-black/[0.015] outline-none transition hover:border-[#e2c9d2] focus:border-[#b27088] focus:ring-2 focus:ring-[#b27088]/20", className)}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-[#898276]" />
  </div>
));
Select.displayName = "Select";

export { Select };
