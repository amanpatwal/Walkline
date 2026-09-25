import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import Container from "@/ui/Container";
import EditorialPageHero from "@/components/ui/EditorialPageHero";
import { DURABILITY_CONTENT } from "@/data/sustainability";
import { assets } from "@/data/assets";
import { ShieldCheck, Feather, Award, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Durability & Everyday Design — Walkline Footwear",
  description:
    "Learn how Walkline Footwear designs for longevity with resilient soling compounds, lightweight builds, and all-weather materials.",
};

const PILLAR_ICONS = [
  <ShieldCheck key="1" className="w-5 h-5 text-[#9A6238]" />,
  <Feather key="2" className="w-5 h-5 text-[#9A6238]" />,
  <Award key="3" className="w-5 h-5 text-[#9A6238]" />,
  <Sparkles key="4" className="w-5 h-5 text-[#9A6238]" />,
];

export default function SustainabilityPage() {
  return (
    <main className="relative w-full bg-[#FAF7F1] min-h-screen text-[#24140D]">
      <Navbar />

      {/* Editorial Page Hero */}
      <EditorialPageHero
        image={assets.campaigns.comfortMoves}
        imageAlt="Walkline Footwear — Durability & Everyday Design"
        eyebrow="Durability & Everyday Design"
        title="Footwear Built To Endure Daily Steps"
        description="We believe good footwear starts with honest durability. By formulating abrasion-resistant soles, lightweight flexible lasts, and breathable uppers, Walkline crafts shoes and sandals made to handle everyday Indian roads."
        breadcrumb="Durability"
        primaryCtaText="Explore Collections"
        primaryCtaHref="/collections"
        secondaryCtaText="Our Craft"
        secondaryCtaHref="/manufacturing"
        darkTheme={false}
      />

      {/* 4 Pillars of Practical Durability */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#24140D]/10">
        <Container>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-[#FAF7F1] border border-[#24140D]/15 text-[#5A351F]">
              Design Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#24140D] mt-4">
              4 Pillars Of Daily Durability
            </h2>
            <p className="text-sm sm:text-base text-[#5A351F]/80 mt-3 leading-relaxed">
              Every design choice focuses on real-world wearability, foot comfort, and long-lasting sole integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {DURABILITY_CONTENT.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F1] rounded-2xl p-7 sm:p-9 border border-[#24140D]/08 hover:border-[#9A6238]/30 hover:shadow-editorial-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#24140D]/10 flex items-center justify-center">
                      {PILLAR_ICONS[idx % PILLAR_ICONS.length]}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-[#24140D]/08 text-[#8A6E58]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#24140D] mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A351F]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Verified Category Longevity Highlights */}
      <section className="py-16 sm:py-24 bg-[#FAF7F1]">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-[#24140D]/10 shadow-editorial-sm space-y-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A6E58]">
                Everyday Assurance
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#24140D] mt-2">
                Built For Real Daily Wear
              </h3>
              <p className="text-xs sm:text-sm text-[#5A351F]/80 mt-2.5 leading-relaxed">
                Rather than relying on unverified claims, Walkline focuses on tangible engineering improvements that directly deliver all-day comfort and dependable wear across all four product categories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#24140D]/08">
              <div className="space-y-1.5 p-4 rounded-xl bg-[#FAF7F1] border border-[#24140D]/06">
                <span className="text-[10px] font-mono font-bold text-[#8A6E58] uppercase">
                  Men&apos;s Sandals & Chappals
                </span>
                <h4 className="text-sm font-black uppercase text-[#24140D]">
                  Vertex & Concept Series
                </h4>
                <p className="text-xs text-[#5A351F]/80 leading-relaxed">
                  Lighter-than-air construction for effortless daily walking in sizes UK 6×9 to 7×10.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-[#FAF7F1] border border-[#24140D]/06">
                <span className="text-[10px] font-mono font-bold text-[#8A6E58] uppercase">
                  Women&apos;s Sneakers
                </span>
                <h4 className="text-sm font-black uppercase text-[#24140D]">
                  Noir-05 & Barbie-04
                </h4>
                <p className="text-xs text-[#5A351F]/80 leading-relaxed">
                  Signature coral cushion sole designed for shock absorption and bold daily style.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-[#FAF7F1] border border-[#24140D]/06">
                <span className="text-[10px] font-mono font-bold text-[#8A6E58] uppercase">
                  Kids&apos; Footwear
                </span>
                <h4 className="text-sm font-black uppercase text-[#24140D]">
                  Frooti Series
                </h4>
                <p className="text-xs text-[#5A351F]/80 leading-relaxed">
                  Soft memory foam insole and easy slip-on wear (no laces) for growing active feet.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-[#FAF7F1] border border-[#24140D]/06">
                <span className="text-[10px] font-mono font-bold text-[#8A6E58] uppercase">
                  Fashion Sandals
                </span>
                <h4 className="text-sm font-black uppercase text-[#24140D]">
                  VRX Series
                </h4>
                <p className="text-xs text-[#5A351F]/80 leading-relaxed">
                  Waterproof comfy-soft build with thin smart straps and metallic buckles.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
