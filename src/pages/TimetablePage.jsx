import { useMemo, useState } from "react";
import { CalendarDays, Clock3, MapPin, ChevronLeft, ChevronRight, CalendarCheck } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const classes = [
  { day: "Monday", start: "09:00 AM", end: "10:30 AM", course: "Software Project Management", code: "SWE-701", teacher: "Ms. Nazish Basir", room: "Room 12 · IT Centre", type: "Lecture" },
  { day: "Monday", start: "02:00 PM", end: "03:00 PM", course: "Professional Practices", code: "SWE-706", teacher: "Dr. S. Ahmed", room: "Seminar Hall", type: "Lecture" },
  { day: "Tuesday", start: "11:00 AM", end: "12:30 PM", course: "Artificial Intelligence", code: "SWE-702", teacher: "Dr. A. M. Memon", room: "Lab 04 · CS Department", type: "Lab" },
  { day: "Wednesday", start: "10:00 AM", end: "11:30 AM", course: "Software Quality Engineering", code: "SWE-703", teacher: "Mr. Farhan Shaikh", room: "Room 08 · FET", type: "Lecture" },
  { day: "Thursday", start: "12:00 PM", end: "01:30 PM", course: "Web Engineering", code: "SWE-704", teacher: "Ms. Sana Memon", room: "Web Lab · IT Centre", type: "Lab" },
  { day: "Friday", start: "01:00 PM", end: "02:30 PM", course: "Final Year Project – I", code: "SWE-705", teacher: "Project Supervisor", room: "Project Lab", type: "Project" },
];

export default function TimetablePage() {
  const [day, setDay] = useState("Monday");
  const selectedClasses = useMemo(() => classes.filter((item) => item.day === day), [day]);
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><Badge>FALL SEMESTER · 2026</Badge><h1 className="mt-2 text-[25px] font-semibold tracking-tight text-[#4a3e32]">Class timetable</h1><p className="mt-1.5 text-sm text-[#9a9082]">Your weekly lecture, laboratory and project schedule.</p></div><Button variant="outline" onClick={() => window.print()}><CalendarCheck className="size-4" /> Print schedule</Button></div>
      <div className="grid gap-3 sm:grid-cols-3"><Card><CardContent className="p-4"><p className="text-xs text-[#9e9689]">Weekly classes</p><p className="mt-2 text-2xl font-semibold text-[#534538]">06</p></CardContent></Card><Card><CardContent className="p-4"><p className="text-xs text-[#9e9689]">Class days</p><p className="mt-2 text-2xl font-semibold text-[#534538]">05</p></CardContent></Card><Card><CardContent className="p-4"><p className="text-xs text-[#9e9689]">Total credit hours</p><p className="mt-2 text-2xl font-semibold text-[#534538]">17</p></CardContent></Card></div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b border-[#f4ebee]"><div><CardTitle>Weekly schedule</CardTitle><p className="mt-1 text-xs text-[#a49d92]">Select a day to see scheduled classes.</p></div><span className="flex size-9 items-center justify-center rounded-xl bg-[#f4eaee] text-[#86455c]"><CalendarDays className="size-4" /></span></CardHeader>
        <CardContent className="p-4 sm:p-5">
          <div className="mb-5 grid grid-cols-5 gap-2">{week.map((item) => <button key={item} onClick={() => setDay(item)} className={`rounded-xl border px-2 py-3 text-center transition ${day === item ? "border-[#d8b6c2] bg-[#f4eaee] text-[#7b3f55] shadow-sm" : "border-[#f1e5e9] bg-white text-[#9b9284] hover:bg-[#faf7f8]"}`}><span className="block text-[10px] font-medium sm:text-xs">{item.slice(0, 3)}</span><span className="mt-1 block text-[9px] opacity-70">{week.indexOf(item) + 2} Nov</span></button>)}</div>
          <div className="flex items-center justify-between border-b border-[#f4ebee] pb-3"><div><h3 className="text-sm font-semibold text-[#673748]">{day}</h3><p className="mt-0.5 text-[11px] text-[#a9a298]">{selectedClasses.length} scheduled {selectedClasses.length === 1 ? "class" : "classes"}</p></div><div className="flex gap-1"><Button variant="ghost" size="icon" className="size-8" onClick={() => setDay(week[Math.max(0, week.indexOf(day) - 1)])} disabled={day === week[0]}><ChevronLeft className="size-4" /></Button><Button variant="ghost" size="icon" className="size-8" onClick={() => setDay(week[Math.min(week.length - 1, week.indexOf(day) + 1)])} disabled={day === week[week.length - 1]}><ChevronRight className="size-4" /></Button></div></div>
          {selectedClasses.length ? <div className="space-y-3 pt-4">{selectedClasses.map((item) => <div key={item.code} className="flex flex-col gap-3 rounded-xl border border-[#f1e4e9] bg-white p-4 sm:flex-row sm:items-center"><div className="flex w-full items-center gap-2 rounded-lg bg-[#f8f2f4] px-3 py-2 sm:w-32 sm:flex-col sm:items-start"><Clock3 className="size-4 text-[#a55974] sm:hidden" /><span className="text-xs font-semibold text-[#87485f]">{item.start}</span><span className="text-[10px] text-[#aaa297]">to {item.end}</span></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h4 className="text-sm font-semibold text-[#673748]">{item.course}</h4><Badge variant={item.type === "Lab" ? "info" : item.type === "Project" ? "warning" : "secondary"}>{item.type}</Badge></div><p className="mt-1 text-[11px] text-[#a79f93]">{item.code} · {item.teacher}</p><p className="mt-2 flex items-center gap-1.5 text-[11px] text-[#908574]"><MapPin className="size-3.5" />{item.room}</p></div></div>)}</div> : <div className="py-12 text-center text-sm text-[#a8a196]">No classes scheduled for this day.</div>}
        </CardContent>
      </Card>
    </div>
  );
}
