import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import Container from "@/ui/Container";
import EditorialPageHero from "@/components/ui/EditorialPageHero";
import ManufacturingSection from "@/components/home/ManufacturingSection";
import { CRAFTSMANSHIP_STEPS } from "@/data/manufacturing";
import { COMPANY_INFO } from "@/data/company";
import { assets } from "@/data/assets";
import { ShieldCheck, HeartHandshake, Feather, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Manufacturing & Craftsmanship — Walkline Footwear",
  description:
    "Explore Walkline Footwear's precision craftsmanship, direct soling technology, and ergonomic comfort at our Bahadurgarh facility. Made in India since 2009.",
};

const VERIFIED_CRAFT_PILLARS = [
  {
    title: "Made in India",
    description: "Designed, engineered, and manufactured in India with pride since 2009.",
    badge: "HERITAGE",
    icon: <HeartHandshake className="w-5 h-5 text-[#C69A6B]" />,
  },
  {
    title: "Lighter Than Air",
    description: "Ultra-lightweight Vertex construction engineered for all-day daily wear.",
    badge: "COMFORT",
    icon: <Feather className="w-5 h-5 text-[#C69A6B]" />,
  },
  {
    title: "Cushion Soling",
    description: "Signature cushion soles for shock absorption in sneakers and soft memory foam in kids' shoes.",
    badge: "SUPPORT",
    icon: <ShieldCheck className="w-5 h-5 text-[#C69A6B]" />,
  },
  {
    title: "Waterproof Build",
    description: "Waterproof comfy-soft construction with metallic buckles featured across the VRX series.",
    badge: "DURABILITY",
    icon: <Award className="w-5 h-5 text-[#C69A6B]" />,
  },
];

export default function ManufacturingPage() {
  return (
    <main className="relative w-full bg-[#FAF7F1] min-h-screen text-[#24140D]">
      <Navbar />

      {/* Editorial Page Hero */}
      <EditorialPageHero
        image={assets.campaigns.comfortGo}
        imageAlt="Walkline Footwear Manufacturing & Craft"
        eyebrow="Indian Footwear Craftsmanship"
        title="Made In India With Pride"
        description="Crafting comfort and style for every step since 2009. From our Bahadurgarh facility in Haryana, Walkline Footwear builds dependable everyday footwear with lightweight construction and durable soling."
        breadcrumb="Manufacturing"
        primaryCtaText="Explore Craftsmanship"
        primaryCtaHref="#process"
        secondaryCtaText="Contact Factory Desk"
        secondaryCtaHref="/contact"
        darkTheme={true}
      />

      {/* Verified Made In India Pillars Strip */}
      <section className="w-full bg-[#321D12] text-[#FAF7F1] py-12 sm:py-16 border-b border-[#24140D]/20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {VERIFIED_CRAFT_PILLARS.map((pillar, idx) => (
              <div key={idx} className="space-y-2 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-white/10">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C69A6B]">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-base font-black uppercase tracking-tight text-[#FAF7F1] pt-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#FAF7F1]/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Step-by-Step Craftsmanship Process */}
      <section id="process" className="py-20 sm:py-28 bg-[#FAF7F1]">
        <Container>
          <div className="max-w-2xl mb-14 sm:mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-white border border-[#24140D]/10 text-[#5A351F]">
              Footwear Construction
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#24140D] mt-4">
              Crafted For Everyday Movement
            </h2>
            <p className="text-sm sm:text-base text-[#5A351F]/80 mt-3 leading-relaxed">
              Every Walkline pair balances lightweight flexibility with durable construction, direct sole injection, and cushioned footbeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {CRAFTSMANSHIP_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-7 sm:p-9 border border-[#24140D]/08 shadow-editorial-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#C69A6B]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF7F1] border border-[#24140D]/08 text-[#8A6E58]">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase text-[#24140D] tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A351F]/80 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#24140D]/08 flex items-center justify-between text-[11px] font-mono text-[#8A6E58]">
                  <span>Craft Standard:</span>
                  <span className="font-bold text-[#24140D]">{step.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Verified Infrastructure Section */}
      <ManufacturingSection />

      {/* Bahadurgarh Facility Assurance */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#24140D]/10">
        <Container>
          <div className="bg-[#FAF7F1] rounded-3xl p-8 sm:p-12 border border-[#24140D]/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A6238]">
                Verified Facility
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#24140D]">
                Made In India • Bahadurgarh Facility
              </h3>
              <p className="text-xs sm:text-sm text-[#5A351F]/80 leading-relaxed">
                Walkline Footwear operates out of {COMPANY_INFO.contact.address.full}. Every pair is designed and crafted in India with pride, bringing dependable comfort to daily steps nationwide.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#24140D] text-[#FAF7F1] text-xs font-bold uppercase tracking-wider hover:bg-[#5A351F] transition-colors shrink-0 shadow-sm"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
