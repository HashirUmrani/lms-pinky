import {
  ArrowRight, BookOpen, CalendarCheck, CalendarDays, CheckCircle2,
  ClipboardCheck, Clock3, FileText, GraduationCap, Megaphone,
  NotebookTabs, UserRound, ArrowUpRight, CircleHelp,
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { StatCard } from "../components/dashboard/StatCard";
import { QuickAccessCard } from "../components/dashboard/QuickAccessCard";

const quickLinks = [
  { id: "courses", title: "My courses", description: "Open your registered semester courses", icon: BookOpen, tone: "blue" },
  { id: "timetable", title: "Class timetable", description: "See today's lectures and weekly schedule", icon: CalendarDays, tone: "sand" },
  { id: "assignments", title: "Assignments", description: "Track upcoming work and submissions", icon: ClipboardCheck, tone: "sage" },
  { id: "attendance", title: "Attendance", description: "Monitor attendance by course", icon: CalendarCheck, tone: "blue" },
  { id: "results", title: "Examination results", description: "Review semester grades and GPA", icon: NotebookTabs, tone: "sand" },
  { id: "announcements", title: "Announcements", description: "Read department and university notices", icon: Megaphone, tone: "sage" },
];

const todaySchedule = [
  { time: "09:00 – 10:30", course: "Software Project Management", room: "Room 12 · IT Centre", state: "Completed" },
  { time: "11:00 – 12:30", course: "Artificial Intelligence", room: "Lab 04 · CS Department", state: "Ongoing" },
  { time: "01:00 – 02:30", course: "Final Year Project – I", room: "Project Lab", state: "Upcoming" },
];

function SectionHeading({ title, description, action }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <div>
        <h2 className="text-[15px] font-semibold tracking-tight text-[#524336]">{title}</h2>
        {description && <p className="mt-1 text-xs text-[#9f978c]">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export default function DashboardPage({ onNavigate }) {
  const today = new Intl.DateTimeFormat("en-PK", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date());

  return (
    <div className="space-y-7">
      <div className="relative overflow-hidden rounded-2xl border border-[#eddee3] bg-gradient-to-r from-[#f4eaee] via-[#f7eff2] to-[#f4eee4] p-5 sm:p-7">
        <div className="absolute -right-16 -top-24 size-72 rounded-full border border-[#e7d3da]/80" />
        <div className="absolute -right-5 -top-12 size-52 rounded-full border border-[#e7d3da]/70" />
        <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge className="border-[#e8d1d9] bg-white/75 text-[#86455c]">STUDENT WORKSPACE</Badge>
              <span className="text-[11px] text-[#9c9487]">{today}</span>
            </div>
            <h1 className="text-[25px] font-semibold tracking-tight text-[#473b2f] sm:text-[30px]">Welcome back, Hashir <span aria-hidden="true">👋</span></h1>
            <p className="mt-1.5 max-w-xl text-sm leading-6 text-[#8c8273]">Your academic workspace is up to date. Here’s what needs your attention today.</p>
          </div>
          <Button variant="outline" className="w-fit border-[#e3cad3] bg-white/80 text-[#86455c] hover:bg-white" onClick={() => onNavigate("profile")}><UserRound className="size-4" /> View profile</Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={CalendarCheck} label="Attendance rate" value="86%" trend="+3.2%" note="compared to last month" tone="blue" />
        <StatCard icon={GraduationCap} label="Current GPA" value="3.67" note="out of 4.00" tone="sand" />
        <StatCard icon={BookOpen} label="Enrolled courses" value="06" note="7th semester" tone="sage" />
        <StatCard icon={ClipboardCheck} label="Pending tasks" value="03" note="1 due within 48 hours" tone="clay" />
      </div>

      <div className="grid gap-6 2xl:grid-cols-[minmax(0,1.6fr)_minmax(330px,0.9fr)]">
        <section className="min-w-0">
          <SectionHeading title="Your workspace" description="Jump straight into the services you use most." />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {quickLinks.map((item) => <QuickAccessCard key={item.id} {...item} onClick={() => onNavigate(item.id)} />)}
          </div>
        </section>

        <div className="space-y-5">
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between border-b border-[#f4ebee] pb-4">
              <div><CardTitle>Weekly class schedule</CardTitle><p className="mt-1 text-xs text-[#a49d92]">A snapshot of your upcoming classes</p></div>
              <span className="flex size-9 items-center justify-center rounded-xl bg-[#f4eaee] text-[#86455c]"><CalendarDays className="size-[18px]" /></span>
            </CardHeader>
            <CardContent className="space-y-0 pt-2">
              {todaySchedule.map((item, index) => (
                <div key={item.course} className="relative flex gap-3 py-3.5">
                  <div className="flex w-[88px] shrink-0 flex-col gap-1">
                    <span className="text-[11px] font-semibold text-[#8a4a61]">{item.time}</span>
                    <span className="text-[10px] text-[#aaa49a]">{index === 0 ? "Morning" : index === 1 ? "Midday" : "Afternoon"}</span>
                  </div>
                  <div className="relative min-w-0 flex-1 border-l border-[#f0e2e7] pl-4">
                    <span className={`absolute -left-[5px] top-1 size-2.5 rounded-full border-2 border-white ${item.state === "Ongoing" ? "bg-[#9a536d] ring-4 ring-[#f4eaee]" : item.state === "Completed" ? "bg-[#7d9a80]" : "bg-[#d7c3a2]"}`} />
                    <p className="text-xs font-semibold leading-5 text-[#663748]">{item.course}</p>
                    <p className="mt-0.5 text-[10px] text-[#a8a298]">{item.room}</p>
                    <span className={`mt-2 inline-flex rounded-md px-2 py-1 text-[9px] font-semibold ${item.state === "Ongoing" ? "bg-[#f4eaee] text-[#86455c]" : item.state === "Completed" ? "bg-[#edf3ed] text-[#65816a]" : "bg-[#f4eee4] text-[#9a7a4c]"}`}>{item.state}</span>
                  </div>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="mt-1 w-full justify-between text-[#924f67] hover:bg-[#f7f1f3]" onClick={() => onNavigate("timetable")}>View full timetable <ArrowRight className="size-4" /></Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div><CardTitle>Upcoming deadline</CardTitle><p className="mt-1 text-xs text-[#a49d92]">Don't miss your next submission</p></div>
              <span className="flex size-9 items-center justify-center rounded-xl bg-[#f3ede3] text-[#927653]"><Clock3 className="size-[18px]" /></span>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border border-[#eee5d7] bg-[#faf7f1] p-4">
                <div className="flex items-center justify-between gap-3"><Badge variant="warning">Due soon</Badge><span className="text-[10px] font-medium text-[#9b8059]">03 Nov 2026</span></div>
                <h3 className="mt-3 text-sm font-semibold text-[#683849]">Project risk management report</h3>
                <p className="mt-1 text-[11px] text-[#9c968d]">Software Project Management · Assignment 02</p>
                <Button size="sm" className="mt-4 w-full justify-center" onClick={() => onNavigate("assignments")}>Open assignments <ArrowRight className="size-3.5" /></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div><CardTitle>Recent academic activity</CardTitle><p className="mt-1 text-xs text-[#a49d92]">The latest updates from your courses</p></div>
            <Button variant="ghost" size="sm" className="text-[#924f67] hover:bg-[#f7f1f3]" onClick={() => onNavigate("announcements")}>All updates <ArrowUpRight className="size-3.5" /></Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { icon: Megaphone, title: "Seventh semester result notice updated", text: "Department of Software Engineering", time: "Today · 10:30 AM", tone: "blue" },
              { icon: CheckCircle2, title: "Attendance record published", text: "Software Project Management", time: "Yesterday", tone: "sage" },
              { icon: FileText, title: "New learning material uploaded", text: "Artificial Intelligence · Lecture 09", time: "29 Oct 2026", tone: "sand" },
            ].map((item) => {
              const Icon = item.icon;
              return <div key={item.title} className="flex items-start gap-3"><span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${item.tone === "blue" ? "bg-[#f4eaee] text-[#86455c]" : item.tone === "sage" ? "bg-[#edf2eb] text-[#68806a]" : "bg-[#f3ede3] text-[#927653]"}`}><Icon className="size-4" /></span><div className="min-w-0 flex-1"><p className="text-xs font-semibold text-[#69384a]">{item.title}</p><p className="mt-1 text-[11px] text-[#9f988d]">{item.text}</p></div><span className="shrink-0 text-[10px] text-[#b0aaa1]">{item.time}</span></div>;
            })}
          </CardContent>
        </Card>

        <Card className="border-[#e8e0d4] bg-[#f8f4ed]">
          <CardContent className="p-5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-white text-[#8f7857] shadow-sm"><CircleHelp className="size-[18px]" /></span>
            <h3 className="mt-4 text-sm font-semibold text-[#5a5246]">Need a hand?</h3>
            <p className="mt-1.5 text-xs leading-5 text-[#969087]">Find guidance for portal access, academic records, course registration and student services.</p>
            <Button variant="outline" size="sm" className="mt-4 border-[#dfd4c3] bg-white text-[#6f6049] hover:bg-[#fdfbf8]" onClick={() => onNavigate("support")}>Visit support centre <ArrowRight className="size-3.5" /></Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
