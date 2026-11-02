import { useState } from "react";
import { ArrowDownToLine, CheckCircle2, CreditCard, FileText, Receipt, WalletCards } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const transactions = [
  { id: "PAY-2026-0142", title: "Semester fee · Fall 2026", date: "12 Sep 2026", amount: "PKR 42,500", status: "Paid", method: "Bank deposit" },
  { id: "PAY-2026-0108", title: "Library security renewal", date: "05 Aug 2026", amount: "PKR 1,500", status: "Paid", method: "Online transfer" },
];

export default function PaymentsPage() {
  const [message, setMessage] = useState("");
  const downloadReceipt = (transaction) => {
    const content = `University of Sindh - Demo payment receipt\n\nReference: ${transaction.id}\nDescription: ${transaction.title}\nDate: ${transaction.date}\nAmount: ${transaction.amount}\nPayment method: ${transaction.method}\nStatus: ${transaction.status}\n\nSample UI receipt - not valid for official payment verification.`;
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `${transaction.id}-receipt.txt`;
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Sample receipt downloaded. This is not an official payment document.");
  };
  return (
    <div className="space-y-6">
      <div><Badge>STUDENT SERVICES</Badge><h1 className="mt-2 text-[25px] font-semibold tracking-tight text-[#4a3e32]">Fee & payments</h1><p className="mt-1.5 text-sm text-[#9a9082]">Review your fee summary and previous payment records.</p></div>
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]"><Card className="overflow-hidden border-[#ecdce2]"><div className="h-1.5 bg-[#b37289]" /><CardContent className="p-5 sm:p-6"><div className="flex items-start justify-between"><div><p className="text-xs text-[#9c9487]">Current semester fee</p><p className="mt-2 text-3xl font-semibold tracking-tight text-[#534538]">PKR 42,500</p><p className="mt-1 text-[11px] text-[#aaa49a]">Fall semester · 2026</p></div><span className="flex size-11 items-center justify-center rounded-xl bg-[#f4eaee] text-[#86455c]"><WalletCards className="size-5" /></span></div><div className="mt-5 flex items-center justify-between rounded-lg bg-[#edf3ed] px-3.5 py-3"><span className="flex items-center gap-2 text-xs font-medium text-[#5d795f]"><CheckCircle2 className="size-4" /> Payment recorded</span><Badge variant="success">Paid</Badge></div><p className="mt-3 text-[10px] leading-5 text-[#aaa49a]">Sample payment information for interface demonstration only. No real payment gateway is connected.</p></CardContent></Card><Card><CardContent className="p-5 sm:p-6"><div className="flex size-10 items-center justify-center rounded-xl bg-[#f3ede3] text-[#927653]"><CreditCard className="size-[18px]" /></div><h2 className="mt-4 text-sm font-semibold text-[#673748]">Payment verification</h2><p className="mt-1.5 text-xs leading-5 text-[#9c9487]">Use the university's official payment verification service to confirm a challan or transaction.</p><Button variant="outline" className="mt-4 w-full" onClick={() => setMessage("Connect the official university payment verification URL to enable this action.")}>Verify a payment <ArrowDownToLine className="size-4" /></Button></CardContent></Card></div>
      {message && <div role="status" className="rounded-lg border border-[#eddce2] bg-[#f6edf0] px-4 py-3 text-xs text-[#914e66]">{message}</div>}
      <Card><CardHeader className="border-b border-[#f4ebee]"><CardTitle>Payment history</CardTitle><p className="mt-1 text-xs text-[#a49d92]">Recent student account transactions.</p></CardHeader><CardContent className="divide-y divide-[#f4ebee] p-0">{transactions.map((transaction) => <div key={transaction.id} className="flex flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center sm:p-5"><div className="flex items-start gap-3"><span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#f4eaee] text-[#86455c]"><Receipt className="size-[18px]" /></span><div><p className="text-sm font-semibold text-[#673748]">{transaction.title}</p><p className="mt-1 text-[10px] text-[#aaa49a]">{transaction.id} · {transaction.date} · {transaction.method}</p></div></div><div className="flex items-center justify-between gap-3 sm:justify-end"><div className="sm:text-right"><p className="text-sm font-semibold text-[#673748]">{transaction.amount}</p><Badge variant="success">{transaction.status}</Badge></div><Button variant="outline" size="sm" onClick={() => downloadReceipt(transaction)}><FileText className="size-3.5" /> Receipt</Button></div></div>)}</CardContent></Card>
    </div>
  );
}
