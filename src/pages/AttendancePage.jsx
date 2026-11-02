import { useMemo, useState } from "react";
import { CalendarCheck, Download, Info, TrendingUp } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const attendance = [
  { code: "SWE-701", name: "Software Project Management", attended: 24, total: 28, rate: 86, trend: "+4%" },
  { code: "SWE-702", name: "Artificial Intelligence", attended: 25, total: 28, rate: 89, trend: "+2%" },
  { code: "SWE-703", name: "Software Quality Engineering", attended: 21, total: 25, rate: 84, trend: "+1%" },
  { code: "SWE-704", name: "Web Engineering", attended: 21, total: 23, rate: 91, trend: "+5%" },
  { code: "SWE-705", name: "Final Year Project – I", attended: 18, total: 22, rate: 82, trend: "-1%" },
  { code: "SWE-706", name: "Professional Practices", attended: 22, total: 25, rate: 88, trend: "+3%" },
];

export default function AttendancePage() {
  const [semester, setSemester] = useState("7th Semester");
  const overall = useMemo(() => Math.round(attendance.reduce((sum, item) => sum + item.attended, 0) / attendance.reduce((sum, item) => sum + item.total, 0) * 100), []);
  const visibleAttendance = semester === "7th Semester" ? attendance : [];
  const exportCsv = () => {
    const rows = [["Course code", "Course", "Classes attended", "Total classes", "Attendance rate"], ...attendance.map((item) => [item.code, item.name, item.attended, item.total, `${item.rate}%`])];
    const csv = rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    link.download = "student-attendance.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  };
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><Badge>ACADEMIC RECORDS</Badge><h1 className="mt-2 text-[25px] font-semibold tracking-tight text-[#4a3e32]">Attendance overview</h1><p className="mt-1.5 text-sm text-[#9a9082]">Review your class participation and attendance requirements.</p></div><Button variant="outline" onClick={exportCsv}><Download className="size-4" /> Export attendance</Button></div>
      <div className="grid gap-4 sm:grid-cols-3"><Card><CardContent className="p-5"><p className="text-xs text-[#9c9487]">Overall attendance</p><p className="mt-2 text-3xl font-semibold tracking-tight text-[#534538]">{overall}%</p><p className="mt-1 text-[11px] text-[#64816b]">Above minimum requirement</p></CardContent></Card><Card><CardContent className="p-5"><p className="text-xs text-[#9c9487]">Classes attended</p><p className="mt-2 text-3xl font-semibold tracking-tight text-[#534538]">131</p><p className="mt-1 text-[11px] text-[#aaa49a]">Across all enrolled courses</p></CardContent></Card><Card><CardContent className="p-5"><p className="text-xs text-[#9c9487]">Classes missed</p><p className="mt-2 text-3xl font-semibold tracking-tight text-[#534538]">20</p><p className="mt-1 text-[11px] text-[#aaa49a]">Keep an eye on course requirements</p></CardContent></Card></div>
      <Card><CardHeader className="flex flex-col gap-3 border-b border-[#f4ebee] sm:flex-row sm:items-center sm:justify-between"><div><CardTitle>Course-wise attendance</CardTitle><p className="mt-1 text-xs text-[#a49d92]">Minimum attendance requirement shown as 75% for this demo.</p></div><select value={semester} onChange={(event) => setSemester(event.target.value)} className="h-9 rounded-lg border border-[#ebd9e0] bg-white px-3 text-xs text-[#7d4458] outline-none focus:ring-2 focus:ring-[#b27088]/20"><option>7th Semester</option><option>6th Semester</option><option>5th Semester</option></select></CardHeader><CardContent className="space-y-5 pt-5">{visibleAttendance.length ? visibleAttendance.map((item) => <div key={item.code}><div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-[#673748]">{item.name}</p><p className="mt-0.5 text-[10px] text-[#aaa49a]">{item.code} · {item.attended} of {item.total} classes attended</p></div><div className="flex items-center gap-3"><span className={`text-xs font-semibold ${item.rate < 75 ? "text-[#b66b62]" : "text-[#86455c]"}`}>{item.rate}%</span><Badge variant={item.rate >= 75 ? "success" : "danger"}>{item.rate >= 75 ? "On track" : "Below target"}</Badge></div></div><div className="relative mt-2 h-2 overflow-hidden rounded-full bg-[#f4ebef]"><div className={`h-full rounded-full ${item.rate >= 75 ? "bg-[#b37289]" : "bg-[#c77b70]"}`} style={{ width: `${item.rate}%` }} /><div className="absolute inset-y-[-2px] left-[75%] border-l border-dashed border-[#a68e6b]" /></div><p className="mt-1.5 flex items-center gap-1 text-[10px] text-[#aaa49a]"><TrendingUp className="size-3" /> {item.trend} compared with previous review</p></div>) : <div className="rounded-lg bg-[#faf7f8] px-4 py-8 text-center text-xs text-[#9e9689]">Demo attendance is available for the 7th semester only.</div>}</CardContent></Card>
      <div className="flex gap-3 rounded-xl border border-[#eddee3] bg-[#f6edf0] p-4"><Info className="mt-0.5 size-4 shrink-0 text-[#955069]" /><p className="text-xs leading-5 text-[#97516a]">Attendance figures are illustrative. Always confirm the official record with your department. Keep attendance comfortably above the university's applicable minimum.</p></div>
    </div>
  );
}
