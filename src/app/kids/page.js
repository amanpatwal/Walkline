import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CategoryHeader from "@/components/ui/CategoryHeader";
import ProductGrid from "@/components/ui/ProductGrid";
import { FEATURED_PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Kids' Footwear — Walkline Footwear",
  description:
    "Walkline Kids' footwear — Frooti Series with memory foam insole, easy slip-on design, lightweight breathable knit upper. No laces needed.",
};

const kidsProducts = FEATURED_PRODUCTS.filter(
  (p) => p.categoryKey === "kids-footwear"
);

export default function KidsPage() {
  return (
    <main className="relative w-full bg-white min-h-screen text-[#000000] pt-[72px] sm:pt-[80px]">
      <Navbar />

      <CategoryHeader
        eyebrow="KIDS' COLLECTION"
        title="KIDS' FOOTWEAR"
        description="Engineered for active young feet. Extra memory foam cushioning, easy slip-on wear, and breathable lightweight knits — no laces needed."
        count={kidsProducts.length}
      />

      <ProductGrid products={kidsProducts} />

      <Footer />
    </main>
  );
}
