"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Check,
  ShieldCheck,
  Ruler,
  Truck,
  ArrowRight,
  Package,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/navbar/CartDrawer";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ProductDetailClient({ product, relatedProducts = [] }) {
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState(
    product?.availableSizes?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("specifications"); // specifications | description | care

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.series,
      category: product.category,
      image: product.image,
      size: selectedSize,
      quantity: quantity,
    });

    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      setIsCartOpen(true);
    }, 600);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-28 sm:pt-32 pb-20 text-[#000000]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-8"
          >
            <Link href="/" className="hover:text-[#27409A] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={
                product.categoryKey === "mens-sandals"
                  ? "/men"
                  : product.categoryKey === "womens-sneakers"
                  ? "/women"
                  : product.categoryKey === "kids-footwear"
                  ? "/kids"
                  : "/sandals"
              }
              className="hover:text-[#27409A] transition-colors truncate"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-[#000000] font-bold truncate">
              {product.series}
            </span>
          </nav>

          {/* Main PDP Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* LEFT: Product Gallery Stage */}
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="sticky top-28 space-y-4">
                {/* Main Image Stage */}
                <div className="relative aspect-square w-full bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm flex items-center justify-center p-8 sm:p-14 group">
                  <Image
                    src={product.image}
                    alt={`${product.series} — Walkline Footwear`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-contain p-6 sm:p-10 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Badge Overlay */}
                  <div className="absolute top-5 left-5 flex flex-col gap-2">
                    <span
                      className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${product.badgeColor}`}
                    >
                      {product.tag}
                    </span>
                  </div>

                  {/* Origin Stamp */}
                  <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-xs border border-neutral-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#27409A]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#27409A]" />
                    <span>Bahadurgarh Facility</span>
                  </div>
                </div>

                {/* Color Swatch Previews */}
                {product.colors && product.colors.length > 0 && (
                  <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-neutral-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#27409A]">
                      Colorways:
                    </span>
                    <div className="flex items-center gap-2">
                      {product.colors.map((c, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 rounded-full border-2 border-white shadow-xs"
                          style={{ backgroundColor: c }}
                          title={`Color ${i + 1}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-neutral-500 ml-auto font-medium">
                      Multi-tone aesthetic
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: Product Meta & Purchase / Inquiry */}
            <div className="lg:col-span-6 xl:col-span-5 space-y-6">
              {/* Header Info */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#27409A]">
                    {product.category}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500">
                    {product.sizes}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#000000] leading-none">
                  {product.series}
                </h1>

                <p className="text-base sm:text-lg text-neutral-600 font-medium mt-3 leading-snug">
                  {product.tagline}
                </p>
              </div>

              {/* Pricing & Availability Disclaimer */}
              <div className="p-4 rounded-2xl bg-white border border-neutral-200">
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-[#27409A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#000000]">
                      Authorized Distribution & Retail
                    </div>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Walkline is distributed via verified regional distributors and select retailers. Add to your bag to submit an availability or wholesale quote inquiry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#27409A]">
                  Engineered Highlights
                </div>
                <div className="space-y-2">
                  {product.features?.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#000000] font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27409A] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="pt-3 border-t border-neutral-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#000000]">
                    Select Size:
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsSizeGuideOpen(!isSizeGuideOpen)}
                    className="text-xs font-bold uppercase tracking-wider text-[#27409A] hover:text-[#000000] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size Guide</span>
                  </button>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
                  {product.availableSizes?.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-[#27409A] text-white border-[#27409A] shadow-sm"
                            : "bg-white text-[#000000] border-neutral-200 hover:border-[#27409A] hover:text-[#27409A]"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>

                {/* Inline Size Guide Modal */}
                {isSizeGuideOpen && (
                  <div className="mt-3 p-4 rounded-xl bg-white border border-neutral-200 animate-in fade-in duration-200">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#000000] mb-2 flex items-center justify-between">
                      <span>UK / India Standard Footwear Sizing</span>
                      <button
                        onClick={() => setIsSizeGuideOpen(false)}
                        className="text-neutral-400 hover:text-[#000000]"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="text-[11px] text-neutral-600 leading-relaxed mb-3">
                      Walkline footwear is crafted to standard Indian/UK shoe sizes with ergonomic arch and heel comfort cushions. If you are between sizes, we recommend selecting one size up.
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] border-t border-neutral-100 pt-2">
                      <div>
                        <span className="font-bold text-[#000000] block">UK/IND</span>
                        <span className="text-neutral-600">4 to 10</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#000000] block">EU</span>
                        <span className="text-neutral-600">37 to 45</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#000000] block">Fit</span>
                        <span className="text-neutral-600">True to Size</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity & Add to Bag Actions */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity Counter */}
                  <div className="flex items-center border border-neutral-200 rounded-xl bg-white p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-10 h-10 flex items-center justify-center text-sm font-bold text-[#000000] hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-[#000000]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-10 h-10 flex items-center justify-center text-sm font-bold text-[#000000] hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Primary Add to Bag Button */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                    className={`flex-1 py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer ${
                      addedSuccess
                        ? "bg-[#2A7242] text-white"
                        : selectedSize
                        ? "bg-[#27409A] hover:bg-[#1E327A] text-white"
                        : "bg-[#27409A]/40 text-white/70 cursor-not-allowed"
                    }`}
                  >
                    {addedSuccess ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>
                          {selectedSize
                            ? `Add ${selectedSize} to Bag`
                            : "Select a Size"}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Secondary Wholesale / B2B Inquiry Action */}
                <Link
                  href={`/contact?subject=wholesale&product=${encodeURIComponent(
                    product.series
                  )}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-white border border-neutral-200 text-[#000000] font-bold uppercase tracking-wider text-xs hover:border-[#27409A] hover:text-[#27409A] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Wholesale & Bulk Order Inquiry</span>
                  <ArrowRight className="w-4 h-4 text-[#27409A]" />
                </Link>
              </div>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-200">
                <div className="p-3 bg-white rounded-xl border border-neutral-200 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#27409A] shrink-0" />
                  <div className="text-[11px] leading-tight">
                    <span className="font-bold text-[#000000] block">
                      100% Authentic
                    </span>
                    <span className="text-neutral-500">Walkline Certified</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-neutral-200 flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-[#27409A] shrink-0" />
                  <div className="text-[11px] leading-tight">
                    <span className="font-bold text-[#000000] block">
                      Pan-India Dispatch
                    </span>
                    <span className="text-neutral-500">Prompt Shipping</span>
                  </div>
                </div>
              </div>

              {/* Tabbed Specifications & Story Section */}
              <div className="pt-4 border-t border-neutral-200">
                {/* Tab buttons */}
                <div className="flex border-b border-neutral-200 gap-6 mb-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab("specifications")}
                    className={`pb-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                      activeTab === "specifications"
                        ? "border-[#27409A] text-[#27409A]"
                        : "border-transparent text-neutral-500 hover:text-[#000000]"
                    }`}
                  >
                    Specifications
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("description")}
                    className={`pb-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                      activeTab === "description"
                        ? "border-[#27409A] text-[#27409A]"
                        : "border-transparent text-neutral-500 hover:text-[#000000]"
                    }`}
                  >
                    The Story
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("care")}
                    className={`pb-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                      activeTab === "care"
                        ? "border-[#27409A] text-[#27409A]"
                        : "border-transparent text-neutral-500 hover:text-[#000000]"
                    }`}
                  >
                    Care & Fit
                  </button>
                </div>

                {/* Tab content */}
                {activeTab === "specifications" && (
                  <div className="bg-white rounded-2xl p-4 border border-neutral-200 divide-y divide-neutral-100">
                    {product.specifications?.map((spec, i) => (
                      <div
                        key={i}
                        className="py-2.5 flex items-center justify-between text-xs"
                      >
                        <span className="font-bold text-neutral-500 uppercase tracking-wider">
                          {spec.label}
                        </span>
                        <span className="font-semibold text-[#000000] text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "description" && (
                  <div className="bg-white rounded-2xl p-5 border border-neutral-200">
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}

                {activeTab === "care" && (
                  <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-3 text-xs text-neutral-600 leading-relaxed">
                    <p>
                      • Wipe clean with a damp cloth or soft sponge using mild soap.
                    </p>
                    <p>
                      • Allow footwear to air dry naturally away from direct high heat or radiators.
                    </p>
                    <p>
                      • Keep in a cool, ventilated area when not in use.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts && relatedProducts.length > 0 && (
            <section className="mt-24 pt-12 border-t border-neutral-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#27409A] block mb-1">
                    Complete Your Rotation
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#000000]">
                    Related Styles
                  </h2>
                </div>
                <Link
                  href="/collections"
                  className="text-xs font-bold uppercase tracking-wider text-[#27409A] hover:text-[#000000] flex items-center gap-1"
                >
                  <span>View All Collections</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/products/${rel.slug}`}
                    className="group bg-white rounded-2xl p-4 border border-neutral-200 hover:border-[#27409A] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-square w-full bg-neutral-50 rounded-xl overflow-hidden mb-3 p-3 flex items-center justify-center">
                        <Image
                          src={rel.image}
                          alt={rel.series}
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                        <span
                          className={`absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${rel.badgeColor}`}
                        >
                          {rel.tag}
                        </span>
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#27409A]">
                        {rel.category}
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-tight text-[#000000] group-hover:text-[#27409A] transition-colors mt-0.5 truncate">
                        {rel.series}
                      </h3>
                      <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                        {rel.tagline}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-[11px] font-bold uppercase text-[#27409A]">
                      <span>View Shoe</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
