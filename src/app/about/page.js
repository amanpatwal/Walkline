import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { assets } from "@/data/assets";

export const metadata = {
  title: "About Us — Walkline Footwear",
  description:
    "Walkline is an Indian-made footwear brand built around quality, comfort, and craftsmanship. Founded in 2010 in Modern Industrial Estate (MIE), Haryana.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full bg-white min-h-screen text-[#0A0A0A]">
      <Navbar />

      {/* ─── SECTION ONE: FULL-WIDTH WELCOME BANNER ────────── */}
      <section
        className="relative w-full overflow-hidden bg-[#7BA4DC]"
        style={{ marginTop: "72px" }}
        aria-label="Welcome to Walkline — Est. 2010"
      >
        <h1 className="sr-only">Welcome to Walkline — Est. 2010 — About Us</h1>
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <Image
            src={assets.hero.welcome}
            alt="Welcome to Walkline — Est. 2010 — Walkline Footwear Headquarters"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-top select-none"
          />
        </div>
      </section>

      {/* ─── SECTION TWO: OUR PHILOSOPHY / CRAFTSMANSHIP ───── */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-8">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-[15px] sm:text-[17px] font-medium uppercase tracking-[0.18em] text-[#27409A] mb-3 sm:mb-4">
            OUR PHILOSOPHY
          </p>
          <h2
            className="font-medium uppercase text-[#0A0A0A] mb-8 sm:mb-10"
            style={{ fontSize: "clamp(2rem, 3.2vw, 2.5rem)", lineHeight: "1.12", letterSpacing: "-0.5px" }}
          >
            CRAFTSMANSHIP
          </h2>

          <div
            className="space-y-5 text-neutral-700 font-normal"
            style={{ fontSize: "clamp(0.9375rem, 1.25vw, 1.0625rem)", lineHeight: "1.8" }}
          >
            <p>
              Walkline is a footwear brand built around the belief that every step should feel as good as it looks. From the first design sketch to the final finishing touch, we focus on quality, comfort, and craftsmanship to create footwear that fits effortlessly into your everyday life.
            </p>
            <p>
              Every pair of Walkline footwear reflects our dedication to thoughtful design, attention to detail, and continuous improvement. We believe great footwear is more than just a style statement — it&apos;s a part of your journey, your confidence, and the way you move through the world.
            </p>
            <p>
              We approach every design with curiosity and creativity, blending modern trends, practical comfort, and reliable quality to create styles that stand out without trying too hard. From everyday essentials to statement-making designs, we strive to find the perfect balance between fashion, function, and durability.
            </p>
            <p className="italic text-neutral-800 font-medium">
              Because for us, footwear isn&apos;t just about getting somewhere. It&apos;s about how you get there. And with Walkline, we want every step to leave a lasting impression.
            </p>
          </div>

          <div className="mt-9 sm:mt-10">
            <a
              href="#who-we-are"
              className="inline-flex items-center gap-2.5 px-7 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300"
            >
              <span>DISCOVER OUR STORY</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION THREE: WHO WE ARE ─────────────────────── */}
      <section
        id="who-we-are"
        className="w-full bg-[#FAFAFA] border-y border-neutral-200/70 py-14 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16"
      >
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="max-w-[580px]">
            <p className="text-[15px] sm:text-[17px] font-medium uppercase tracking-[0.18em] text-[#27409A] mb-3">
              WHO WE ARE
            </p>
            <h2
              className="font-medium uppercase text-[#0A0A0A] leading-[1.12] mb-5 sm:mb-7"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", letterSpacing: "-0.5px" }}
            >
              BUILT ON QUALITY. MADE FOR EVERY STEP.
            </h2>

            <div
              className="space-y-4 text-neutral-700"
              style={{ fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)", lineHeight: "1.75" }}
            >
              <p>
                Walkline is a recognized, Indian-made footwear brand headquartered in Modern Industrial Estate (MIE), Haryana — the heart of India&apos;s footwear manufacturing belt.
              </p>
              <p>
                Since 2010, we have grown from a focused PU footwear manufacturer into a full-spectrum lifestyle footwear brand spanning Men, Women and Kids — sold across India and exported to Asian and Middle East regions.
              </p>
              <p>
                We have <span className="font-bold text-neutral-950">1,000+ active SKUs</span>, with a capacity to manufacture <span className="font-bold text-neutral-950">50,000 pairs per day</span> and on the road to scale upto 1 lakh pairs per day within a span of 3-5 years.
              </p>
              <p>
                We maintain the highest standards of professionalism, honesty and ethical manufacturing — ISO 9001 and SEDEX/SA8000.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 pt-5 mt-5 border-t border-neutral-200">
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#0A0A0A] tracking-tight">1,000+</p>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 mt-1">Active SKUs</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#0A0A0A] tracking-tight">50,000</p>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 mt-1">Pairs Per Day Capacity</p>
              </div>
            </div>
          </div>

          {/* Right: brand video replacing old image */}
          <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] overflow-hidden border border-neutral-200/90 shadow-sm bg-neutral-100">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Walkline Footwear — Brand Showcase Video"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets/logo/lol.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ─── SECTION FOUR: FOUNDER NOTE ────────────────────── */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-[620px] order-2 lg:order-1">
            <p className="text-[15px] sm:text-[17px] font-medium uppercase tracking-[0.18em] text-[#27409A] mb-3">
              FOUNDER&apos;S NOTE
            </p>
            <h2
              className="font-medium uppercase text-[#0A0A0A] leading-[1.12] mb-6 sm:mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", letterSpacing: "-0.5px" }}
            >
              A MESSAGE FROM LEADERSHIP
            </h2>

            <blockquote className="text-neutral-700 text-base sm:text-lg leading-relaxed sm:leading-[1.8] mb-8 sm:mb-10 font-normal">
              &ldquo;As we embark on an exciting journey, I take this opportunity to acknowledge the contributions of every team member — and welcome many more new friends onboard as we venture towards new horizons. Walkline Group Management stands behind our vision and values, continuously striving to improve processes by investing in state-of-the-art design equipment and enhanced personnel training. Above all, we want to be a responsible, progressive &amp; sensitive corporate citizen — deeply committed to the economic, social and human development of our nation.&rdquo;
            </blockquote>

            <div className="border-t border-neutral-200 pt-5">
              <p className="text-base sm:text-lg font-black uppercase tracking-tight text-[#0A0A0A]">
                Pawan Anand
              </p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 mt-0.5">
                Managing Director | Walkline Footwear
              </p>
            </div>
          </div>

          <div className="relative aspect-square sm:aspect-[4/4] lg:aspect-[5/5] max-w-[540px] w-full mx-auto order-1 lg:order-2 overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100">
            <Image
              src={assets.hero.founder}
              alt="Pawan Anand — Managing Director, Walkline Footwear"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover object-top select-none"
            />
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden leading-none" aria-label="Above and Beyond — A promise to our customers">
        <Image
          src={assets.lifestyle.aboutAboveAndBeyond}
          alt="ABOVE & BEYOND — Not Just a Tagline, A promise To Our Customer — Pawan Anand, Managing Director"
          width={1460}
          height={366}
          sizes="100vw"
          className="block h-auto w-full select-none"
        />
      </section>

      <Footer />
    </main>
  );
}
