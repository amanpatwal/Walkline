"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag, ArrowRight, ShieldCheck, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { COMPANY_INFO } from "@/data/company";

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, updateQty, removeItem, itemCount } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Drawer"
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF7F1] h-full shadow-editorial-lg flex flex-col justify-between border-l border-[#24140D]/10 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="p-5 sm:p-6 border-b border-[#24140D]/10 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#24140D]" />
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#24140D]">
                Your Bag
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#321D12] text-[#FAF7F1]">
                {itemCount} {itemCount === 1 ? "ITEM" : "ITEMS"}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#F3E8D8] text-[#24140D] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Announcement Strip */}
          <div className="mt-3.5 p-2.5 rounded-xl bg-[#FAF7F1] border border-[#24140D]/08">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#24140D] mb-1">
              <span>
                {typeof COMPANY_INFO.announcement === "object"
                  ? COMPANY_INFO.announcement.text
                  : COMPANY_INFO.announcement}
              </span>
            </div>
            <div className="w-full h-1 rounded-full bg-[#E6D4BC] overflow-hidden">
              <div className="h-full bg-[#9A6238] w-full" />
            </div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-3.5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-white border border-[#24140D]/10 flex items-center justify-center text-[#9A6238] shadow-xs">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-base font-bold uppercase tracking-tight text-[#24140D]">
                  Your bag is empty
                </h4>
                <p className="text-xs text-[#5A351F]/70 mt-1 max-w-[220px]">
                  Explore our engineered styles and add your favorite pairs.
                </p>
              </div>
              <Link
                href="/collections"
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-xl bg-[#24140D] text-[#FAF7F1] text-xs font-bold uppercase tracking-wider hover:bg-[#5A351F] transition-all"
              >
                Browse Collections
              </Link>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={`${item.productId}-${item.size}`}
                  className="p-3.5 rounded-2xl bg-white border border-[#24140D]/10 flex gap-3.5 items-center"
                >
                  <Link
                    href={`/products/${item.slug}`}
                    onClick={onClose}
                    className="relative w-16 h-16 bg-[#FAF7F1] rounded-xl border border-[#24140D]/08 p-1 shrink-0 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1.5"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#8A6E58] block truncate">
                      {item.category}
                    </span>
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={onClose}
                      className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#24140D] hover:text-[#9A6238] transition-colors truncate block"
                    >
                      {item.name}
                    </Link>
                    <div className="text-[11px] text-[#5A351F] font-semibold mt-0.5">
                      Size: {item.size}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#24140D]/15 rounded-lg bg-[#FAF7F1]">
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(item.productId, item.size, item.quantity - 1)
                          }
                          className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#24140D] hover:bg-white rounded-l-lg transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-[11px] font-bold text-[#24140D]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(item.productId, item.size, item.quantity + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#24140D] hover:bg-white rounded-r-lg transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.size)}
                        className="p-1 text-[#8A6E58] hover:text-[#9A6238] transition-colors cursor-pointer ml-auto"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-3.5 rounded-2xl border border-dashed border-[#24140D]/20 text-center space-y-1 bg-[#F3E8D8]/30">
                <ShieldCheck className="w-4 h-4 text-[#9A6238] mx-auto" />
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#24140D]">
                  100% Genuine Walkline Footwear
                </div>
                <div className="text-[10px] text-[#5A351F]/80">
                  Bahadurgarh Craft Facility • Pan-India Dispatch
                </div>
              </div>
            </>
          )}
        </div>

        {/* Cart Footer */}
        <div className="p-5 sm:p-6 border-t border-[#24140D]/10 bg-white space-y-3">
          <div className="flex items-center justify-between text-xs text-[#5A351F] font-medium">
            <span>Availability / Price</span>
            <span className="text-[#24140D] font-bold uppercase text-[11px]">
              Direct Inquiry / Retail
            </span>
          </div>

          <Link
            href="/cart"
            onClick={onClose}
            className="w-full py-3.5 rounded-xl bg-[#321D12] text-[#FAF7F1] font-bold uppercase tracking-wider text-xs hover:bg-[#5A351F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-editorial-sm"
          >
            <span>View Bag & Submit Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="text-center text-[10px] text-[#8A6E58] font-medium">
            Desk Helpline: {COMPANY_INFO.contact.phone}
          </div>
        </div>
      </div>
    </div>
  );
}
