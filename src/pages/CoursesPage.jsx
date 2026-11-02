import { useMemo, useState } from "react";
import { BookOpen, Search, ChevronRight, Clock3, FileText, Filter } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

const courses = [
  { code: "SWE-701", name: "Software Project Management", teacher: "Ms. Nazish Basir", schedule: "Mon · 09:00 AM", room: "Room 12 · IT Centre", progress: 72, attendance: 86, credits: 3, color: "blue", description: "Project planning, estimation, risk management and software team leadership." },
  { code: "SWE-702", name: "Artificial Intelligence", teacher: "Dr. A. M. Memon", schedule: "Tue · 11:00 AM", room: "Lab 04 · CS Department", progress: 64, attendance: 89, credits: 3, color: "sand", description: "Intelligent agents, search strategies, machine learning and applied AI." },
  { code: "SWE-703", name: "Software Quality Engineering", teacher: "Mr. Farhan Shaikh", schedule: "Wed · 10:00 AM", room: "Room 08 · FET", progress: 58, attendance: 84, credits: 3, color: "sage", description: "Software testing, quality assurance, process improvement and metrics." },
  { code: "SWE-704", name: "Web Engineering", teacher: "Ms. Sana Memon", schedule: "Thu · 12:00 PM", room: "Web Lab · IT Centre", progress: 81, attendance: 91, credits: 3, color: "blue", description: "Modern web application architecture, frameworks, APIs and deployment." },
  { code: "SWE-705", name: "Final Year Project – I", teacher: "Project Supervisor", schedule: "Fri · 01:00 PM", room: "Project Lab", progress: 48, attendance: 82, credits: 3, color: "sand", description: "Research, requirements, design and implementation planning for the final-year project." },
  { code: "SWE-706", name: "Professional Practices", teacher: "Dr. S. Ahmed", schedule: "Mon · 02:00 PM", room: "Seminar Hall", progress: 76, attendance: 88, credits: 2, color: "sage", description: "Professional ethics, communication, teamwork and workplace practices." },
];

export default function CoursesPage({ onNavigate }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("All courses");
  const [expanded, setExpanded] = useState(null);
  const filtered = useMemo(() => courses.filter((course) => {
    const matches = `${course.name} ${course.code} ${course.teacher}`.toLowerCase().includes(query.toLowerCase());
    return matches && (selected === "All courses" || (selected === "High attendance" ? course.attendance >= 85 : course.attendance < 85));
  }), [query, selected]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><Badge>7TH SEMESTER · 2026</Badge><h1 className="mt-2 text-[25px] font-semibold tracking-tight text-[#4a3e32]">My courses</h1><p className="mt-1.5 text-sm text-[#9a9082]">Your enrolled subjects, course progress and class information.</p></div>
        <div className="flex gap-2"><Button variant="outline" onClick={() => onNavigate("timetable")}><Clock3 className="size-4" /> Timetable</Button><Button onClick={() => onNavigate("assignments")}>Assignments <ChevronRight className="size-4" /></Button></div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Card><CardContent className="p-4"><p className="text-xs text-[#9c9487]">Registered courses</p><p className="mt-2 text-2xl font-semibold text-[#534538]">06</p><p className="mt-1 text-[11px] text-[#aea8a0]">17 credit hours</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-xs text-[#9c9487]">Average course progress</p><p className="mt-2 text-2xl font-semibold text-[#534538]">67%</p><p className="mt-1 text-[11px] text-[#aea8a0]">Across all subjects</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-xs text-[#9c9487]">Overall attendance</p><p className="mt-2 text-2xl font-semibold text-[#534538]">86%</p><p className="mt-1 text-[11px] text-[#aea8a0]">Above minimum requirement</p></CardContent></Card>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#ada59a]" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by course, code or teacher..." className="pl-9" /></div>
        <div className="flex items-center gap-2"><Filter className="size-4 text-[#a29a8d]" /><select value={selected} onChange={(event) => setSelected(event.target.value)} className="h-10 rounded-lg border border-[#ebd9e0] bg-white px-3 text-xs text-[#7d4458] outline-none focus:ring-2 focus:ring-[#b27088]/20"><option>All courses</option><option>High attendance</option><option>Needs attention</option></select></div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {filtered.map((course) => (
          <Card key={course.code} className="overflow-hidden transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(78,43,59,0.07)]">
            <div className={`h-1.5 ${course.color === "blue" ? "bg-[#b37289]" : course.color === "sand" ? "bg-[#c5ad89]" : "bg-[#8fa58f]"}`} />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3"><span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${course.color === "blue" ? "bg-[#f4eaee] text-[#86455c]" : course.color === "sand" ? "bg-[#f3ede3] text-[#927653]" : "bg-[#edf2eb] text-[#68806a]"}`}><BookOpen className="size-[18px]" /></span><div className="min-w-0"><p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#aba49a]">{course.code} · {course.credits} credits</p><h2 className="mt-1 text-sm font-semibold text-[#58493b]">{course.name}</h2><p className="mt-1 text-[11px] text-[#a19a8f]">{course.teacher}</p></div></div>
                <Badge variant={course.attendance >= 85 ? "success" : "warning"}>{course.attendance}% attendance</Badge>
              </div>
              <p className="mt-4 text-xs leading-5 text-[#9a9081]">{course.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 rounded-lg bg-[#faf7f8] p-3"><div><p className="text-[10px] text-[#aca59a]">Next class</p><p className="mt-1 text-xs font-medium text-[#7d4358]">{course.schedule}</p></div><div><p className="text-[10px] text-[#aca59a]">Location</p><p className="mt-1 truncate text-xs font-medium text-[#7d4358]">{course.room}</p></div></div>
              <div className="mt-4 flex items-center justify-between"><div className="flex-1 pr-5"><div className="mb-1.5 flex items-center justify-between text-[10px]"><span className="text-[#9f978c]">Course progress</span><span className="font-semibold text-[#944f68]">{course.progress}%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-[#f2e8eb]"><div className="h-full rounded-full bg-[#ad6680]" style={{ width: `${course.progress}%` }} /></div></div><Button variant="ghost" size="sm" onClick={() => setExpanded(expanded === course.code ? null : course.code)}>{expanded === course.code ? "Close" : "Details"} <ChevronRight className={`size-3.5 transition ${expanded === course.code ? "rotate-90" : ""}`} /></Button></div>
              {expanded === course.code && <div className="mt-4 rounded-lg border border-[#f1e6ea] bg-white p-3"><p className="text-xs font-semibold text-[#7f455a]">Course resources</p><div className="mt-2 flex flex-wrap gap-2"><Button variant="outline" size="sm" onClick={() => onNavigate("classroom")}><FileText className="size-3.5" /> Learning materials</Button><Button variant="outline" size="sm" onClick={() => onNavigate("assignments")}><ClipboardCheck className="size-3.5" /> Course assignments</Button></div></div>}
            </CardContent>
          </Card>
        ))}
      </div>
      {filtered.length === 0 && <div className="rounded-xl border border-dashed border-[#ebd9e0] bg-white p-10 text-center text-sm text-[#9c9487]">No courses match your search.</div>}
    </div>
  );
}
