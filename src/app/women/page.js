import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CategoryHeader from "@/components/ui/CategoryHeader";
import ProductGrid from "@/components/ui/ProductGrid";
import { FEATURED_PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Women's Footwear — Walkline Footwear",
  description:
    "Explore Walkline women's footwear — Noir-05 chunky sneakers with coral cushion sole, Barbie-04 earthy line and more. Sizes UK 4–8.",
};

const womensProducts = FEATURED_PRODUCTS.filter(
  (p) => p.categoryKey === "womens-sneakers"
);

export default function WomenPage() {
  return (
    <main className="relative w-full bg-white min-h-screen text-[#000000] pt-[72px] sm:pt-[80px]">
      <Navbar />

      <CategoryHeader
        eyebrow="WOMEN'S COLLECTION"
        title="WOMEN'S FOOTWEAR"
        description="Designed for bold style and everyday comfort. Chunky fashion sneakers with signature coral cushion soles and earthy colorways."
        count={womensProducts.length}
      />

      <ProductGrid products={womensProducts} />

      <Footer />
    </main>
  );
}
