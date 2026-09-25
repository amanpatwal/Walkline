"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { assets } from "@/data/assets";
import { COMPANY_INFO } from "@/data/company";

export default function CartDrawer({ isOpen, onClose }) {
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
        className="w-full max-w-md bg-[#FFFFFF] h-full shadow-2xl flex flex-col justify-between border-l-2 border-black animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="p-6 border-b-2 border-black/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-black" />
              <h3 className="text-xl font-black uppercase tracking-tight text-black">
                Your Bag
              </h3>
              <span className="text-xs font-black px-2 py-0.5 rounded-full bg-[#F4F000] border border-black text-black">
                1 ITEM
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#F7F7F4] border border-black/20 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Free Shipping Strip */}
          <div className="mt-4 p-3 rounded-xl bg-[#F7F7F4] border border-black/10">
            <div className="flex items-center justify-between text-xs font-bold text-black mb-1.5">
              <span>{typeof COMPANY_INFO.announcement === 'object' ? COMPANY_INFO.announcement.text : COMPANY_INFO.announcement}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden">
              <div className="h-full bg-[#A8E63D] w-full" />
            </div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="p-4 rounded-2xl bg-[#F7F7F4] border-2 border-black flex gap-4 items-center">
            <div className="relative w-20 h-20 bg-white rounded-xl border border-black p-2 shrink-0 flex items-center justify-center">
              <Image
                src={assets.products.noir}
                alt="Walkline Noir-05"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-mono font-bold text-[#888888] uppercase">
                Women&apos;s Sneakers
              </div>
              <h4 className="text-base font-black uppercase text-black truncate">
                Noir-05 Signature
              </h4>
              <div className="text-xs font-bold text-[#555555] mt-0.5">
                Size: UK 5 • Coral Cushion Sole
              </div>
              <div className="text-xs font-mono font-bold text-black mt-1">
                Qty: 1
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl border-2 border-dashed border-black/20 text-center space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#3155FF] mx-auto" />
            <div className="text-xs font-black uppercase text-black">
              100% Genuine Walkline Footwear
            </div>
            <div className="text-[11px] text-[#666666]">
              Direct from Bahadurgarh craft facility. Easy 30-day exchanges.
            </div>
          </div>
        </div>

        {/* Cart Footer */}
        <div className="p-6 border-t-2 border-black/10 bg-[#F7F7F4] space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-[#555555]">
            <span>Shipping</span>
            <span className="text-[#111111] font-black uppercase">Calculated at Checkout</span>
          </div>

          <button
            onClick={() => {
              onClose();
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full py-4 rounded-2xl bg-[#F4F000] text-black font-black uppercase tracking-wider text-xs border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-black hover:text-[#F4F000] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="text-center text-[10px] font-mono font-bold text-[#888888] uppercase">
            Questions? Contact {COMPANY_INFO.contact.phone}
          </div>
        </div>
      </div>
    </div>
  );
}
