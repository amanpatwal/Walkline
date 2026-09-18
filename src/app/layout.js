import { Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/animations/SmoothScroll";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Walkline Footwear — Modern Footwear & Engineered Movement",
    template: "%s | Walkline Footwear",
  },
  description:
    "Discover Walkline Footwear. Precision-engineered lifestyle, court, and performance footwear designed for comfort, modern aesthetics, and large-scale craftsmanship.",
  keywords: [
    "Walkline Footwear",
    "Indian Footwear Brand",
    "Modern Footwear Design",
    "Engineered Movement",
    "Lifestyle Sneakers",
    "Men Women Footwear",
    "Footwear Manufacturing India",
  ],
  authors: [{ name: "Walkline Footwear" }],
  creator: "Walkline Footwear",
  metadataBase: new URL("https://walklinefootwear.com"),
  openGraph: {
    title: "Walkline Footwear — Modern Footwear & Engineered Movement",
    description:
      "Precision-engineered lifestyle and performance footwear designed for comfort, modern aesthetics, and large-scale Indian craftsmanship.",
    url: "https://walklinefootwear.com",
    siteName: "Walkline Footwear",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0E0D0C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakartaSans.variable} font-sans`}>
      <body className="bg-[#F5F3EF] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#F5F3EF]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
