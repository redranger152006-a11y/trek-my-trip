import React, { useState } from "react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background overlay details */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-primary" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-3">
            Frequently Asked Queries
          </h2>
          <p className="text-gray-600 font-medium text-xs sm:text-sm max-w-lg mx-auto">
            Everything you need to plan your trip. Learn how we structure pricing, organize transports, and coordinate with you on WhatsApp.
          </p>
        </div>

        {/* Accordion Panels list */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-teal-500/30 shadow-md ring-1 ring-teal-500/5"
                    : "border-slate-100 shadow-sm hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 font-bold text-slate-800 text-sm sm:text-base gap-4 select-none hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-300 transform shrink-0 ${
                    isOpen ? "rotate-180 bg-teal-50 text-teal-700" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer body with custom collapse */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-50" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="p-5 sm:p-6 text-gray-500 text-xs sm:text-[13px] leading-relaxed font-semibold bg-slate-50/30">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout section if they have further inquiries */}
        <div className="mt-12 text-center p-5 bg-teal-50 rounded-2xl border border-teal-100/50 max-w-xl mx-auto">
          <p className="text-xs text-teal-800 font-semibold mb-2">
            Have different requirements or need a complex customized itinerary?
          </p>
          <a
            href="#contact"
            className="text-xs font-extrabold text-primary hover:text-primary-dark underline flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Send our agents your custom requirements now</span>
          </a>
        </div>

      </div>
    </section>
  );
}
