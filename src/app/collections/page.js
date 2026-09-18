import Navbar from "@/components/navbar/Navbar";
import CollectionsSection from "@/components/home/CollectionsSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/footer/Footer";
import Container from "@/ui/Container";

export const metadata = {
  title: "Products & Collections — Walkline Footwear",
  description: "Explore Walkline Footwear across four core categories — Men's Sandals & Chappals, Women's Sneakers, Kids' Footwear, and Fashion Sandals.",
};

export default function CollectionsPage() {
  return (
    <main className="relative w-full bg-[#F7F7F4] min-h-screen text-[#111111]">
      <Navbar />
      <div className="pt-36 pb-14 bg-[#FFFFFF] border-b-2 border-black/10">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#F4F000] border border-black shadow-[2px_2px_0px_0px_#000]">
              Our Products // 4 Core Categories
            </span>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mt-4">
              PRODUCTS & COLLECTIONS
            </h1>
            <p className="text-sm sm:text-base font-bold text-[#555555] mt-3 leading-relaxed">
              We take pride in offering a wide range of high-quality footwear for Men, Women, and Kids across four main categories — Above & Beyond in every step.
            </p>
          </div>
        </Container>
      </div>
      <CollectionsSection />
      <FeaturedProducts />
      <FinalCTA />
      <Footer />
    </main>
  );
}
