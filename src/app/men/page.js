import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CategoryHeader from "@/components/ui/CategoryHeader";
import ProductGrid from "@/components/ui/ProductGrid";
import { FEATURED_PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Men's Footwear — Walkline Footwear",
  description:
    "Explore Walkline men's footwear — Vertex ultra-light sandals, Concept premium chappals, and VRX fashion sandals. Engineered for all-day comfort since 2010.",
};

const allMensProducts = FEATURED_PRODUCTS.filter((p) =>
  ["mens-sandals", "fashion-sandals"].includes(p.categoryKey)
);

export default function MenPage() {
  return (
    <main className="relative w-full bg-white min-h-screen text-[#000000] pt-[72px] sm:pt-[80px]">
      <Navbar />

      <CategoryHeader
        eyebrow="MEN'S COLLECTION"
        title="MEN'S FOOTWEAR"
        description="Crafted for the man who moves. Premium sandals, chappals, and footwear engineered for all-day comfort and durability since 2010."
        count={allMensProducts.length}
      />

      <ProductGrid products={allMensProducts} />

      <Footer />
    </main>
  );
}
