import { useState } from "react";
import { Sidebar, pageTitles } from "./Sidebar";
import { Topbar } from "./Topbar";

export function AppShell({ currentPage, onNavigate, onLogout, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const title = pageTitles[currentPage] || currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <div className="min-h-screen bg-background lg:flex">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} onLogout={onLogout} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="min-w-0 flex-1">
        <Topbar title={title} onToggleSidebar={() => setSidebarOpen((value) => !value)} onNavigate={onNavigate} onLogout={onLogout} />
        <main className="mx-auto w-full max-w-[1680px] px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">{children}</main>
        <footer className="px-6 pb-6 pt-1 text-center text-[11px] text-[#b0aaa0] lg:text-left lg:px-8">© 2026 University of Sindh, Jamshoro. Student portal interface preview.</footer>
      </div>
    </div>
  );
}
