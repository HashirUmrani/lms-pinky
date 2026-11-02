import { useState } from "react";
import { AppShell } from "./components/layout/AppShell";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import ResultsPage from "./pages/ResultsPage";
import ModulePage from "./pages/ModulePage";
import CoursesPage from "./pages/CoursesPage";
import TimetablePage from "./pages/TimetablePage";
import AssignmentsPage from "./pages/AssignmentsPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import AttendancePage from "./pages/AttendancePage";
import PaymentsPage from "./pages/PaymentsPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("dashboard");
  };

  if (!isLoggedIn) return <LoginPage onLogin={handleLogin} />;

  let pageContent;
  switch (currentPage) {
    case "dashboard":
      pageContent = <DashboardPage onNavigate={setCurrentPage} />;
      break;
    case "results":
      pageContent = <ResultsPage />;
      break;
    case "courses":
      pageContent = <CoursesPage onNavigate={setCurrentPage} />;
      break;
    case "timetable":
      pageContent = <TimetablePage />;
      break;
    case "assignments":
      pageContent = <AssignmentsPage />;
      break;
    case "announcements":
      pageContent = <AnnouncementsPage />;
      break;
    case "attendance":
      pageContent = <AttendancePage />;
      break;
    case "payments":
      pageContent = <PaymentsPage />;
      break;
    default:
      pageContent = <ModulePage pageId={currentPage} onNavigate={setCurrentPage} />;
  }

  return (
    <AppShell currentPage={currentPage} onNavigate={setCurrentPage} onLogout={handleLogout}>
      {pageContent}
    </AppShell>
  );
}
