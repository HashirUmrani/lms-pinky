import { cn } from "../../lib/utils";

export function UniversityMark({ compact = false, className }) {
  return (
    <div className={cn("flex shrink-0 items-center gap-3", className)}>
      <div className={cn("relative flex items-center justify-center rounded-full border border-[#e1c6d0] bg-[#f4eaee] text-[#86455c] shadow-sm", compact ? "size-9" : "size-11")} aria-label="University of Sindh emblem">
        <div className="absolute inset-[3px] rounded-full border border-[#e1c6d0]/80" />
        <span className={cn("font-serif font-bold tracking-tight", compact ? "text-[10px]" : "text-xs")}>UoS</span>
      </div>
      <div className="min-w-0">
        <p className={cn("truncate font-semibold tracking-tight text-[#4a3e32]", compact ? "text-sm" : "text-[15px]")}>University of Sindh</p>
        {!compact && <p className="mt-0.5 text-[11px] tracking-[0.14em] text-[#a09789]">JAMSHORO · EST. 1947</p>}
      </div>
    </div>
  );
}
