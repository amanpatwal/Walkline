"use client";

import Image from "next/image";
import { COMMUNITY_DROPS } from "@/data/community";
import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { ArrowUpRight, Camera } from "lucide-react";

export default function CommunitySection() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FFFFFF] text-[#111111] border-t-2 border-black/10">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            overline="Community Lookbook // 2026"
            title="SEEN ON THE STREETS"
            subtitle="Tag @walklinefootwear or use #WalklineStreets to be featured in the community drop."
            tagVariant="pink"
          />
        

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-full bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#F4F000] transition-all self-start md:self-auto"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>Follow @walklinefootwear</span>
          </a>
        </div>

        {/* 3-Card Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMUNITY_DROPS.map((item, idx) => (
            <Reveal key={item.id} animation="slideUp" delay={idx * 0.08}>
              <div className="group bg-[#F7F7F4] rounded-3xl p-5 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#3155FF] transition-all duration-300 flex flex-col justify-between h-full">
                {/* Visual Area */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border-2 border-black mb-4">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-black ${item.badgeColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Caption & User Meta */}
                <div className="space-y-1.5">
                  <p className="text-sm font-bold text-[#111111]">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#888888] pt-2 border-t border-black/10">
                    <span>{item.user}</span>
                    <span className="text-[#555555]">{item.location}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
