"use client";

import { useState } from "react";
import Button from "@/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#ECE9E2] border border-[#111111]/10 rounded-3xl p-8 sm:p-10">
      <h3 className="text-2xl font-extrabold uppercase tracking-tight text-[#111111] mb-2">
        Send an Inquiry
      </h3>
      <p className="text-sm text-[#6F6B65] mb-8">
        Fill out the form below and our trade desk will respond promptly.
      </p>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-[#111111] text-[#F5F3EF] text-center space-y-3">
          <div className="text-xs font-mono text-[#C85237] uppercase tracking-widest">
            INQUIRY RECEIVED
          </div>
          <div className="text-xl font-bold uppercase">
            Thank you for reaching out
          </div>
          <p className="text-xs text-[#A8A29E] max-w-sm mx-auto">
            Our trade fulfillment team will review your requirements and get back to you within 1-2 business days.
          </p>
        </div>
      ) : (
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6B65] mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-[#F5F3EF] border border-[#111111]/15 text-sm focus:outline-none focus:border-[#C85237]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6B65] mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[#F5F3EF] border border-[#111111]/15 text-sm focus:outline-none focus:border-[#C85237]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6B65] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-[#F5F3EF] border border-[#111111]/15 text-sm focus:outline-none focus:border-[#C85237]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6B65] mb-2">
                Inquiry Type
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-[#F5F3EF] border border-[#111111]/15 text-sm focus:outline-none focus:border-[#C85237]">
                <option>Wholesale & Distribution</option>
                <option>Retail Dealership</option>
                <option>Institutional Supply</option>
                <option>General Inquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F6B65] mb-2">
              Message / Requirements
            </label>
            <textarea
              rows="4"
              required
              placeholder="Describe your inquiry or order volume requirements..."
              className="w-full px-4 py-3 rounded-xl bg-[#F5F3EF] border border-[#111111]/15 text-sm focus:outline-none focus:border-[#C85237]"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            icon="arrow-up-right"
            className="w-full sm:w-auto font-bold uppercase tracking-wider text-xs"
          >
            Submit Inquiry
          </Button>
        </form>
      )}
    </div>
  );
}
