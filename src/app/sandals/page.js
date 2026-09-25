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
  title: "Sandals & Slippers — Walkline Footwear",
  description:
    "Walkline sandals — Vertex, Concept, VRX, Bounce Sole slippers and all-weather Rainy Days footwear. Step into comfort.",
};

const sandalsProducts = FEATURED_PRODUCTS.filter((p) =>
  ["mens-sandals", "fashion-sandals"].includes(p.categoryKey)
);

const SANDAL_CATEGORIES = [
  {
    label: "Vertex & Concept",
    desc: "Men's chappals — lighter than air",
    image: assets.campaigns.weekend,
    badge: "POPULAR",
  },
  {
    label: "VRX Series",
    desc: "Metallic buckle fashion sandals",
    image: assets.campaigns.sporty,
    badge: "WATERPROOF",
  },
  {
    label: "Bounce Sole",
    desc: "Shock-absorbing dual-density slippers",
    image: assets.campaigns.bounceSole,
    badge: "NEW",
  },
  {
    label: "Rainy Days",
    desc: "All-weather monsoon comfort",
    image: assets.campaigns.rainyDays,
    badge: "WEATHERPROOF",
  },
];

export default function SandalsPage() {
  return (
    <main className="relative w-full bg-[#FAF7F1] min-h-screen text-[#24140D]">
      <Navbar />

      {/* Hero */}
      <EditorialPageHero
        image={assets.campaigns.weekend}
        imageAlt="Walkline Sandals — Weekend Mode campaign"
        eyebrow="Sandals & Slippers"
        title="Step Into Comfort"
        description="From ultra-light daily chappals to waterproof all-weather slippers — Walkline sandals are engineered for every occasion."
        ctaLabel="Shop Now"
        ctaHref="/sandals"
        ctaSecLabel="Explore Men's"
        ctaSecHref="/men"
        theme="light"
        objectPosition="center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sandals", href: "/sandals" },
        ]}
      />

      {/* Category Grid */}
      <section className="w-full bg-white px-5 sm:px-10 lg:px-16 py-14 sm:py-18">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-end justify-between mb-8 border-b border-[#24140D]/10 pb-5">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#24140D]">
              4 Sandal Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SANDAL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-[#F7F4EE] cursor-pointer"
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-600"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/75 via-[#24140D]/10 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#321D12] text-[#FAF7F1]">
                    {cat.badge}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#C69A6B]">{cat.desc}</p>
                  <h3 className="text-sm font-black uppercase tracking-tight text-white mt-0.5">{cat.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid products={sandalsProducts} heading="All Sandals & Slippers" />

      {/* Bounce Sole Campaign */}
      <section className="relative w-full overflow-hidden bg-[#1A0F08]">
        <div className="relative aspect-[21/9] sm:aspect-[25/8] max-h-[520px] min-h-[220px]">
          <Image
            src={assets.campaigns.bounceSole}
            alt="Bounce Sole Slippers — shock-absorbing dual-density footbed"
            fill
            className="object-cover object-center opacity-70"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center px-8 sm:px-16 lg:px-24">
          <div className="max-w-sm">
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#C69A6B] mb-2">
              New Drop
            </p>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FAF7F1] leading-[0.92] mb-4">
              Bounce Sole Slippers
            </h2>
            <p className="text-sm text-[#C69A6B]/80 mb-6 leading-relaxed">
              Shock-absorbing dual-density footbed. Feel every bounce on every step — designed for maximum indoor and outdoor comfort.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FAF7F1] text-[#24140D] text-[11px] font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Discover Now
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal: Summer + Rainy Days */}
      <section className="w-full bg-[#FAF7F1] px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8 border-b border-[#24140D]/10 pb-5">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#24140D]">
              Seasonal Sandals
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Summer */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[16/9]">
              <Image
                src={assets.campaigns.summer}
                alt="Summer Lifestyle — Walkline sandals"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-600"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/60 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-[10px] uppercase tracking-wider font-bold text-[#C69A6B]">Summer</p>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mt-1">
                  Sun-Ready Comfort
                </h3>
              </div>
            </div>

            {/* Rainy Days */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[16/9]">
              <Image
                src={assets.campaigns.rainyDays}
                alt="Rainy Days All-Weather — Walkline waterproof sandals"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-600"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/60 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-[10px] uppercase tracking-wider font-bold text-[#C69A6B]">All-Weather</p>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mt-1">
                  Rainy Days Ready
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comfort feature strip */}
      <section className="w-full bg-[#321D12] px-5 sm:px-10 lg:px-16 py-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { label: "Lighter Than Air", desc: "Vertex & Concept ultra-light build" },
            { label: "Waterproof Ready", desc: "VRX all-weather performance" },
            { label: "Dual-Density Cushion", desc: "Bounce Sole shock absorption" },
          ].map((feat, idx) => (
            <div key={idx} className="py-2">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#C69A6B] mb-1">
                {feat.label}
              </h3>
              <p className="text-[11px] text-[#F3E8D8]/70">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
