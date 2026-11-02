import { useMemo, useState } from "react";
import { AlertCircle, CalendarDays, Download, FileText, Printer } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Select } from "../components/ui/select";

const resultRows = [
  { semester: "Seventh Semester", year: "2026", type: "Regular", code: "SWE-701", course: "Software Project Management", credit: 3, marks: "86", grade: "A", points: "3.75" },
  { semester: "Seventh Semester", year: "2026", type: "Regular", code: "SWE-702", course: "Artificial Intelligence", credit: 3, marks: "89", grade: "A", points: "3.75" },
  { semester: "Seventh Semester", year: "2026", type: "Regular", code: "SWE-703", course: "Software Quality Engineering", credit: 3, marks: "82", grade: "A-", points: "3.50" },
  { semester: "Seventh Semester", year: "2026", type: "Regular", code: "SWE-704", course: "Web Engineering", credit: 3, marks: "91", grade: "A+", points: "4.00" },
  { semester: "Seventh Semester", year: "2026", type: "Regular", code: "SWE-705", course: "Final Year Project – I", credit: 3, marks: "88", grade: "A", points: "3.75" },
];

export default function ResultsPage() {
  const [semester, setSemester] = useState("Seventh Semester");
  const [year, setYear] = useState("2026");
  const [examType, setExamType] = useState("Regular");

  const filteredRows = useMemo(() => resultRows.filter((row) => row.semester === semester && row.year === year && row.type === examType), [semester, year, examType]);

  const handlePrint = () => window.print();

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="default">ACADEMIC RECORDS</Badge>
          <h1 className="mt-2 text-[25px] font-semibold tracking-tight text-[#4a3e32]">Examination results</h1>
          <p className="mt-1.5 text-sm text-[#9a9082]">Review your semester examination record and course grades.</p>
        </div>
        <Button variant="outline" onClick={handlePrint} className="w-fit print:hidden"><Printer className="size-4" /> Print results</Button>
      </div>

      <div className="flex gap-3 rounded-xl border border-[#ecdce2] bg-[#f6edf0] p-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/70 text-[#955069]"><AlertCircle className="size-[18px]" /></span>
        <div>
          <p className="text-sm font-semibold text-[#5f4d35]">Department result information</p>
          <p className="mt-1 text-xs leading-5 text-[#7d705d]">This is a departmental notice board provided for students’ information. It is not an officially announced result by the Controller of Examinations.</p>
        </div>
      </div>

      <Card>
        <CardHeader className="border-b border-[#f2e6ea] pb-4">
          <div className="flex items-center gap-2"><span className="flex size-8 items-center justify-center rounded-lg bg-[#f4eaee] text-[#86455c]"><CalendarDays className="size-4" /></span><div><CardTitle>Result filters</CardTitle><p className="mt-1 text-xs text-[#a29a8d]">Choose the semester and examination details.</p></div></div>
        </CardHeader>
        <CardContent className="grid gap-4 pt-5 sm:grid-cols-3">
          <div className="space-y-2"><Label htmlFor="semester">Select semester</Label><Select id="semester" value={semester} onChange={(event) => setSemester(event.target.value)}><option>Seventh Semester</option><option>Sixth Semester</option><option>Fifth Semester</option><option>Fourth Semester</option></Select></div>
          <div className="space-y-2"><Label htmlFor="exam-year">Exam year</Label><Select id="exam-year" value={year} onChange={(event) => setYear(event.target.value)}><option value="2026">2026</option><option value="2025">2025</option><option value="2024">2024</option></Select></div>
          <div className="space-y-2"><Label htmlFor="exam-type">Exam type</Label><Select id="exam-type" value={examType} onChange={(event) => setExamType(event.target.value)}><option>Regular</option><option>Improvement</option><option>Supplementary</option></Select></div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between gap-3 border-b border-[#f2e6ea]">
          <div><CardTitle>Student result statement</CardTitle><p className="mt-1 text-xs text-[#a29a8d]">Examination record based on selected filters.</p></div>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#f4eaee] text-[#86455c]"><FileText className="size-4" /></span>
        </CardHeader>
        <CardContent className="pt-5">
          <div className="grid gap-3 rounded-xl bg-[#faf5f7] p-4 sm:grid-cols-2 lg:grid-cols-4">
            <div><p className="text-[10px] font-medium uppercase tracking-wide text-[#9c9386]">Roll number</p><p className="mt-1 text-sm font-semibold text-[#403a31]">2K23/SWE/66</p></div>
            <div><p className="text-[10px] font-medium uppercase tracking-wide text-[#9c9386]">Exam year</p><p className="mt-1 text-sm font-semibold text-[#403a31]">{year}</p></div>
            <div><p className="text-[10px] font-medium uppercase tracking-wide text-[#9c9386]">Exam type</p><p className="mt-1 text-sm font-semibold text-[#403a31]">{examType}</p></div>
            <div><p className="text-[10px] font-medium uppercase tracking-wide text-[#9c9386]">Semester</p><p className="mt-1 text-sm font-semibold text-[#403a31]">{semester}</p></div>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-[#f0e3e8] bg-[#faf7f8] text-[10px] uppercase tracking-[0.08em] text-[#8d8579]">
                  <th className="px-3 py-3 font-semibold">Course code</th>
                  <th className="px-3 py-3 font-semibold">Course title</th>
                  <th className="px-3 py-3 text-center font-semibold">Credit hours</th>
                  <th className="px-3 py-3 text-center font-semibold">Marks</th>
                  <th className="px-3 py-3 text-center font-semibold">Grade</th>
                  <th className="px-3 py-3 text-center font-semibold">Grade points</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.length > 0 ? filteredRows.map((row, index) => (
                  <tr key={row.code} className={`border-b border-[#f0ece5] transition-colors hover:bg-[#fcfaf6] ${index % 2 ? "bg-[#fdfcf9]" : "bg-white"}`}>
                    <td className="px-3 py-3.5 font-medium text-[#756a5a]">{row.code}</td>
                    <td className="px-3 py-3.5 font-medium text-[#49443a]">{row.course}</td>
                    <td className="px-3 py-3.5 text-center text-[#6e675c]">{row.credit}</td>
                    <td className="px-3 py-3.5 text-center text-[#6e675c]">{row.marks}</td>
                    <td className="px-3 py-3.5 text-center"><Badge variant="success">{row.grade}</Badge></td>
                    <td className="px-3 py-3.5 text-center font-semibold text-[#514737]">{row.points}</td>
                  </tr>
                )) : (
                  <tr><td colSpan="6" className="px-4 py-12 text-center"><p className="text-sm font-medium text-[#5f574b]">No demo result is available for this selection.</p><p className="mt-1 text-xs text-[#999184]">Try Seventh Semester · 2026 · Regular.</p></td></tr>
                )}
              </tbody>
            </table>
          </div>

          {filteredRows.length > 0 && <div className="mt-4 flex flex-col justify-between gap-3 rounded-lg border border-[#eee8de] bg-[#faf7f8] p-3.5 sm:flex-row sm:items-center"><p className="text-xs text-[#80786c]">Showing <strong className="text-[#514a3f]">{filteredRows.length}</strong> course records · Demo data</p><div className="flex items-center gap-2"><span className="text-xs text-[#9a9184]">Semester GPA</span><span className="rounded-lg bg-[#f4eaee] px-3 py-1.5 text-sm font-semibold text-[#7a3e54]">3.75</span></div></div>}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <p className="text-[11px] leading-5 text-[#a0988c]">This page uses sample data for frontend demonstration.</p>
            <Button variant="secondary" size="sm" onClick={handlePrint}><Download className="size-3.5" /> Print / Save as PDF</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
