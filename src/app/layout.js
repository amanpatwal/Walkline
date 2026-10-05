import { Rubik } from "next/font/google";
import SmoothScroll from "@/components/animations/SmoothScroll";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
  themeColor: "#27409A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} font-sans`} suppressHydrationWarning>
      <body
        className="bg-white text-[#000000] antialiased selection:bg-[#27409A] selection:text-white font-sans"
        suppressHydrationWarning
      >
        <CartProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
