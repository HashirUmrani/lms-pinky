import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium leading-none",
  {
    variants: {
      variant: {
        default: "border-[#ecdce2] bg-[#f6edf0] text-[#84475d]",
        info: "border-[#ecdce2] bg-[#f6edf0] text-[#84475d]",
        secondary: "border-[#e9e4dc] bg-[#f5f1ea] text-[#786b57]",
        success: "border-[#dce8dc] bg-[#eff5ee] text-[#58745c]",
        warning: "border-[#eadfc9] bg-[#f8f2e7] text-[#946d38]",
        danger: "border-[#ecd8d4] bg-[#fbf0ee] text-[#a85e55]",
        outline: "border-border bg-white text-muted-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
