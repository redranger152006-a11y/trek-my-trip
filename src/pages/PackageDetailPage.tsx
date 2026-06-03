import React, { useState, useEffect } from "react";
import { TRAVEL_PACKAGES } from "../data";
import { 
  ArrowLeft, Users, Calendar, Sparkles, Check, Phone, 
  MessageSquarePlus, ShieldCheck, MapPin, Star, AlertCircle, Sparkle 
} from "lucide-react";
import { motion } from "motion/react";

interface PackageDetailPageProps {
  packageId: string;
  onNavigate: (hash: string) => void;
  whatsappNumber: string;
}

export default function PackageDetailPage({ packageId, onNavigate, whatsappNumber }: PackageDetailPageProps) {
  // Find correct package matching url hash extraction
  const pkg = TRAVEL_PACKAGES.find(p => p.id === packageId) || TRAVEL_PACKAGES[0];

  useEffect(() => {
    // Scroll to top on load of detail page
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [packageId]);

  // Configuration States
  const [travelers, setTravelers] = useState(2);
  const [date, setDate] = useState("");
  const [tier, setTier] = useState<"standard" | "premium">("standard");
  const [includeCampfire, setIncludeCampfire] = useState(false);
  const [includeBBQ, setIncludeBBQ] = useState(false);
  const [includeTransport, setIncludeTransport] = useState(false);

  // Core Math configuration
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
  let discountLabel = "Standard Price Guide";
  if (travelers >= 10) {
    discountPercent = 0.10;
    discountLabel = "10% Group Saver Discount Active";
  } else if (travelers >= 5) {
    discountPercent = 0.05;
    discountLabel = "5% Mini-Group Discount Active";
  } else if (travelers === 1) {
    discountPercent = -0.10;
    discountLabel = "10% Single Supplement Applied";
  }

  const discountAmount = personSubtotal * discountPercent;
  const finalTotal = Math.round(grandTotalBeforeDiscount - discountAmount);

  // WhatsApp Message generators
  const handleBookWithCustomQuote = () => {
    const formattedDate = date ? new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "To be decided";
    
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
    const standardMessage = `Hello Trek My Trip,

I am interested in the ${pkg.name} package.

Please share more details.`;

    const encodedText = encodeURIComponent(standardMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="py-24 bg-slate-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link Row */}
        <button
          onClick={() => onNavigate("#packages")}
          className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary transition-colors cursor-pointer mb-8 py-2 select-none group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to All Packages</span>
        </button>

        {/* Dynamic Details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Descriptive highlights & detailed texts */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Title card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#0F766E] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  📍 {pkg.destination}
                </span>
                <span className="text-[10px] uppercase font-extrabold text-amber-700 bg-amber-50 px-3 py-1 rounded-full flex items-center gap-1">
                  ⭐ <span className="font-bold">{pkg.rating} Rating</span>
                </span>
              </div>

              <div>
                <h1 className="font-display font-black text-3xl sm:text-4.5xl text-slate-900 tracking-tight leading-none">
                  {pkg.name}
                </h1>
                <p className="text-xs sm:text-sm text-gray-400 font-bold block mt-2">
                  Trip Duration: {pkg.duration} stays – Verified Original Operator Booking
                </p>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
                {pkg.longDescription}
              </p>

              {/* Day-by-Day Experience structure */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h3 className="font-display font-bold text-lg text-slate-800 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  What makes this expedition unforgettable:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {pkg.highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className="p-3 bg-slate-50 rounded-2xl border border-slate-100/50 flex gap-2.5 items-start font-semibold text-xs text-slate-600"
                    >
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inclusions cards stack */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-5">
              <h3 className="font-display font-bold text-lg text-slate-800 flex items-center gap-2 border-b border-slate-50 pb-3">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                Standard Package Inclusions (Included from start):
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex gap-2.5 items-center text-xs text-gray-500 font-bold bg-teal-50/20 p-2.5 rounded-xl border border-teal-150/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{inclusion}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-xs text-amber-800 leading-relaxed font-semibold flex gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Important Notice:</strong> Starting rates are designed for standard couple occupancies. To scale vehicles to private buses, or include custom dining templates, specify preferences in the calculator.
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: Dynamic inline pricing customizer calculator */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-2 select-none">
                <Sparkle className="w-3.5 h-3.5 text-amber-600" />
                <span>Live Cost Calculator</span>
              </div>
              <h3 className="font-display font-black text-xl text-slate-800 leading-tight">
                Customize Group Quote
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Toggle guest counts, stays, and dynamic local addons below to generate a pre-loaded chat quote.
              </p>
            </div>

            <div className="space-y-6">
              {/* Traveler Headcount slide control */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-teal-600" />
                    Headcount
                  </label>
                  <span className="font-display font-black text-teal-700 text-base">
                    {travelers} Guest{travelers > 1 ? "s" : ""}
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
                <div className="flex justify-between text-[9px] text-slate-400 font-bold px-1 mt-1 select-none">
                  <span>1 Guest</span>
                  <span>5 (5% Off)</span>
                  <span>10+ (10% Off)</span>
                  <span>20 Guests</span>
                </div>
              </div>

              {/* Proposed travel Date picker */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                  <Calendar className="w-4 h-4 text-teal-600" />
                  Proposed Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-teal-500 font-bold"
                />
              </div>

              {/* Stay Tier Option Cards */}
              <div>
                <span className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                  Stay Accommodation tier
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTier("standard")}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                      tier === "standard"
                        ? "border-teal-600 bg-teal-50/50 shadow-sm ring-1 ring-teal-500/50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span className="font-bold text-xs sm:text-sm block text-slate-800">Standard Room</span>
                    <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mt-0.5">{pkg.destination} Base Rate</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier("premium")}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                      tier === "premium"
                        ? "border-teal-600 bg-teal-50/50 shadow-sm ring-1 ring-teal-500/50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span className="font-bold text-xs sm:text-sm block text-slate-800 flex items-center gap-1">
                      Premium Suite
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    </span>
                    <span className="text-[10px] text-teal-600 font-bold block mt-0.5">+₹350/person stays</span>
                  </button>
                </div>
              </div>

              {/* Special Activity Addons checkboxes */}
              <div>
                <span className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                  Optional Activity Addons
                </span>
                <div className="space-y-2">
                  
                  <label className="flex items-center justify-between p-3 bg-slate-50 border border-slate-150/80 rounded-xl cursor-pointer hover:bg-slate-100/50 transition-colors">
                    <div className="flex gap-2.5 items-center">
                      <input
                        type="checkbox"
                        checked={includeCampfire}
                        onChange={(e) => setIncludeCampfire(e.target.checked)}
                        className="w-4.5 h-4.5 rounded text-teal-600 focus:ring-teal-500 accent-teal-600 cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Private Campfire Wood Setup</span>
                        <span className="text-[10px] text-slate-400 block font-semibold">Perfect cozy evening group custom bonfire</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100 shrink-0">
                      +₹1,200 total
                    </span>
                  </label>

                  <label className="flex items-center justify-between p-3 bg-slate-50 border border-slate-150/80 rounded-xl cursor-pointer hover:bg-slate-100/50 transition-colors">
                    <div className="flex gap-2.5 items-center">
                      <input
                        type="checkbox"
                        checked={includeBBQ}
                        onChange={(e) => setIncludeBBQ(e.target.checked)}
                        className="w-4.5 h-4.5 rounded text-teal-600 focus:ring-teal-500 accent-teal-600 cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Charcoal BBQ Dinner</span>
                        <span className="text-[10px] text-slate-400 block font-semibold">Delicious traditional grilled barbecue buffet dinner</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100 shrink-0">
                      +₹300 / head
                    </span>
                  </label>

                  <label className="flex items-center justify-between p-3 bg-slate-50 border border-slate-150/80 rounded-xl cursor-pointer hover:bg-slate-100/50 transition-colors">
                    <div className="flex gap-2.5 items-center">
                      <input
                        type="checkbox"
                        checked={includeTransport}
                        onChange={(e) => setIncludeTransport(e.target.checked)}
                        className="w-4.5 h-4.5 rounded text-teal-600 focus:ring-teal-500 accent-teal-600 cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Station Pick-&-Drop Transit</span>
                        <span className="text-[10px] text-slate-400 block font-semibold">Native cab transit from nearest railway junctions</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100 shrink-0">
                      +₹1,500 total
                    </span>
                  </label>

                </div>
              </div>

              {/* Interactive Live Cost Box */}
              <div className="bg-teal-50 rounded-2xl p-4 border border-teal-100/80 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                  <div>
                    <span className="text-[10px] font-bold text-teal-800/80 uppercase block tracking-wider">
                      Live Quote Estimate ({travelers} Guest{travelers > 1 ? "s" : ""})
                    </span>
                    <span className="font-display font-black text-2.5xl sm:text-3.5xl text-[#0F766E] block mt-0.5">
                      ₹{finalTotal.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[9px] text-slate-400 font-extrabold block uppercase tracking-wider">
                      {discountLabel}
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[9px] text-[#0F766E] font-bold block bg-teal-100/80 border border-teal-200 px-2.5 py-0.5 rounded-full inline-block">
                      No Booking Commissions
                    </span>
                  </div>
                </div>
              </div>

              {/* Call-to-actions list */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleBookWithCustomQuote}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-teal-900/15 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <MessageSquarePlus className="w-5 h-5 shrink-0" />
                  <span>Submit Customized Quote</span>
                </button>

                <button
                  onClick={handleBookWithStandardFormatOnly}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Instant Package Inquiry</span>
                </button>
              </div>

              <p className="text-[10px] text-gray-400 text-center select-none">
                Direct WhatsApp integration. Open Android, iOS, Windows, or Web WhatsApp safely.
              </p>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
