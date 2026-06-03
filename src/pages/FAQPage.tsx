import React, { useState, useMemo } from "react";
import { HelpCircle, ChevronDown, Sparkles, MessageSquare, Search, BookOpen, Truck, HelpCircle as HelpIcon, Calendar } from "lucide-react";
import { motion } from "motion/react";

interface FAQItem {
  id: string;
  category: "booking" | "transport" | "camprules" | "refunds";
  question: string;
  answer: string;
}

const CATEGORIZED_FAQS: FAQItem[] = [
  {
    id: "fq1",
    category: "booking",
    question: "How do we book the packages with Trek My Trip?",
    answer: "It is extremely easy! Simply browse our packages, select the details you love, tap 'Book on WhatsApp', enter details like traveler headcount, and send the automated message. Our team will instantly confirm package guide availability and share secure booking instructions directly via WhatsApp.",
  },
  {
    id: "fq2",
    category: "booking",
    question: "Do starting rates feature hidden commissions or surprise fees?",
    answer: "Absolutely not. Our starting prices are transparent list guides covering native transportation, stay packages, and guiding fees. If you require hotel star additions or private jeeps, we customize the package and present the precise breakdown to you with no hidden booking markups.",
  },
  {
    id: "fq3",
    category: "transport",
    question: "Is transport provided from standard pickup locations?",
    answer: "Yes! We arrange convenient pick-ups and drops from popular transit junctions (including Kodaikanal Road Station, Madurai Railway Base, Madurai Airport, Munnar bus stands, or Coimbatore stations) based on your custom travel timetable.",
  },
  {
    id: "fq4",
    category: "transport",
    question: "What type of vehicles are used for localized sightseeing?",
    answer: "We offer highly comfortable, sanitised tourist cabs ranging from standard hatchbacks/sedans (for couples and small families) to spacious Travellers and Buses (for large college groups, corporate events, or joint family gatherings).",
  },
  {
    id: "fq5",
    category: "camprules",
    question: "Is forest camping safe for families and solo female travelers?",
    answer: "100% safe. Our high-altitude forest campsites (especially in Vattavada) are strictly fenced, fully secure, and curated under constant supervision of expert forest naturalists and native camp coordinators. Standard washrooms and proper lighting grids are provided.",
  },
  {
    id: "fq6",
    category: "camprules",
    question: "Will Trek My Trip set up private campfires & music nights?",
    answer: "Yes, definitely! You can customize your itinerary to include private evening bonfires, charcoal-grilled barbecue dinners, and acoustic music circles. Select these checkboxes on our package detail cards to estimate your price and lock guide availability.",
  },
  {
    id: "fq7",
    category: "refunds",
    question: "What is the reschedule and booking cancellation policy?",
    answer: "We understand that plans can change due to weather or natural transitions. Trek My Trip offers 100% free package date reschedules with no penalty if informed 48 hours prior to travel. In case of absolute cancellations, we issue transparent partial/full refunds based on hotel booking lockouts.",
  },
];

const categoryIcons = {
  booking: <BookOpen className="w-4 h-4" />,
  transport: <Truck className="w-4 h-4" />,
  camprules: <HelpIcon className="w-4 h-4" />,
  refunds: <Calendar className="w-4 h-4" />,
};

const categoryLabels = {
  booking: "General Booking",
  transport: "Transit & Pickups",
  camprules: "Camp Policies & Safety",
  refunds: "Reschedules & Refund",
};

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "booking" | "transport" | "camprules" | "refunds">("all");
  const [openIndexes, setOpenIndexes] = useState<Record<string, boolean>>({ "fq1": true });

  const toggleAccordion = (id: string) => {
    setOpenIndexes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFAQs = useMemo(() => {
    return CATEGORIZED_FAQS.filter(faq => {
      const matchCategory = selectedCategory === "all" || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch = searchQuery.trim() === "" || 
        faq.question.toLowerCase().includes(q) || 
        faq.answer.toLowerCase().includes(q);
      
      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="py-24 bg-slate-50 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-widest mb-3 select-none">
            <HelpCircle className="w-3.5 h-3.5 text-primary" />
            <span>Got Questions?</span>
          </div>
          <h1 className="font-display font-black text-3.5xl sm:text-5xl text-slate-900 tracking-tight leading-none mb-3">
            Frequently Asked Queries
          </h1>
          <p className="text-gray-500 font-medium text-xs sm:text-sm max-w-lg mx-auto">
            Everything you need to plan your trip. Learn how we structure pricing, organize transports, and coordinate guide scheduling directly.
          </p>
        </div>

        {/* Search and Category buttons block */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search help topics or keywords, e.g. campfire, safety, booking..."
              className="w-full bg-slate-50 border border-slate-150 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-800 font-semibold"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1 font-bold">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer border ${
                selectedCategory === "all"
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              All Columns
            </button>
            {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((catKey) => (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer border ${
                  selectedCategory === catKey
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-slate-205 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {categoryIcons[catKey]}
                <span>{categoryLabels[catKey]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Accordions list */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isOpen = !!openIndexes[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-305 overflow-hidden ${
                    isOpen
                      ? "border-teal-500/30 shadow-md ring-1 ring-teal-500/5"
                      : "border-slate-100 shadow-sm hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 font-bold text-slate-800 text-sm sm:text-base gap-4 select-none hover:bg-slate-50/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1 rounded bg-[#CCF2F4]/50 text-[#004F54] text-xs font-bold uppercase hidden sm:inline-block select-all tracking-wider">
                        {categoryLabels[faq.category].split(" ")[0]}
                      </span>
                      <span className="font-semibold text-xs sm:text-sm text-slate-800 pr-2">{faq.question}</span>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-slate-150/40 flex items-center justify-center text-slate-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 bg-teal-50 text-teal-700 font-black" : ""
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[350px] border-t border-slate-100" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="p-5 sm:p-6 text-gray-500 text-xs sm:text-[13px] leading-relaxed font-semibold bg-slate-50/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-lg mx-auto">
            <span className="text-4xl select-none">💬</span>
            <h3 className="font-display font-bold text-lg text-slate-800 mt-3 mb-1">No matches found</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold px-4">
              We couldn't find matching travel help answers for "{searchQuery}". Try selecting other filters or tap direct chat to talk with our team!
            </p>
          </div>
        )}

        {/* Lower Callout block */}
        <div className="mt-12 text-center p-6 bg-teal-50 rounded-2xl border border-teal-100/50 max-w-xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-teal-800 font-black">
            Have completely different custom package requirements?
          </p>
          <a
            href="#contact"
            className="text-xs font-bold text-primary hover:text-primary-dark underline flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Send our local vacation design coordinators an instant custom inquiry</span>
          </a>
        </div>

      </div>
    </motion.div>
  );
}
