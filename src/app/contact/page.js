import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Container from "@/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import { CONTACT_CONTENT } from "@/data/contact";

export const metadata = {
  title: "Contact & Inquiries — Walkline Footwear",
  description: "Get in touch with Walkline Footwear for product inquiries, wholesale distribution, and customer support.",
};

export default function ContactPage() {
  return (
    <main className="relative w-full bg-[#F7F7F4] min-h-screen text-[#111111]">
      <Navbar />
      <div className="pt-36 pb-14 bg-[#FFFFFF] border-b-2 border-black/10">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#F4F000] border border-black shadow-[2px_2px_0px_0px_#000]">
              Verified Contact Information
            </span>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mt-4">
              {CONTACT_CONTENT.heading}
            </h1>
            <p className="text-sm sm:text-base font-bold text-[#555555] mt-3 leading-relaxed">
              {CONTACT_CONTENT.description}
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16 bg-[#F7F7F4]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Info Cards with Verified Source Content */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white border-2 border-black rounded-3xl p-7 shadow-[4px_4px_0px_0px_#000] space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#F4F000] border-2 border-black text-black shrink-0 shadow-[2px_2px_0px_0px_#000]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase text-[#888888]">Address</div>
                    <div className="text-sm font-bold text-[#111111] mt-1">
                      {CONTACT_CONTENT.address.full}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#FF4F7B] border-2 border-black text-white shrink-0 shadow-[2px_2px_0px_0px_#000]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase text-[#888888]">Phone Support</div>
                    <a
                      href={`tel:${CONTACT_CONTENT.phone.replace(/\s+/g, '')}`}
                      className="text-base font-black text-[#111111] hover:text-[#3155FF] transition-colors mt-1 block"
                    >
                      {CONTACT_CONTENT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#3155FF] border-2 border-black text-white shrink-0 shadow-[2px_2px_0px_0px_#000]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase text-[#888888]">Official Email</div>
                    <a
                      href={`mailto:${CONTACT_CONTENT.email}`}
                      className="text-base font-black text-[#111111] hover:text-[#3155FF] transition-colors mt-1 block"
                    >
                      {CONTACT_CONTENT.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Component */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
