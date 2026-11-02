import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

export function QuickAccessCard({ icon: Icon, title, description, onClick, className, tone = "blue" }) {
  const tones = {
    blue: "bg-[#f4eaee] text-[#86455c] group-hover:bg-[#efdfe5]",
    sand: "bg-[#f3ede3] text-[#927653] group-hover:bg-[#eee3d3]",
    sage: "bg-[#edf2eb] text-[#68806a] group-hover:bg-[#e4ece2]",
  };
  return (
    <button onClick={onClick} className={cn("group flex min-h-[112px] w-full items-start gap-3.5 rounded-xl border border-[#f0e2e7] bg-white p-4 text-left shadow-[0_1px_2px_rgba(78,43,59,0.025)] transition duration-200 hover:-translate-y-0.5 hover:border-[#e2c9d2] hover:shadow-[0_12px_26px_rgba(78,43,59,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b27088]", className)}>
      <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors ${tones[tone] || tones.blue}`}><Icon className="size-[19px]" strokeWidth={1.8} /></span>
      <span className="min-w-0 flex-1">
        <span className="block text-[13px] font-semibold leading-5 text-[#5a4a3c]">{title}</span>
        <span className="mt-1 block text-[11px] leading-[1.55] text-[#9c9489]">{description}</span>
      </span>
      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-[#bd8599] opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </button>
  );
}
