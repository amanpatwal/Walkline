"use client";

import { useState } from "react";
import { Send, CheckCircle2, ArrowRight, Clock, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "Wholesale & Distribution",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white border border-[#24140D]/10 rounded-2xl p-7 sm:p-10 shadow-editorial-sm">
      <div className="flex items-center justify-between gap-4 mb-2">
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#24140D]">
          Send Trade Inquiry
        </h3>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF7F1] border border-[#24140D]/10 text-[#8A6E58]">
          Trade Desk
        </span>
      </div>
      <p className="text-xs sm:text-sm text-[#5A351F]/80 mb-8 leading-relaxed">
        Whether you are a retailer, distributor, or partner seeking bulk supply, share your requirements and our team will get back to you within 24 business hours.
      </p>

      {submitted ? (
        <div className="p-8 sm:p-10 rounded-xl bg-[#24140D] text-[#FAF7F1] text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#321D12] border border-[#C69A6B]/30 flex items-center justify-center mx-auto text-[#C69A6B]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="text-[11px] font-mono text-[#C69A6B] uppercase tracking-widest">
            INQUIRY REGISTERED
          </div>
          <h4 className="text-xl font-black uppercase tracking-tight text-[#FAF7F1]">
            Thank You, {formData.name || "Partner"}
          </h4>
          <p className="text-xs text-[#FAF7F1]/75 max-w-md mx-auto leading-relaxed">
            Your inquiry for <strong className="text-[#FAF7F1]">{formData.inquiryType}</strong> has been received by our commercial team at the Bahadurgarh headquarters.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  company: "",
                  inquiryType: "Wholesale & Distribution",
                  message: "",
                });
              }}
              className="text-xs font-bold uppercase tracking-wider text-[#C69A6B] hover:text-[#FAF7F1] underline transition-colors cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5A351F] mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Sharma"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F1] border border-[#24140D]/15 text-sm text-[#24140D] placeholder:text-[#8A6E58]/50 focus:outline-none focus:border-[#24140D] focus:ring-1 focus:ring-[#24140D] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5A351F] mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@business.com"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F1] border border-[#24140D]/15 text-sm text-[#24140D] placeholder:text-[#8A6E58]/50 focus:outline-none focus:border-[#24140D] focus:ring-1 focus:ring-[#24140D] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5A351F] mb-1.5">
                Contact Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9310223854"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F1] border border-[#24140D]/15 text-sm text-[#24140D] placeholder:text-[#8A6E58]/50 focus:outline-none focus:border-[#24140D] focus:ring-1 focus:ring-[#24140D] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5A351F] mb-1.5">
                Business / Store Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Footwear Traders"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F1] border border-[#24140D]/15 text-sm text-[#24140D] placeholder:text-[#8A6E58]/50 focus:outline-none focus:border-[#24140D] focus:ring-1 focus:ring-[#24140D] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5A351F] mb-1.5">
              Inquiry Classification *
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F1] border border-[#24140D]/15 text-sm text-[#24140D] focus:outline-none focus:border-[#24140D] focus:ring-1 focus:ring-[#24140D] transition-colors cursor-pointer"
            >
              <option value="Wholesale & Distribution">Wholesale & Regional Distribution</option>
              <option value="Retail Dealership">Authorized Retail Dealership</option>
              <option value="Institutional / Bulk Supply">Institutional / Bulk Corporate Supply</option>
              <option value="Product Line & Sizing Inquiry">Product Line & Sizing Information</option>
              <option value="General Support">General Support & Customer Feedback</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5A351F] mb-1.5">
              Detailed Requirements *
            </label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Please specify categories of interest (Vertex, Noir-05, VRX, Frooti), estimated order volumes, and your target location..."
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F1] border border-[#24140D]/15 text-sm text-[#24140D] placeholder:text-[#8A6E58]/50 focus:outline-none focus:border-[#24140D] focus:ring-1 focus:ring-[#24140D] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#24140D] text-[#FAF7F1] text-xs font-bold uppercase tracking-wider hover:bg-[#5A351F] transition-all cursor-pointer shadow-sm hover:shadow"
          >
            <span>Submit Trade Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}

      {/* Assurance footer */}
      <div className="mt-8 pt-6 border-t border-[#24140D]/08 flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#8A6E58]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#9A6238]" />
          <span>Walkline Footwear • Bahadurgarh Facility</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[#5A351F]">support@walklinefootwear.com</span>
        </div>
      </div>
    </div>
  );
}
