import { cn } from "../../lib/utils";

export function EmptyState({ icon: Icon, title, description, className }) {
  return (
    <div className={cn("flex min-h-52 flex-col items-center justify-center rounded-xl border border-dashed border-[#ded6c9] bg-[#fbfaf7] px-6 py-10 text-center", className)}>
      {Icon ? <span className="mb-3 flex size-11 items-center justify-center rounded-xl bg-[#f0e8dc] text-[#806746]"><Icon className="size-5" /></span> : null}
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <p className="mt-1 max-w-sm text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}
