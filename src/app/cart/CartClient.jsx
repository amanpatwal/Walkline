"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Package,
  CheckCircle2,
  Phone,
  Building2,
  User,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function CartClient() {
  const { cart, updateQty, removeItem, clearCart, itemCount } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    inquiryType: "Retail Purchase & Sizing",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const refCode = `WL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refCode);
      setIsSubmitting(false);
      clearCart();
    }, 700);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-28 sm:pt-32 pb-24 text-[#000000]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
          {/* Header */}
          <div className="border-b border-neutral-200 pb-6 mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              <Link href="/" className="hover:text-[#27409A] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#000000] font-bold">Shopping Bag</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#000000]">
                  Your Bag
                </h1>
                <p className="text-sm text-neutral-600 mt-1 font-medium">
                  {itemCount > 0
                    ? `You have ${itemCount} ${
                        itemCount === 1 ? "style" : "styles"
                      } in your inquiry selection.`
                    : "Your bag is currently empty."}
                </p>
              </div>

              {cart.length > 0 && !submittedRef && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-red-500 transition-colors flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Bag</span>
                </button>
              )}
            </div>
          </div>

          {/* Submission Success State */}
          {submittedRef ? (
            <div className="max-w-2xl mx-auto p-8 sm:p-12 bg-white rounded-3xl border border-neutral-200 shadow-lg text-center space-y-6 my-10">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#27409A] block mb-2">
                  Inquiry Dispatched
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#000000]">
                  Thank You, {formData.name}
                </h2>
                <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                  Your inquiry has been logged with Walkline. Our Bahadurgarh sales & distribution desk will contact you via WhatsApp/Phone shortly with exact availability and retailer details.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 inline-block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                  Reference Code
                </span>
                <span className="text-lg font-bold text-[#27409A] tracking-wider">
                  {submittedRef}
                </span>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/collections"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#27409A] text-white font-bold uppercase tracking-wider text-xs hover:bg-[#1E327A] transition-all shadow-md"
                >
                  Continue Browsing
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-neutral-300 text-[#000000] font-bold uppercase tracking-wider text-xs hover:border-[#27409A] hover:text-[#27409A] transition-all"
                >
                  Contact Desk
                </Link>
              </div>
            </div>
          ) : cart.length === 0 ? (
            /* Empty Bag State */
            <div className="max-w-xl mx-auto py-16 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center mx-auto shadow-sm text-[#27409A]">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight text-[#000000]">
                  Your Bag Is Empty
                </h2>
                <p className="text-sm text-neutral-600 mt-2 max-w-sm mx-auto">
                  Explore Walkline&apos;s latest drops in men&apos;s sandals, women&apos;s sneakers, and comfort footwear.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/collections"
                  className="px-6 py-3.5 rounded-xl bg-[#27409A] text-white font-bold uppercase tracking-wider text-xs hover:bg-[#1E327A] transition-all shadow-md"
                >
                  View All Collections
                </Link>
                <Link
                  href="/men"
                  className="px-6 py-3.5 rounded-xl bg-white border border-neutral-300 text-[#000000] font-bold uppercase tracking-wider text-xs hover:border-[#27409A] hover:text-[#27409A] transition-all"
                >
                  Men&apos;s Sandals
                </Link>
                <Link
                  href="/women"
                  className="px-6 py-3.5 rounded-xl bg-white border border-neutral-300 text-[#000000] font-bold uppercase tracking-wider text-xs hover:border-[#27409A] hover:text-[#27409A] transition-all"
                >
                  Women&apos;s Sneakers
                </Link>
              </div>
            </div>
          ) : (
            /* Active Bag Grid */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Items List (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden divide-y divide-neutral-100 shadow-sm">
                  {cart.map((item) => (
                    <div
                      key={`${item.productId}-${item.size}`}
                      className="p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
                    >
                      {/* Product Thumbnail & Meta */}
                      <div className="flex items-center gap-4 min-w-0">
                        <Link
                          href={`/products/${item.slug}`}
                          className="relative w-20 h-20 sm:w-24 sm:h-24 bg-neutral-50 rounded-2xl border border-neutral-200 shrink-0 flex items-center justify-center p-2 group overflow-hidden"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-2 group-hover:scale-105 transition-transform"
                          />
                        </Link>

                        <div className="min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#27409A] block">
                            {item.category}
                          </span>
                          <Link
                            href={`/products/${item.slug}`}
                            className="text-base sm:text-lg font-black uppercase tracking-tight text-[#000000] hover:text-[#27409A] transition-colors truncate block"
                          >
                            {item.name}
                          </Link>
                          <div className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-bold text-neutral-700">
                            Size: {item.size}
                          </div>
                        </div>
                      </div>

                      {/* Quantity & Remove Buttons */}
                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-0 border-neutral-100">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-neutral-200 rounded-xl bg-neutral-50 p-0.5">
                          <button
                            type="button"
                            onClick={() =>
                              updateQty(item.productId, item.size, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-xs font-bold text-[#000000] hover:bg-white rounded-lg transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-[#000000]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQty(item.productId, item.size, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-xs font-bold text-[#000000] hover:bg-white rounded-lg transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Action */}
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId, item.size)}
                          className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                          aria-label={`Remove ${item.name} size ${item.size} from bag`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Authenticity Guarantee Card */}
                <div className="p-5 rounded-2xl bg-white border border-neutral-200 flex items-start gap-4 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#27409A] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#000000]">
                      Direct From Bahadurgarh Craft Facility
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      All shoes are authentic Walkline Footwear with precision sole cushioning and all-day comfort engineering. Verified dispatch across India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Order / Inquiry Submission Form (5 cols) */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-sm space-y-6 sticky top-28">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#27409A] block mb-1">
                      Order / Bag Inquiry
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#000000]">
                      Inquiry Summary
                    </h2>
                    <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                      Walkline footwear is distributed through authorized retail channels and direct distributor networks. Submit your inquiry to verify local availability, get pricing, or place a wholesale order.
                    </p>
                  </div>

                  {/* Summary Bar */}
                  <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-between text-xs">
                    <span className="font-bold text-neutral-600 uppercase tracking-wider">
                      Selected Styles
                    </span>
                    <span className="font-bold text-[#000000]">
                      {itemCount} {itemCount === 1 ? "pair" : "pairs"}
                    </span>
                  </div>

                  {/* Inquiry Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#000000] mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your Name"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-[#000000] font-medium placeholder:text-neutral-400 focus:outline-none focus:border-[#27409A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#000000] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-[#000000] font-medium placeholder:text-neutral-400 focus:outline-none focus:border-[#27409A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#000000] mb-1.5">
                        City & State
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          placeholder="e.g. New Delhi, Mumbai, Bengaluru..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-[#000000] font-medium placeholder:text-neutral-400 focus:outline-none focus:border-[#27409A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#000000] mb-1.5">
                        Inquiry Purpose
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({ ...formData, inquiryType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-[#000000] font-medium focus:outline-none focus:border-[#27409A]"
                      >
                        <option value="Retail Purchase & Sizing">
                          Individual Purchase / Local Retailer
                        </option>
                        <option value="Wholesale & Bulk Order">
                          Wholesale / Retail Store Stocking
                        </option>
                        <option value="Distributor Network">
                          Distributor & Regional Partnership
                        </option>
                        <option value="Corporate / Institution">
                          Corporate / Institution Order
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#000000] mb-1.5">
                        Notes / Queries (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Any specific questions regarding fit, availability or quantities..."
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-[#000000] font-medium placeholder:text-neutral-400 focus:outline-none focus:border-[#27409A] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#27409A] hover:bg-[#1E327A] text-white font-bold uppercase tracking-wider text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Bag Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="pt-2 text-center text-[11px] text-neutral-500 font-medium">
                    Questions? Reach our desk at support@walklinefootwear.com
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
