import Navbar from "@/components/navbar/Navbar";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/footer/Footer";
import Container from "@/ui/Container";
import { SUSTAINABILITY_CONTENT } from "@/data/sustainability";
import { Leaf, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Sustainability — Walkline Footwear",
  description: "Learn about Walkline Footwear's focus on durable materials, lightweight breathability, and lasting comfort.",
};

export default function SustainabilityPage() {
  return (
    <main className="relative w-full bg-[#F7F7F4] min-h-screen text-[#111111]">
      <Navbar />
      <div className="pt-36 pb-14 bg-[#FFFFFF] border-b-2 border-black/10">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#A8E63D] border border-black shadow-[2px_2px_0px_0px_#000]">
              Responsible Design
            </span>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mt-4">
              {SUSTAINABILITY_CONTENT.heading}
            </h1>
            <p className="text-sm sm:text-base font-bold text-[#555555] mt-3 leading-relaxed">
              {SUSTAINABILITY_CONTENT.description}
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {SUSTAINABILITY_CONTENT.initiatives.map((init, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_#000] space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#A8E63D] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000]">
                  <Leaf className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl font-black uppercase text-black">{init.title}</h3>
                <p className="text-sm font-bold text-[#555555] leading-relaxed">
                  {init.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-white border border-black/10 max-w-4xl text-xs font-mono text-[#888888]">
            {SUSTAINABILITY_CONTENT.statusNote}
          </div>
        </Container>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
