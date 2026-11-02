import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function StatCard({ icon: Icon, label, value, note, trend, tone = "blue" }) {
  const toneClasses = {
    blue: "bg-[#f4eaee] text-[#86455c]",
    sand: "bg-[#f3ede3] text-[#927653]",
    sage: "bg-[#edf2eb] text-[#68806a]",
    clay: "bg-[#f5ece8] text-[#a16c5d]",
  };

  return (
    <Card className="h-full border-[#f0e2e7] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(78,43,59,0.075)]">
      <CardContent className="flex items-start justify-between gap-3 p-4 sm:p-5">
        <div className="min-w-0">
          <p className="text-xs font-medium text-[#938b7f]">{label}</p>
          <p className="mt-2 text-[26px] font-semibold leading-none tracking-tight text-[#463a2e]">{value}</p>
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[11px] text-[#a8a298]">
            {trend && <span className="inline-flex items-center gap-0.5 font-medium text-[#66806a]"><ArrowUpRight className="size-3" />{trend}</span>}
            <span>{note}</span>
          </div>
        </div>
        <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${toneClasses[tone] || toneClasses.blue}`}>
          <Icon className="size-[18px]" strokeWidth={1.8} />
        </span>
      </CardContent>
    </Card>
  );
}
