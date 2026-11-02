import {
  BookOpen, Building2, CalendarCheck, CalendarDays, ClipboardCheck,
  FileText, GraduationCap, Home, Library, LogOut, Megaphone,
  NotebookTabs, School, WalletCards, X, LifeBuoy,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { UniversityMark } from "./UniversityMark";
import { cn } from "../../lib/utils";

const groups = [
  {
    label: "WORKSPACE",
    items: [
      { id: "dashboard", label: "Overview", icon: Home },
      { id: "timetable", label: "Class timetable", icon: CalendarDays },
      { id: "announcements", label: "Announcements", icon: Megaphone, count: "2" },
    ],
  },
  {
    label: "LEARNING",
    items: [
      { id: "courses", label: "My courses", icon: BookOpen },
      { id: "classroom", label: "Virtual classroom", icon: GraduationCap },
      { id: "assignments", label: "Assignments", icon: ClipboardCheck, count: "3" },
      { id: "attendance", label: "Attendance", icon: CalendarCheck },
      { id: "results", label: "Examination results", icon: NotebookTabs },
    ],
  },
  {
    label: "UNIVERSITY SERVICES",
    items: [
      { id: "program", label: "Degree programme", icon: School },
      { id: "eportal", label: "Eportal dashboard", icon: Building2 },
      { id: "payments", label: "Fee & payments", icon: WalletCards },
      { id: "scholarship", label: "Scholarship & aid", icon: WalletCards },
      { id: "downloads", label: "Downloads centre", icon: FileText },
      { id: "library", label: "University library", icon: Library },
    ],
  },
];

export const pageTitles = {
  dashboard: "Student overview",
  timetable: "Class timetable",
  announcements: "Announcements",
  courses: "My courses",
  classroom: "Virtual classroom",
  assignments: "Assignments & tasks",
  attendance: "Attendance overview",
  results: "Examination results",
  program: "Degree programme",
  eportal: "Eportal dashboard",
  payments: "Fee & payments",
  scholarship: "Scholarship & financial aid",
  downloads: "Downloads centre",
  library: "University library",
  admission: "Admission services",
  profile: "Student profile",
  support: "Student support centre",
  notifications: "Notifications",
  settings: "Preferences",
};

export function Sidebar({ currentPage, onNavigate, onLogout, open, onClose }) {
  return (
    <>
      {open && <button aria-label="Close navigation" onClick={onClose} className="fixed inset-0 z-40 bg-[#352c23]/30 backdrop-blur-[2px] lg:hidden" />}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-[#efe2e7] bg-white transition-transform duration-300 lg:static lg:z-auto lg:w-[252px] lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full",
      )}>
        <div className="flex h-[76px] items-center justify-between border-b border-[#f4ebee] px-5">
          <UniversityMark compact />
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose} aria-label="Close sidebar"><X /></Button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-5">
          <div className="mb-5 rounded-xl border border-[#e8e0d4] bg-[#f6f1e9] p-3.5">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8a7557]">
              <span className="size-1.5 rounded-full bg-[#ab627c]" /> Student workspace
            </div>
            <p className="mt-2 text-sm font-semibold text-[#493c30]">Academic session 2026</p>
            <p className="mt-0.5 text-xs text-[#928c82]">Fall · 7th semester</p>
          </div>

          <nav aria-label="Main navigation" className="space-y-5">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.15em] text-[#afa9a0]">{group.label}</p>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const active = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => { onNavigate(item.id); onClose?.(); }}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b27088]",
                          active
                            ? "bg-[#f4eaee] text-[#6f354a] shadow-[inset_3px_0_0_#9a536d]"
                            : "text-[#7c7365] hover:bg-[#f9f4f6] hover:text-[#564739]",
                        )}
                      >
                        <Icon className={cn("size-[17px] shrink-0", active ? "text-[#86455c]" : "text-[#aaa296] group-hover:text-[#9a536d]")} strokeWidth={1.8} />
                        <span className="min-w-0 flex-1">{item.label}</span>
                        {item.count && <span className={cn("rounded-full px-1.5 py-0.5 text-[9px] font-semibold", active ? "bg-white text-[#86455c]" : "bg-[#f2eee7] text-[#8e806c]")}>{item.count}</span>}
                        {active && <span className="size-1.5 rounded-full bg-[#9a536d]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="border-t border-[#f4ebee] p-4">
          <div className="flex items-center justify-between rounded-xl px-2 py-2">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#673849]">Need assistance?</p>
              <p className="mt-0.5 text-[11px] text-[#a7a198]">Student support centre</p>
            </div>
            <Button variant="ghost" size="icon" className="size-8 text-[#a95f7a]" onClick={() => onNavigate("support")} aria-label="Open support"><LifeBuoy className="size-4" /></Button>
          </div>
          <Separator className="my-2" />
          <button onClick={onLogout} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-xs font-medium text-[#9a9287] transition hover:bg-[#f9f4f6] hover:text-[#b66b62]">
            <LogOut className="size-4" /> Sign out
          </button>
        </div>
      </aside>
    </>
  );
}
