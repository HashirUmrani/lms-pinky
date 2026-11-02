import { useMemo, useState } from "react";
import { CalendarClock, CheckCircle2, Clock3, FileUp, Filter, Paperclip, Search, Send } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

const initialAssignments = [
  { id: 1, title: "Project risk management report", course: "Software Project Management", code: "SWE-701", due: "03 Nov 2026", dateKey: "2026-11-03", status: "Pending", points: "20 marks", type: "Report" },
  { id: 2, title: "Search algorithms implementation", course: "Artificial Intelligence", code: "SWE-702", due: "05 Nov 2026", dateKey: "2026-11-05", status: "Pending", points: "15 marks", type: "Programming" },
  { id: 3, title: "Test case design document", course: "Software Quality Engineering", code: "SWE-703", due: "08 Nov 2026", dateKey: "2026-11-08", status: "Pending", points: "10 marks", type: "Document" },
  { id: 4, title: "Responsive web interface", course: "Web Engineering", code: "SWE-704", due: "28 Oct 2026", dateKey: "2026-10-28", status: "Submitted", points: "20 marks", type: "Practical" },
  { id: 5, title: "Project proposal outline", course: "Final Year Project – I", code: "SWE-705", due: "25 Oct 2026", dateKey: "2026-10-25", status: "Graded", points: "10 marks", grade: "9/10", type: "Proposal" },
];

const filters = ["All", "Pending", "Submitted", "Graded"];

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const [selected, setSelected] = useState(null);

  const visible = useMemo(() => assignments.filter((item) => {
    const matchesFilter = filter === "All" || item.status === filter;
    const matchesQuery = `${item.title} ${item.course} ${item.code}`.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  }), [assignments, filter, query]);

  const markSubmitted = (id) => {
    setAssignments((current) => current.map((item) => item.id === id ? { ...item, status: "Submitted" } : item));
    setSelected(null);
    setNotice("Assignment marked as submitted in this UI preview.");
  };

  const counts = {
    Pending: assignments.filter((item) => item.status === "Pending").length,
    Submitted: assignments.filter((item) => item.status === "Submitted").length,
    Graded: assignments.filter((item) => item.status === "Graded").length,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><Badge>COURSEWORK</Badge><h1 className="mt-2 text-[25px] font-semibold tracking-tight text-[#4a3e32]">Assignments & tasks</h1><p className="mt-1.5 text-sm text-[#9a9082]">Keep track of coursework, deadlines and submission status.</p></div><Button variant="outline" onClick={() => { setFilter("Pending"); setQuery(""); }}><CalendarClock className="size-4" /> View pending work</Button></div>

      <div className="grid gap-3 sm:grid-cols-3">{[{ label: "Pending", value: counts.Pending, note: "Needs your attention", icon: Clock3, tone: "sand" }, { label: "Submitted", value: counts.Submitted, note: "Awaiting evaluation", icon: Send, tone: "blue" }, { label: "Graded", value: counts.Graded, note: "Feedback available", icon: CheckCircle2, tone: "sage" }].map((item) => { const Icon = item.icon; return <Card key={item.label}><CardContent className="flex items-center justify-between p-4"><div><p className="text-xs text-[#9c9487]">{item.label}</p><p className="mt-2 text-2xl font-semibold text-[#534538]">{item.value}</p><p className="mt-1 text-[10px] text-[#aea8a0]">{item.note}</p></div><span className={`flex size-10 items-center justify-center rounded-xl ${item.tone === "sand" ? "bg-[#f3ede3] text-[#927653]" : item.tone === "blue" ? "bg-[#f4eaee] text-[#86455c]" : "bg-[#edf2eb] text-[#68806a]"}`}><Icon className="size-[18px]" /></span></CardContent></Card>; })}</div>

      {notice && <div role="status" className="flex items-center justify-between gap-3 rounded-lg border border-[#dce8dc] bg-[#eff5ee] px-4 py-3 text-xs text-[#58745c]">{notice}<button onClick={() => setNotice("")} className="font-semibold">Dismiss</button></div>}

      <Card>
        <CardContent className="p-4 sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"><div className="relative w-full lg:max-w-sm"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#ada59a]" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search assignments..." className="pl-9" /></div><div className="flex flex-wrap items-center gap-2"><Filter className="size-4 text-[#a29a8d]" />{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-lg px-3 py-2 text-xs font-medium transition ${filter === item ? "bg-[#f4eaee] text-[#86455c]" : "text-[#9a9082] hover:bg-[#f9f3f5]"}`}>{item}</button>)}</div></div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {visible.map((item) => <Card key={item.id} className="transition hover:shadow-[0_10px_24px_rgba(78,43,59,0.06)]"><CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:p-5"><span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${item.status === "Pending" ? "bg-[#f3ede3] text-[#927653]" : item.status === "Submitted" ? "bg-[#f4eaee] text-[#86455c]" : "bg-[#edf2eb] text-[#68806a]"}`}>{item.status === "Graded" ? <CheckCircle2 className="size-[18px]" /> : item.status === "Submitted" ? <Send className="size-[18px]" /> : <FileUp className="size-[18px]" />}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="text-sm font-semibold text-[#673748]">{item.title}</h2><Badge variant={item.status === "Pending" ? "warning" : item.status === "Submitted" ? "info" : "success"}>{item.status}</Badge></div><p className="mt-1 text-[11px] text-[#9c9487]">{item.course} · {item.code}</p><div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-[#aaa49a]"><span className="inline-flex items-center gap-1"><CalendarClock className="size-3" />Due {item.due}</span><span>{item.type}</span><span>{item.points}</span>{item.grade && <span className="font-semibold text-[#64816b]">Grade: {item.grade}</span>}</div></div><div className="flex shrink-0 gap-2">{item.status === "Pending" ? <Button size="sm" onClick={() => setSelected(item.id)}>Submit work</Button> : <Button size="sm" variant="outline" onClick={() => setNotice(item.status === "Graded" ? `Feedback for ${item.title}: Good work. Review the instructor comments in your course portal.` : `${item.title} was submitted. The instructor has not graded it yet.`)}>View status</Button>}</div></CardContent></Card>)}
        {visible.length === 0 && <div className="rounded-xl border border-dashed border-[#ebd9e0] bg-white p-10 text-center text-sm text-[#9c9487]">No assignments found for this filter.</div>}
      </div>

      {selected && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#392f26]/35 p-4" onClick={() => setSelected(null)}><div role="dialog" aria-modal="true" aria-labelledby="submit-title" className="w-full max-w-md rounded-2xl border border-[#efe2e7] bg-white p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-widest text-[#b26f87]">Submission preview</p><h2 id="submit-title" className="mt-2 text-lg font-semibold text-[#534538]">{assignments.find((item) => item.id === selected)?.title}</h2></div><button onClick={() => setSelected(null)} className="rounded-lg px-2 py-1 text-sm text-[#9c9487] hover:bg-[#f8f3f5]">✕</button></div><div className="mt-4 rounded-xl border border-dashed border-[#e2c9d2] bg-[#faf6f7] p-5 text-center"><Paperclip className="mx-auto size-6 text-[#ae6982]" /><p className="mt-2 text-xs font-medium text-[#894a61]">File upload placeholder</p><p className="mt-1 text-[10px] text-[#aba398]">Actual file upload requires backend integration.</p></div><p className="mt-3 text-[11px] leading-5 text-[#9c9487]">This preview can update the assignment status only. It does not upload or transmit a file.</p><div className="mt-5 flex justify-end gap-2"><Button variant="outline" onClick={() => setSelected(null)}>Cancel</Button><Button onClick={() => markSubmitted(selected)}>Mark as submitted</Button></div></div></div>}
    </div>
  );
}
