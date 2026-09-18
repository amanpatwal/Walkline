import Navbar from "@/components/navbar/Navbar";
import BrandStory from "@/components/home/BrandStory";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/footer/Footer";
import Container from "@/ui/Container";
import { ABOUT_CONTENT } from "@/data/about";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "About Us — Walkline Footwear",
  description: "Learn about Walkline Footwear's heritage, crafting comfort and style for every step since 2009.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full bg-[#F7F7F4] min-h-screen text-[#111111]">
      <Navbar />
      <div className="pt-36 pb-14 bg-[#FFFFFF] border-b-2 border-black/10">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#F4F000] border border-black shadow-[2px_2px_0px_0px_#000]">
              Brand Heritage // Since 2009
            </span>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mt-4">
              ABOUT WALKLINE
            </h1>
            <p className="text-sm sm:text-base font-bold text-[#555555] mt-3 leading-relaxed">
              {ABOUT_CONTENT.lead}
            </p>
          </div>
        </Container>
      </div>
      <BrandStory />
      <FinalCTA />
      <Footer />
    </main>
  );
}
