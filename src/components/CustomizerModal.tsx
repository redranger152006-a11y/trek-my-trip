import React, { useState } from "react";
import { TravelPackage } from "../types";
import { X, Users, Calendar, Sparkles, Check, ChevronRight, Phone, MessageSquarePlus, BadgeAlert } from "lucide-react";

interface CustomizerModalProps {
  pkg: TravelPackage;
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
}

export default function CustomizerModal({ pkg, isOpen, onClose, whatsappNumber }: CustomizerModalProps) {
  if (!isOpen) return null;

  // Configuration States
  const [travelers, setTravelers] = useState(2);
  const [date, setDate] = useState("");
  const [tier, setTier] = useState<"standard" | "premium">("standard");
  const [includeCampfire, setIncludeCampfire] = useState(false);
  const [includeBBQ, setIncludeBBQ] = useState(false);
  const [includeTransport, setIncludeTransport] = useState(false);

  // Core Math
  const basePersonPrice = pkg.price;
  const tierPersonMarkup = tier === "premium" ? 350 : 0;
  const bbqPersonCost = includeBBQ ? 300 : 0;

  const rawPersonTotal = basePersonPrice + tierPersonMarkup + bbqPersonCost;
  const personSubtotal = rawPersonTotal * travelers;

  // Add-on lump sums
  const campfireLumpSum = includeCampfire ? 1200 : 0;
  const transportLumpSum = includeTransport ? 1500 : 0;

  const grandTotalBeforeDiscount = personSubtotal + campfireLumpSum + transportLumpSum;

  // Volume Discounts
  let discountPercent = 0;
  let discountLabel = "Standard Price";
  if (travelers >= 10) {
    discountPercent = 0.10;
    discountLabel = "10% Group Saver Discount Active";
  } else if (travelers >= 5) {
    discountPercent = 0.05;
    discountLabel = "5% Mini-Group Discount Active";
  } else if (travelers === 1) {
    // 1 traveler has a small markup due to private driver overhead
    discountPercent = -0.10;
    discountLabel = "10% Single Supplement Applied";
  }

  const discountAmount = personSubtotal * discountPercent;
  const finalTotal = Math.round(grandTotalBeforeDiscount - discountAmount);

  // Generate WhatsApp Message URLs
  const handleBookWithCustomQuote = () => {
    const formattedDate = date ? new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "To be decided";
    
    // Construct text using EXACT compliance requested lines with detailed additions for clarity
    const rawMessage = `Hello Trek My Trip,

I am interested in the ${pkg.name} package.

Please share more details.

-------------------------------------------
📋 MY TRIP PREFERENCES (CUSTOM QUOTE):
- Package: ${pkg.name} (${pkg.duration})
- Number of Travelers: ${travelers} guest${travelers > 1 ? 's' : ''}
- Tentative Travel Date: ${formattedDate}
- Package Tier: ${tier.toUpperCase()} Package
- Special Add-ons Selected:
  * Private Campfire: ${includeCampfire ? 'Yes (₹1,200)' : 'No'}
  * Buffet Garden BBQ: ${includeBBQ ? 'Yes (₹300/person)' : 'No'}
  * Station Pickup & Drop: ${includeTransport ? 'Yes (₹1,500)' : 'No'}
- Total Estimated Cost: ₹${finalTotal.toLocaleString("en-IN")} (${discountLabel})
-------------------------------------------

Please confirm guide availability and share the secure booking steps.`;

    const encodedText = encodeURIComponent(rawMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  const handleBookWithStandardFormatOnly = () => {
    // EXACT format requested in guidelines:
    // Hello Trek My Trip,
    // 
    // I am interested in the [PACKAGE NAME] package.
    // 
    // Please share more details.
    
    const standardMessage = `Hello Trek My Trip,

I am interested in the ${pkg.name} package.

Please share more details.`;

    const encodedText = encodeURIComponent(standardMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-scale-up grid grid-cols-1 md:grid-cols-12">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/95 shadow-md flex items-center justify-center text-gray-500 hover:text-gray-800 border border-gray-100 hover:scale-105 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual summary & Pack Details */}
        <div className="md:col-span-5 bg-teal-900 text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle nature accent circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-700/20 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl" />

          <div className="relative z-10 space-y-6">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              {pkg.duration}
            </span>
            <div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-none">
                {pkg.name}
              </h3>
              <p className="text-teal-200 text-xs mt-1.5 font-bold flex items-center gap-1">
                ⭐ {pkg.rating} ({pkg.reviewsCount} organic reviews)
              </p>
            </div>

            <p className="text-sm text-teal-100/90 leading-relaxed font-medium">
              {pkg.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Highlights included:
              </h4>
              <ul className="space-y-2 text-xs text-teal-50">
                {pkg.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-teal-800/80 mt-6 relative z-10">
            <div className="flex justify-between items-center bg-teal-950/40 p-3 rounded-2xl border border-teal-800">
              <div>
                <span className="text-xs text-teal-300 block">Pricing standard</span>
                <span className="font-display font-extrabold text-xl text-amber-400">
                  ₹{pkg.price}
                </span>
                <span className="text-[10px] text-teal-200">/ person starting</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-300 block">Verified Operator</span>
                <span className="text-xs bg-emerald-600/30 text-emerald-400 border border-emerald-500/20 font-bold px-2 py-0.5 rounded">
                  Best Rate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Custom Configurator Form */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-slate-50">
          <div>
            <div className="mb-6">
              <h3 className="font-display font-extrabold text-xl text-slate-800 flex items-center gap-2">
                <Sparkles className="text-teal-600 w-5 h-5 fill-teal-100" />
                Customize Group Quote
              </h3>
              <p className="text-xs text-gray-500">
                Adjust traveler count and add optional activities to prepare a precise WhatsApp booking request.
              </p>
            </div>

            <div className="space-y-5">
              {/* Traveler Count */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-teal-600" />
                    Headcount
                  </label>
                  <span className="font-display font-black text-teal-700 text-lg">
                    {travelers} Traveler{travelers > 1 ? "s" : ""}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value))}
                  className="w-full accent-teal-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold px-1 mt-1">
                  <span>1 Guest</span>
                  <span>5 (5% Off)</span>
                  <span>10+ (10% Off)</span>
                  <span>20 Guests</span>
                </div>
              </div>

              {/* Date travel */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                  <Calendar className="w-4 h-4 text-teal-600" />
                  Proposed Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-teal-500 font-medium"
                />
              </div>

              {/* Package category Tier cards */}
              <div>
                <span className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                  Accommodation Stay Tier
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTier("standard")}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      tier === "standard"
                        ? "border-teal-600 bg-teal-50/50 shadow-sm ring-1 ring-teal-500/50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span className="font-bold text-sm block text-slate-800">Standard Room</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-extrabold">{pkg.destination} Base Rate</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier("premium")}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      tier === "premium"
                        ? "border-teal-600 bg-teal-50/50 shadow-sm ring-1 ring-teal-500/50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span className="font-bold text-sm block text-slate-800 flex items-center gap-1">
                      Premium Suite
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    </span>
                    <span className="text-[10px] text-teal-600 font-bold">+₹350/person stay adds</span>
                  </button>
                </div>
              </div>

              {/* Optional Addons */}
              <div>
                <span className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                  Selective Experience Addons
                </span>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="flex gap-3 items-center">
                      <input
                        type="checkbox"
                        checked={includeCampfire}
                        onChange={(e) => setIncludeCampfire(e.target.checked)}
                        className="w-4.5 h-4.5 rounded text-teal-600 focus:ring-teal-500 accent-teal-600 cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Private Campfire setup</span>
                        <span className="text-[10px] text-slate-400">Perfect evening group wood bonfire</span>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100">
                      +₹1,200 absolute
                    </span>
                  </label>

                  <label className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="flex gap-3 items-center">
                      <input
                        type="checkbox"
                        checked={includeBBQ}
                        onChange={(e) => setIncludeBBQ(e.target.checked)}
                        className="w-4.5 h-4.5 rounded text-teal-600 focus:ring-teal-500 accent-teal-600 cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Traditional Buffet BBQ Dinner</span>
                        <span className="text-[10px] text-slate-400">Hot charcoal grilled veggies/chicken items</span>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100">
                      +₹300 / person
                    </span>
                  </label>

                  <label className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="flex gap-3 items-center">
                      <input
                        type="checkbox"
                        checked={includeTransport}
                        onChange={(e) => setIncludeTransport(e.target.checked)}
                        className="w-4.5 h-4.5 rounded text-teal-600 focus:ring-teal-500 accent-teal-600 cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Station Transit Pick-and-Drop</span>
                        <span className="text-[10px] text-slate-400">Pick details from nearest railway station</span>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100">
                      +₹1,500 absolute
                    </span>
                  </label>
                </div>
              </div>

            </div>
          </div>

          {/* Pricing Estimation segment */}
          <div className="mt-8 pt-4 border-t border-slate-200">
            <div className="bg-teal-50 rounded-2xl p-4 border border-teal-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <span className="text-[11px] font-bold text-teal-800/80 uppercase tracking-wider block">
                  Interactive Live Price Estimate ({travelers} Guest{travelers > 1 ? "s" : ""})
                </span>
                <span className="font-display font-black text-3xl text-primary block mt-1">
                  ₹{finalTotal.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                  {discountLabel}
                </span>
              </div>
              <div className="flex items-end flex-col gap-1">
                <span className="text-[10px] text-gray-500 block">Direct booking on WhatsApp</span>
                <span className="text-xs font-semibold text-teal-700 bg-teal-100 border border-teal-200 px-2.5 py-0.5 rounded-full inline-block">
                  No Reservation Fees
                </span>
              </div>
            </div>

            {/* TWO buttons: 
              1. Book on WhatsApp (Custom Estimate details)
              2. Book on WhatsApp (Exact format requested by user)
            */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleBookWithCustomQuote}
                className="flex-1 bg-primary hover:bg-primary-dark text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-teal-900/20 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <MessageSquarePlus className="w-5 h-5 shrink-0" />
                <span>Submit Customized Quote</span>
              </button>

              <button
                type="button"
                onClick={handleBookWithStandardFormatOnly}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Book Instant Package</span>
              </button>
            </div>
            
            <p className="text-[10px] text-center text-gray-400 mt-2.5">
              Instant Redirect. Open Android, iOS, or Web WhatsApp client with pre-made templates safely.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
