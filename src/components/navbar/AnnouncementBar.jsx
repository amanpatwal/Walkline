"use client";

import { COMPANY_INFO } from "@/data/company";
import { Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  if (!COMPANY_INFO.announcement.enabled) return null;

  return (
    <div className="w-full bg-[#000000] text-white border-b border-neutral-800 py-1.5 px-4 text-center select-none text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2">
      <Sparkles className="w-3.5 h-3.5 text-[#27409A] shrink-0" />
      <span>{COMPANY_INFO.announcement.text}</span>
      <span className="hidden md:inline text-[#27409A] font-bold">• SINCE 2009</span>
    </div>
  );
}
