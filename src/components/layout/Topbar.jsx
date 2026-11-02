import { Bell, ChevronDown, Menu, Settings2, UserRound, LogOut, CheckCheck, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function Topbar({ title, onToggleSidebar, onNavigate, onLogout }) {
  return (
    <header className="sticky top-0 z-30 flex h-[68px] items-center justify-between border-b border-[#f0e3e8] bg-white/95 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <Button variant="ghost" size="icon" className="-ml-2 size-9 text-[#97526b] hover:bg-[#f5edf0] hover:text-[#7d3e55]" onClick={onToggleSidebar} aria-label="Toggle navigation"><Menu /></Button>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#463a2f]">{title}</p>
          <p className="hidden text-[11px] text-[#a9a196] sm:block">University of Sindh <span className="px-1.5 text-[#d2cdc5]">/</span> Student portal</p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button variant="ghost" size="icon" className="hidden size-9 text-[#9a9082] hover:bg-[#f5edf0] hover:text-[#86455c] sm:inline-flex" onClick={() => onNavigate("courses")} aria-label="Search courses"><Search className="size-[17px]" /></Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative size-9 text-[#a95f7a] hover:bg-[#f5edf0]" aria-label="Notifications">
              <Bell className="size-[18px]" />
              <span className="absolute right-[7px] top-[6px] size-1.5 rounded-full border border-white bg-[#9a536d]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px]">
            <DropdownMenuLabel className="flex items-center justify-between">Notifications <span className="rounded-full bg-[#f4eaee] px-2 py-0.5 text-[10px] text-[#86455c]">2 new</span></DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="space-y-1 p-1">
              <div className="rounded-lg bg-[#f8f2f4] p-3">
                <p className="text-xs font-semibold text-[#56473a]">Examination notice updated</p>
                <p className="mt-1 text-[11px] leading-5 text-[#91897d]">Check the department notice board for the latest information.</p>
                <p className="mt-1.5 text-[10px] text-[#ada69c]">Today · 10:30 AM</p>
              </div>
              <div className="rounded-lg p-3 hover:bg-[#faf6f7]">
                <p className="text-xs font-semibold text-[#673748]">Assignment deadline approaching</p>
                <p className="mt-1 text-[11px] leading-5 text-[#9a9287]">Software Project Management · 3 Nov 2026</p>
                <p className="mt-1.5 text-[10px] text-[#ada69c]">Yesterday</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => onNavigate("announcements")}><CheckCheck className="size-4 text-[#9a536d]" /> View all updates</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-7 w-px bg-[#f4ebee]" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full py-1 pl-1 pr-1.5 transition hover:bg-[#f8f2f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b27088]">
              <Avatar className="size-8"><AvatarFallback className="bg-[#f2e8eb] text-[#86455c]">HU</AvatarFallback></Avatar>
              <span className="hidden text-left sm:block">
                <span className="block text-xs font-semibold text-[#55473b]">Hashir Umrani</span>
                <span className="block text-[10px] text-[#aaa49a]">Student</span>
              </span>
              <ChevronDown className="hidden size-3.5 text-[#aaa49a] sm:block" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => onNavigate("profile")}><UserRound className="size-4 text-[#9a536d]" /> Student profile</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => onNavigate("settings")}><Settings2 className="size-4 text-[#9a536d]" /> Preferences</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={onLogout} className="text-[#a65f56] focus:bg-[#fbf0ee]"><LogOut className="size-4" /> Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
