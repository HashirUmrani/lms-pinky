import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../../lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

function DropdownMenuContent({ className, sideOffset = 8, ...props }) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={cn("z-50 min-w-48 overflow-hidden rounded-xl border border-border bg-white p-1.5 text-foreground shadow-[0_12px_35px_rgba(45,36,23,0.12)] outline-none", className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}
function DropdownMenuItem({ className, ...props }) {
  return <DropdownMenuPrimitive.Item className={cn("relative flex cursor-pointer select-none items-center gap-2 rounded-lg px-2.5 py-2 text-sm outline-none transition-colors focus:bg-[#f5f0e7] data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)} {...props} />;
}
function DropdownMenuLabel({ className, ...props }) {
  return <DropdownMenuPrimitive.Label className={cn("px-2.5 py-2 text-xs font-semibold text-muted-foreground", className)} {...props} />;
}
function DropdownMenuSeparator({ className, ...props }) {
  return <DropdownMenuPrimitive.Separator className={cn("-mx-1.5 my-1 h-px bg-border", className)} {...props} />;
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuRadioGroup,
};
