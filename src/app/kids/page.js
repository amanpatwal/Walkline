import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import EditorialPageHero from "@/components/ui/EditorialPageHero";
import ProductGrid from "@/components/ui/ProductGrid";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PRODUCTS } from "@/data/products";
import { assets } from "@/data/assets";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Kids' Footwear — Walkline Footwear",
  description:
    "Walkline Kids' footwear — Frooti Series with memory foam insole, easy slip-on design, lightweight breathable knit upper. No laces needed.",
};

const kidsProducts = FEATURED_PRODUCTS.filter(
  (p) => p.categoryKey === "kids-footwear"
);

const KIDS_FEATURES = [
  {
    icon: "🧠",
    label: "Memory Foam Insole",
    desc: "Extra cushioning on every step",
  },
  {
    icon: "👟",
    label: "Easy Slip-On",
    desc: "No laces — in and out in seconds",
  },
  {
    icon: "🌬️",
    label: "Breathable Knit",
    desc: "Lightweight upper for active feet",
  },
  {
    icon: "⚡",
    label: "Lightweight Build",
    desc: "Designed for active movement",
  },
];

const KIDS_SIZES = [
  { range: "8–10", label: "Toddler" },
  { range: "11–1", label: "Junior" },
  { range: "2–5", label: "Youth" },
];

export default function KidsPage() {
  return (
    <main className="relative w-full bg-[#FAF7F1] min-h-screen text-[#24140D]">
      <Navbar />

      {/* Hero */}
      <EditorialPageHero
        image={assets.campaigns.comfortGo}
        imageAlt="Walkline Kids — Comfort On The Go"
        eyebrow="Kids' Footwear"
        title="The Frooti Series"
        description="Engineered for active young feet. Memory foam cushioning, easy slip-on design, no laces — just comfort from the very first step."
        ctaLabel="Shop Frooti"
        ctaHref="/kids"
        theme="light"
        objectPosition="center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Kids", href: "/kids" },
        ]}
      />

      {/* Feature Pills */}
      <section className="w-full bg-[#321D12] px-5 sm:px-10 lg:px-16 py-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {KIDS_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-5 rounded-xl bg-[#FAF7F1]/08 border border-[#FAF7F1]/10"
            >
              <span className="text-2xl mb-2">{feat.icon}</span>
              <h3 className="text-[11px] font-black uppercase tracking-wider text-[#C69A6B] mb-1">
                {feat.label}
              </h3>
              <p className="text-[10px] text-[#F3E8D8]/70">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid products={kidsProducts} heading="Kids' Collection" />

      {/* Frooti Spotlight */}
      <section className="w-full bg-white px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-[#F7F4EE]">
            <Image
              src={assets.products.frooti}
              alt="Frooti Series — Walkline Kids' Footwear"
              fill
              className="object-contain p-10"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="max-w-md">
            <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#321D12] text-[#FAF7F1]">
              Memory Foam
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#24140D] leading-[0.95] mt-3 mb-4">
              Frooti Series
            </h2>
            <p className="text-sm text-[#5A351F]/80 leading-relaxed mb-5">
              The Frooti Series is Walkline&apos;s dedicated kids&apos; footwear range — built for toddlers to youth with extra memory foam cushioning, breathable knit uppers and a hassle-free slip-on design.
            </p>

            {/* Size guide */}
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#8A6E58] mb-3">
                Size Ranges
              </p>
              <div className="flex gap-2">
                {KIDS_SIZES.map((sz, idx) => (
                  <div
                    key={idx}
                    className="flex-1 py-2.5 rounded-lg bg-[#F7F4EE] border border-[#24140D]/10 text-center"
                  >
                    <div className="text-sm font-black text-[#24140D]">{sz.range}</div>
                    <div className="text-[9px] text-[#8A6E58] font-bold uppercase mt-0.5">{sz.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#321D12] text-[#FAF7F1] text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-[#5A351F] transition-colors"
            >
              View All Kids&apos; Styles
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom campaign strip */}
      <section className="relative w-full overflow-hidden">
        <div className="relative aspect-[21/6] sm:aspect-[25/6] max-h-[320px] min-h-[140px]">
          <Image
            src={assets.campaigns.comfortMoves}
            alt="Walkline — Comfort moves with you"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#321D12]/60 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#FAF7F1] leading-[0.95]">
                Comfort From Day One
              </h2>
              <p className="text-[#C69A6B] text-sm mt-2">
                Walkline Frooti — engineered for growing feet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
