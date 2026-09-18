"use client";

import { COMPANY_INFO } from "@/data/company";
import { Sparkles, ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  if (!COMPANY_INFO.announcement.enabled) return null;

  return (
    <div className="w-full bg-[#111111] text-[#F4F000] border-b border-black py-1.5 px-4 text-center select-none text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-2">
      <Sparkles className="w-3.5 h-3.5 text-[#F4F000] shrink-0" />
      <span>{COMPANY_INFO.announcement.text}</span>
      <span className="hidden md:inline font-mono opacity-60">• SINCE 2009</span>
    </div>
  );
}
