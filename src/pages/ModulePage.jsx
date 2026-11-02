import {
  ArrowRight, BookOpen, CalendarCheck, ClipboardList, Download, FileText,
  GraduationCap, Library, LifeBuoy, Mail, ShieldCheck, UserRound, WalletCards,
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { EmptyState } from "../components/ui/empty-state";

const moduleInfo = {
  eportal: { title: "Eportal dashboard", eyebrow: "UNIVERSITY PORTAL", description: "A central place for your university account, academic services and student information.", icon: GraduationCap, cards: ["Personal information", "Fee and payment details", "University announcements"] },
  program: { title: "Choose your program", eyebrow: "ACADEMIC PROGRAMMES", description: "Review programme information and your current degree registration.", icon: GraduationCap, cards: ["BS Software Engineering", "BS Computer Science", "BS Information Technology"] },
  classroom: { title: "Virtual classroom", eyebrow: "LEARNING SPACE", description: "Access your course materials, class links and learning activities.", icon: BookOpen, cards: ["Artificial Intelligence", "Software Project Management", "Software Quality Engineering"] },
  attendance: { title: "Attendance overview", eyebrow: "ACADEMIC RECORDS", description: "Monitor your attendance record across the current semester.", icon: CalendarCheck, cards: ["Artificial Intelligence", "Software Project Management", "Web Engineering"] },
  courses: { title: "Course selection", eyebrow: "SEMESTER REGISTRATION", description: "Review enrolled courses and manage your semester course selection.", icon: ClipboardList, cards: ["Registered courses", "Course add / drop", "Examination form"] },
  admission: { title: "Admission services", eyebrow: "STUDENT SERVICES", description: "Find admission-related details and student payment information.", icon: FileText, cards: ["Admission record", "Fee details", "Verification status"] },
  scholarship: { title: "Scholarship & financial aid", eyebrow: "STUDENT SUPPORT", description: "Review available financial assistance and application information.", icon: WalletCards, cards: ["Available scholarships", "Application status", "Financial aid office"] },
  downloads: { title: "Downloads centre", eyebrow: "DOCUMENTS & FORMS", description: "Access useful university forms, notices and academic documents.", icon: Download, cards: ["Student forms", "Academic calendar", "University notices"] },
  library: { title: "Koha library", eyebrow: "LIBRARY SERVICES", description: "Explore library resources and manage your reading activity.", icon: Library, cards: ["Library catalogue", "Borrowed items", "Library account"] },
  profile: { title: "Student profile", eyebrow: "MY ACCOUNT", description: "Your registered identity and academic information.", icon: UserRound, cards: ["Personal information", "Academic information", "Account security"] },
  support: { title: "Student support centre", eyebrow: "HELP & GUIDANCE", description: "Find help with your portal access, student records and university services.", icon: LifeBuoy, cards: ["Login assistance", "Academic record support", "Contact IT support"] },
  notifications: { title: "Notifications", eyebrow: "UPDATES", description: "Recent notices and updates associated with your student account.", icon: Mail, cards: ["Examination notice updated", "Attendance record published", "Course material uploaded"] },
  settings: { title: "Preferences", eyebrow: "ACCOUNT SETTINGS", description: "Manage your student portal preferences and account experience.", icon: ShieldCheck, cards: ["Profile preferences", "Notification preferences", "Security information"] },
};

const courseData = [
  { name: "Artificial Intelligence", code: "SWE-702", detail: "Attendance: 89%", status: "Active" },
  { name: "Software Project Management", code: "SWE-701", detail: "Attendance: 86%", status: "Active" },
  { name: "Software Quality Engineering", code: "SWE-703", detail: "Attendance: 84%", status: "Active" },
];

export default function ModulePage({ pageId, onNavigate }) {
  const info = moduleInfo[pageId] || moduleInfo.support;
  const Icon = info.icon;

  if (pageId === "profile") {
    return (
      <div className="space-y-6">
        <div><Badge>{info.eyebrow}</Badge><h1 className="mt-2 text-[25px] font-semibold tracking-tight text-[#4a3e32]">{info.title}</h1><p className="mt-1.5 text-sm text-[#9a9082]">{info.description}</p></div>
        <Card>
          <div className="h-20 bg-[#f4eaee]" />
          <CardContent className="relative px-5 pb-6 sm:px-7">
            <div className="-mt-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-3"><div className="flex size-16 items-center justify-center rounded-2xl border-4 border-white bg-[#f4ecdf] text-lg font-semibold text-[#765d3d] shadow-sm">HU</div><div className="pb-1"><h2 className="text-lg font-semibold text-[#534437]">Hashir Umrani</h2><p className="text-xs text-[#91897d]">Student · Software Engineering</p></div></div>
              <Badge variant="success">Active student</Badge>
            </div>
            <div className="mt-6 grid gap-4 border-t border-[#f2e6ea] pt-5 sm:grid-cols-2 lg:grid-cols-3">
              {[["Roll number", "2K23/SWE/66"], ["Degree programme", "BS Software Engineering"], ["Department", "Faculty of Engineering & Technology"], ["Current semester", "7th Semester"], ["Admission session", "2023"], ["University", "University of Sindh, Jamshoro"]].map(([label, value]) => <div key={label}><p className="text-[10px] font-semibold uppercase tracking-wide text-[#a0988c]">{label}</p><p className="mt-1.5 text-sm font-medium text-[#4a443a]">{value}</p></div>)}
            </div>
          </CardContent>
        </Card>
        <div className="rounded-xl border border-[#e8dfd1] bg-[#f1e9dc] p-4 text-xs leading-5 text-[#786a55]">Profile details shown here are illustrative. Connect the official student profile service before using this screen for real records.</div>
      </div>
    );
  }

  if (pageId === "attendance") {
    return (
      <div className="space-y-6">
        <div><Badge>{info.eyebrow}</Badge><h1 className="mt-2 text-[25px] font-semibold tracking-tight text-[#4a3e32]">{info.title}</h1><p className="mt-1.5 text-sm text-[#9a9082]">{info.description}</p></div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[ ["Overall attendance", "86%"], ["Classes attended", "74"], ["Classes missed", "12"] ].map(([label, value]) => <Card key={label}><CardContent className="p-5"><p className="text-xs text-[#8d8579]">{label}</p><p className="mt-2 text-3xl font-semibold tracking-tight text-[#534437]">{value}</p></CardContent></Card>)}
        </div>
        <Card><CardHeader><CardTitle>Course attendance</CardTitle></CardHeader><CardContent className="space-y-5">{courseData.map((course) => <div key={course.code}><div className="flex flex-wrap items-center justify-between gap-2"><div><p className="text-sm font-semibold text-[#69394a]">{course.name}</p><p className="mt-0.5 text-[11px] text-[#a29a8d]">{course.code}</p></div><span className="text-sm font-semibold text-[#6e5b40]">{course.detail.replace("Attendance: ", "")}</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-[#eeeae3]"><div className="h-full rounded-full bg-[#b27088]" style={{ width: course.detail.replace("Attendance: ", "") }} /></div></div>)}</CardContent></Card>
      </div>
    );
  }

  if (pageId === "notifications") {
    return (
      <div className="space-y-6">
        <div><Badge>{info.eyebrow}</Badge><h1 className="mt-2 text-[25px] font-semibold tracking-tight text-[#4a3e32]">{info.title}</h1><p className="mt-1.5 text-sm text-[#9a9082]">{info.description}</p></div>
        <Card><CardContent className="divide-y divide-[#f2e6ea] p-0">{[
          ["Examination notice updated", "Department result notice board has new information.", "Today · 10:30 AM"],
          ["Attendance record published", "Your Software Project Management attendance has been updated.", "Yesterday · 02:15 PM"],
          ["Course material uploaded", "New learning resources are available in Artificial Intelligence.", "28 Oct 2026"],
        ].map(([title, description, time]) => <div key={title} className="flex gap-3 p-5"><span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#f4eaee] text-[#86455c]"><Mail className="size-4" /></span><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-[#484238]">{title}</p><p className="mt-1 text-xs leading-5 text-[#9a9184]">{description}</p><p className="mt-2 text-[10px] text-[#a49b8e]">{time}</p></div><Badge variant="default">New</Badge></div>)}</CardContent></Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><Badge>{info.eyebrow}</Badge><h1 className="mt-2 text-[25px] font-semibold tracking-tight text-[#4a3e32]">{info.title}</h1><p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#9a9082]">{info.description}</p></div>
        <Button variant="outline" className="w-fit" onClick={() => onNavigate("dashboard")}>Back to dashboard <ArrowRight className="size-4" /></Button>
      </div>

      {pageId === "classroom" ? (
        <div className="grid gap-4 lg:grid-cols-2">{courseData.map((course) => <Card key={course.code}><CardContent className="flex items-start gap-4 p-5"><span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f4eaee] text-[#86455c]"><BookOpen className="size-5" /></span><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-[#454035]">{course.name}</p><p className="mt-1 text-xs text-[#92897d]">{course.code} · 7th semester</p><div className="mt-3 flex flex-wrap items-center gap-2"><Badge variant="success">{course.status}</Badge><span className="text-[11px] text-[#999184]">Learning materials and class activity</span></div></div></CardContent></Card>)}</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{info.cards.map((item, index) => <Card key={item} className="transition hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(49,39,25,0.065)]"><CardContent className="p-5"><span className="flex size-10 items-center justify-center rounded-xl bg-[#f4eaee] text-[#86455c]"><Icon className="size-[18px]" /></span><h2 className="mt-4 text-sm font-semibold text-[#464035]">{item}</h2><p className="mt-1 text-xs leading-5 text-[#92897d]">University information and student service details.</p><Button variant="ghost" size="sm" className="mt-3 -ml-2" onClick={() => onNavigate(pageId === "program" ? "profile" : "support")}>Open section <ArrowRight className="size-3.5" /></Button></CardContent></Card>)}</div>
      )}

      <EmptyState icon={Icon} title="Connect this module to university services" description="This screen is a frontend-only starting point. Replace the sample content with official LMS records and actions when integrating your backend." />
    </div>
  );
}
