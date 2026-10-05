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
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-neutral-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="p-5 sm:p-6 border-b border-neutral-200 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#27409A]" />
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#000000]">
                Your Bag
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#27409A] text-white">
                {itemCount} {itemCount === 1 ? "ITEM" : "ITEMS"}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 hover:text-[#27409A] text-[#000000] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Announcement Strip */}
          <div className="mt-3.5 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#000000] mb-1">
              <span>
                {typeof COMPANY_INFO.announcement === "object"
                  ? COMPANY_INFO.announcement.text
                  : COMPANY_INFO.announcement}
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-neutral-200 overflow-hidden">
              <div className="h-full bg-[#27409A] w-full" />
            </div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-3.5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#27409A] shadow-sm">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-base font-bold uppercase tracking-tight text-[#000000]">
                  Your bag is empty
                </h4>
                <p className="text-xs text-neutral-500 mt-1 max-w-[220px]">
                  Explore our engineered styles and add your favorite pairs.
                </p>
              </div>
              <Link
                href="/collections"
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-xl bg-[#27409A] hover:bg-[#1E327A] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Browse Collections
              </Link>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={`${item.productId}-${item.size}`}
                  className="p-3.5 rounded-2xl bg-white border border-neutral-200 flex gap-3.5 items-center"
                >
                  <Link
                    href={`/products/${item.slug}`}
                    onClick={onClose}
                    className="relative w-16 h-16 bg-neutral-50 rounded-xl border border-neutral-200 p-1 shrink-0 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1.5"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#27409A] block truncate">
                      {item.category}
                    </span>
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={onClose}
                      className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#000000] hover:text-[#27409A] transition-colors truncate block"
                    >
                      {item.name}
                    </Link>
                    <div className="text-[11px] text-neutral-600 font-semibold mt-0.5">
                      Size: {item.size}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-neutral-200 rounded-lg bg-neutral-50">
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(item.productId, item.size, item.quantity - 1)
                          }
                          className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#000000] hover:bg-white rounded-l-lg transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-[11px] font-bold text-[#000000]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(item.productId, item.size, item.quantity + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#000000] hover:bg-white rounded-r-lg transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.size)}
                        className="p-1 text-neutral-400 hover:text-red-500 transition-colors cursor-pointer ml-auto"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-3.5 rounded-2xl border border-dashed border-neutral-300 text-center space-y-1 bg-white">
                <ShieldCheck className="w-4 h-4 text-[#27409A] mx-auto" />
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#000000]">
                  100% Genuine Walkline Footwear
                </div>
                <div className="text-[10px] text-neutral-500">
                  Bahadurgarh Craft Facility • Pan-India Dispatch
                </div>
              </div>
            </>
          )}
        </div>

        {/* Cart Footer */}
        <div className="p-5 sm:p-6 border-t border-neutral-200 bg-white space-y-3">
          <div className="flex items-center justify-between text-xs text-neutral-600 font-medium">
            <span>Availability / Price</span>
            <span className="text-[#000000] font-bold uppercase text-[11px]">
              Direct Inquiry / Retail
            </span>
          </div>

          <Link
            href="/cart"
            onClick={onClose}
            className="w-full py-3.5 rounded-xl bg-[#27409A] hover:bg-[#1E327A] text-white font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>View Bag & Submit Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="text-center text-[10px] text-neutral-500 font-medium">
            Desk Helpline: {COMPANY_INFO.contact.phone}
          </div>
        </div>
      </div>
    </div>
  );
}
