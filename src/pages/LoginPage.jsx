import { useState } from "react";
import { ArrowRight, Eye, EyeOff, FileCheck2, GraduationCap, House, ShieldCheck, WalletCards } from "lucide-react";
import { UniversityMark } from "../components/layout/UniversityMark";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function LoginPage({ onLogin }) {
  const [loginMethod, setLoginMethod] = useState("roll");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setMessage("Enter your student ID and password to continue.");
      return;
    }
    setMessage("");
    onLogin();
  };

  return (
    <div className="min-h-screen bg-[#f9f5f6]">
      <header className="border-b border-[#f0e3e8] bg-white shadow-[0_3px_16px_rgba(44,36,25,0.045)]">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <UniversityMark />
          <nav className="hidden items-center gap-1 sm:flex">
            <button onClick={() => setMessage("You are already on the portal home page.")} className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-[#716b61] transition hover:bg-[#f7f4ee] hover:text-[#51432f]"><House className="size-4" /> Home</button>
            <button onClick={() => document.getElementById("login-form")?.scrollIntoView({ behavior: "smooth", block: "center" })} className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-[#716b61] transition hover:bg-[#f7f4ee] hover:text-[#51432f]"><GraduationCap className="size-4" /> Student login</button>
            <button onClick={() => setMessage("Payment verification will be connected when the university payment service is integrated.")} className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-[#716b61] transition hover:bg-[#f7f4ee] hover:text-[#51432f]"><WalletCards className="size-4" /> Verify payments</button>
          </nav>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1180px] items-start gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(360px,0.88fr)_minmax(0,1.35fr)] lg:gap-8 lg:px-8 lg:py-16">
        <Card id="login-form" className="overflow-hidden rounded-2xl border-[#eae3d8] bg-white soft-shadow">
          <div className="border-b border-[#eee8de] bg-[#fbfaf7] px-6 py-6 sm:px-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9b8667]">Student account</p>
            <h1 className="mt-2 text-[27px] font-semibold tracking-tight text-[#4a3e32]">Welcome back</h1>
            <p className="mt-1.5 text-sm text-[#9a9184]">Sign in to access your academic workspace.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-8 sm:py-7">
            <fieldset>
              <legend className="mb-3 text-xs font-semibold text-[#5b554b]">Login with</legend>
              <div className="grid grid-cols-2 gap-2 rounded-xl bg-[#f6f3ed] p-1">
                <button type="button" onClick={() => { setLoginMethod("roll"); setIdentifier(""); }} className={`rounded-lg px-3 py-2.5 text-xs font-medium transition ${loginMethod === "roll" ? "bg-white text-[#7a3e54] shadow-sm ring-1 ring-[#e8dfd1]" : "text-[#9a9184] hover:text-[#6e3b4d]"}`}>Roll No / CNIC</button>
                <button type="button" onClick={() => { setLoginMethod("passport"); setIdentifier(""); }} className={`rounded-lg px-3 py-2.5 text-xs font-medium transition ${loginMethod === "passport" ? "bg-white text-[#7a3e54] shadow-sm ring-1 ring-[#e8dfd1]" : "text-[#9a9184] hover:text-[#6e3b4d]"}`}>Passport</button>
              </div>
            </fieldset>

            <div className="space-y-2">
              <Label htmlFor="student-id">{loginMethod === "roll" ? "Roll number or CNIC" : "Passport number"} <span className="text-[#ad6c5f]">*</span></Label>
              <Input
                id="student-id"
                autoComplete="username"
                placeholder={loginMethod === "roll" ? "e.g. 2K23/SWE/66 or 4210112345671" : "Enter your passport number"}
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
              />
              {loginMethod === "roll" && <p className="text-[11px] text-[#9b9387]">Enter your CNIC without dashes, or use your university roll number.</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password <span className="text-[#ad6c5f]">*</span></Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} className="pr-11" />
                <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#92897c] hover:text-[#5c4a35]" aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            {message && <div role="status" className="rounded-lg border border-[#eadfc9] bg-[#f8f2e7] px-3 py-2.5 text-xs leading-5 text-[#86455c]">{message}</div>}

            <div className="flex items-center justify-between gap-3">
              <button type="button" onClick={() => setMessage("For password assistance, contact the university IT support office.")} className="text-xs font-medium text-[#86455c] underline-offset-4 hover:underline">Forgot password?</button>
              <span className="text-[10px] text-[#a29a8d]">Required fields marked *</span>
            </div>

            <Button type="submit" size="lg" className="w-full justify-center">Sign in to portal <ArrowRight className="size-4" /></Button>
            <p className="text-center text-[11px] leading-5 text-[#a0998d]">Demo interface only. Any non-empty ID and password will open the dashboard.</p>
          </form>
        </Card>

        <div className="space-y-5 lg:pt-1">
          <div className="relative overflow-hidden rounded-2xl border border-[#e5dac8] bg-[#f0e9de] p-6 sm:p-8">
            <div className="absolute -right-12 -top-14 size-56 rounded-full border border-[#d9c8ae]/60" />
            <div className="absolute -right-3 -top-5 size-36 rounded-full border border-[#d9c8ae]/60" />
            <div className="relative max-w-lg">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d9c9b2] bg-white/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7c6444]"><ShieldCheck className="size-3.5" /> Official student portal</span>
              <h2 className="mt-5 max-w-md text-[25px] font-semibold leading-tight tracking-tight text-[#393329] sm:text-[30px]">Your academic journey, in one place.</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-[#786d5d]">Access learning resources, academic records, examination updates and essential student services through your university account.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-lg border border-[#d9c9b2] bg-white/50 px-3 py-2 text-[11px] font-medium text-[#6f5b3f]">Academic records</span>
                <span className="rounded-lg border border-[#d9c9b2] bg-white/50 px-3 py-2 text-[11px] font-medium text-[#6f5b3f]">Learning resources</span>
                <span className="rounded-lg border border-[#d9c9b2] bg-white/50 px-3 py-2 text-[11px] font-medium text-[#6f5b3f]">Student services</span>
              </div>
            </div>
          </div>

          <Card className="rounded-2xl border-[#f0e3e8] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#f4eaee] text-[#86455c]"><FileCheck2 className="size-[17px]" /></span>
              <div>
                <h3 className="text-sm font-semibold text-[#39352d]">Important notes & instructions</h3>
                <p className="mt-1 text-xs leading-5 text-[#8a8276]">Please read these points before signing in.</p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {[
                "Use the roll number or CNIC registered with the university.",
                "For CNIC login, enter all digits without dashes or spaces.",
                "Never share your password or verification details with anyone.",
                "For account access issues, contact the university IT support office.",
              ].map((item, index) => (
                <div key={item} className="flex gap-3 text-xs leading-5 text-[#716b61]">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#f1e9dc] text-[10px] font-semibold text-[#86455c]">{index + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
          <p className="px-1 text-center text-[11px] text-[#a39b8f]">University of Sindh · All rights reserved</p>
        </div>
      </main>
    </div>
  );
}
