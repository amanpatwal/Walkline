import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { COLLECTIONS } from "@/data/collections";
import Container from "@/ui/Container";

const CATEGORY_ROUTES = {
  "mens-sandals": "/men",
  "womens-sneakers": "/women",
  "kids-footwear": "/kids",
  "fashion-sandals": "/sandals",
};

export default function CollectionsSection() {
  return (
    <section
      id="collections"
      className="relative w-full py-20 sm:py-28 bg-white text-[#24140D] border-y border-[#24140D]/10"
      aria-label="Four Core Categories — Indian Footwear Craftsmanship"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8A6E58] block mb-2">
              Collections • Curated by Series
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.03em] text-[#24140D]">
              Explore Categories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5A351F]/80 max-w-sm font-normal">
            Four verified Walkline pillars: Men&apos;s Sandals, Women&apos;s Sneakers, Kids&apos; Footwear, and Fashion Sandals.
          </p>
        </div>

        {/* Asymmetric Editorial Grid (7/5 + 5/7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Tile 1: Men's Sandals & Chappals - Large 7 cols */}
          <div className="lg:col-span-7">
            <CategoryCard
              collection={COLLECTIONS[0]}
              href={CATEGORY_ROUTES[COLLECTIONS[0].id]}
              isLarge
            />
          </div>

          {/* Tile 2: Women's Sneakers - 5 cols */}
          <div className="lg:col-span-5">
            <CategoryCard
              collection={COLLECTIONS[1]}
              href={CATEGORY_ROUTES[COLLECTIONS[1].id]}
            />
          </div>

          {/* Tile 3: Kids' Footwear - 5 cols */}
          <div className="lg:col-span-5">
            <CategoryCard
              collection={COLLECTIONS[2]}
              href={CATEGORY_ROUTES[COLLECTIONS[2].id]}
            />
          </div>

          {/* Tile 4: Fashion Sandals - Large 7 cols */}
          <div className="lg:col-span-7">
            <CategoryCard
              collection={COLLECTIONS[3]}
              href={CATEGORY_ROUTES[COLLECTIONS[3].id]}
              isLarge
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function CategoryCard({ collection, href, isLarge = false }) {
  return (
    <Link
      href={href || "/collections"}
      className={`group relative w-full rounded-2xl overflow-hidden bg-[#FAF7F1] border border-[#24140D]/10 hover:border-[#9A6238] shadow-editorial-sm hover:shadow-editorial-md transition-all duration-500 cursor-pointer flex flex-col justify-between p-6 sm:p-8 block ${
        isLarge ? "min-h-[460px] sm:min-h-[520px]" : "min-h-[420px] sm:min-h-[480px]"
      }`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        />
        {/* Soft Editorial Gradient Overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/90 via-[#24140D]/40 to-transparent group-hover:from-[#24140D]/95 transition-all duration-300" />
      </div>

      {/* Top Header Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF7F1]/95 text-[#24140D] backdrop-blur-sm shadow-sm">
          {collection.badge}
        </span>
        <span className="text-[11px] font-mono text-[#FAF7F1]/80 hidden sm:inline-block">
          {collection.sizes}
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 pt-20">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#FAF7F1] group-hover:text-[#F3E8D8] transition-colors">
          {collection.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#FAF7F1]/85 line-clamp-2 mt-2 max-w-lg font-normal">
          {collection.description}
        </p>

        {/* CTA Bar */}
        <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#FAF7F1]">
          <span className="group-hover:text-[#C69A6B] transition-colors">
            Explore Series
          </span>
          <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#FAF7F1] group-hover:text-[#24140D] flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
