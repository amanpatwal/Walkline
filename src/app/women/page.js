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
  title: "Women's Footwear — Walkline Footwear",
  description:
    "Explore Walkline women's footwear — Noir-05 chunky sneakers with coral cushion sole, Barbie-04 earthy line and more. Sizes UK 4–8.",
};

const womensProducts = FEATURED_PRODUCTS.filter((p) =>
  p.categoryKey === "womens-sneakers"
);

const WOMENS_FEATURES = [
  {
    title: "Noir-05",
    tag: "#NOIRFEVER",
    desc: "Chunky fashion sneaker with signature coral cushion sole and all-day comfort.",
    sizes: "UK 4×7 – 5×8",
    image: assets.products.noir,
  },
  {
    title: "Barbie-04",
    tag: "EARTHY LINE",
    desc: "Bold earthy tones with shock-absorbing cushion sole for everyday wearability.",
    sizes: "UK 4×7 – 5×8",
    image: assets.products.barbie,
  },
];

export default function WomenPage() {
  return (
    <main className="relative w-full bg-[#FAF7F1] min-h-screen text-[#24140D]">
      <Navbar />

      {/* Hero */}
      <EditorialPageHero
        image={assets.campaigns.moveDifferent}
        imageAlt="Walkline Women's — Move Different campaign"
        eyebrow="Women's Collection"
        title="Step Into Your Style"
        description="Bold sneakers and comfortable footwear designed for the woman who moves. Noir-05, Barbie-04 and more — crafted for confidence."
        ctaLabel="Shop Sneakers"
        ctaHref="/women"
        ctaSecLabel="Explore Sandals"
        ctaSecHref="/sandals"
        theme="light"
        objectPosition="center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Women", href: "/women" },
        ]}
      />

      {/* Featured Series Cards */}
      <section className="w-full bg-white px-5 sm:px-10 lg:px-16 py-14 sm:py-18">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-end justify-between mb-8 border-b border-[#24140D]/10 pb-5">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#24140D]">
              Featured Series
            </h2>
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A6E58] font-bold">2 Styles</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WOMENS_FEATURES.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-[#F7F4EE] rounded-2xl overflow-hidden flex flex-col sm:flex-row items-center gap-0 border border-[#24140D]/08 hover:border-[#9A6238]/30 hover:shadow-[0_8px_32px_rgba(36,20,13,0.08)] transition-all duration-400"
              >
                <div className="relative w-full sm:w-52 aspect-square bg-[#F0ECE3] shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-6 group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 208px"
                  />
                </div>
                <div className="p-6 flex-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#321D12] text-[#FAF7F1]">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#24140D] mt-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5A351F]/80 leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-[10px] font-mono text-[#8A6E58]">{item.sizes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid products={womensProducts} heading="Women's Footwear" />

      {/* Editorial: Sporty campaign */}
      <section className="relative w-full overflow-hidden">
        <div className="relative aspect-[21/9] sm:aspect-[25/8] max-h-[500px] min-h-[200px]">
          <Image
            src={assets.campaigns.sporty}
            alt="Walkline — Sporty Looks Better"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F1]/90 via-[#FAF7F1]/20 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-16 lg:px-24">
            <div className="max-w-sm">
              <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#9A6238] mb-2">
                New Season
              </p>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#24140D] leading-[0.95] mb-4">
                Sporty Looks Better
              </h2>
              <p className="text-sm text-[#5A351F]/80 mb-6 leading-relaxed">
                The Noir-05 was made for the streets. Signature coral sole, chunky silhouette — wear it your way.
              </p>
              <Link
                href="/women"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#321D12] text-[#FAF7F1] text-[11px] font-bold uppercase tracking-wider hover:bg-[#5A351F] transition-colors"
              >
                Explore Noir-05
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh in Rotation */}
      <section className="w-full bg-[#FAF7F1] px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-md">
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#9A6238] mb-3">
              Fresh In Rotation
            </p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#24140D] leading-[0.95] mb-4">
              New In
            </h2>
            <p className="text-sm text-[#5A351F]/80 leading-relaxed mb-6">
              The Barbie-04 earthy line brings bold style with everyday cushioning. Perfect for days when comfort and aesthetics matter equally.
            </p>
            <ul className="space-y-2 mb-7">
              {[
                "Trendy chunky & fashion sneaker design",
                "Signature coral cushion sole for shock absorption",
                "All-day comfort certified",
                "Sizes UK 4×7 – 5×8",
              ].map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-[#24140D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A6238] shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#321D12] text-[#FAF7F1] text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-[#5A351F] transition-colors"
            >
              Shop All Women&apos;s
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={assets.campaigns.freshRotation}
              alt="Fresh in Rotation — new Walkline women's drops"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
