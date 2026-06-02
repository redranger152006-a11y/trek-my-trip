import React, { useState } from "react";
import { TravelPackage } from "../types";
import { TRAVEL_PACKAGES } from "../data";
import { Clock, MapPin, Star, Sparkles, MessageCircle, SlidersHorizontal, ArrowRight } from "lucide-react";
import CustomizerModal from "./CustomizerModal";

interface PackageSectionProps {
  whatsappNumber: string;
}

const cardThemeMap: Record<string, { bg: string; text: string; emoji: string }> = {
  kodaikanal: { bg: "bg-[#CCF2F4]", text: "text-[#004F54]", emoji: "⛰️" },
  munnar: { bg: "bg-[#DCFCE7]", text: "text-[#155E37]", emoji: "🍵" },
  kolukkumalai: { bg: "bg-[#FEF3C7]", text: "text-[#78350F]", emoji: "🌅" },
  vattavada: { bg: "bg-[#FFEDD5]", text: "text-[#7C2D12]", emoji: "🏡" },
};

export default function PackageSection({ whatsappNumber }: PackageSectionProps) {
  const [selectedPkg, setSelectedPkg] = useState<TravelPackage | null>(null);

  const handleBookDirect = (pkgName: string) => {
    // PRE-FILLED FORMAT EXACTLY requested in guidelines:
    // Hello Trek My Trip,
    // 
    // I am interested in the [PACKAGE NAME] package.
    // 
    // Please share more details.

    const rawMessage = `Hello Trek My Trip,

I am interested in the ${pkgName} package.

Please share more details.`;

    const encodedText = encodeURIComponent(rawMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="packages" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative mountain vectors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Select Your Expedition</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4">
            Curated Budget Packages of <span className="text-primary text-stroke-primary">Trek My Trip</span>
          </h2>
          <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
            All prices are completely transparent with no booking commissions or surprise elements. Open details to customize or click direct to text us.
          </p>
        </div>

        {/* Categories / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAVEL_PACKAGES.map((pkg) => {
            const theme = cardThemeMap[pkg.id] || { bg: "bg-teal-50", text: "text-teal-900", emoji: "⛰️" };
            return (
              <div
                key={pkg.id}
                id={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-teal-500/20 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Dark overlay screen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  {/* Duration Tag */}
                  <div className={`absolute top-3 left-3 ${theme.bg} ${theme.text} font-bold px-2.5 py-1 rounded-xl text-[10px] flex items-center gap-1 shadow-md border border-white/20`}>
                    <span className="text-xs">{theme.emoji}</span>
                    <span>{pkg.duration}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black px-2.5 py-1 rounded-xl text-[10px] flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
                    <span>{pkg.rating}</span>
                  </div>

                  {/* Price starting tags */}
                  <div className="absolute bottom-3 left-3 bg-teal-900/90 text-white backdrop-blur-sm px-3 py-1.5 rounded-2xl border border-teal-500/20 shadow-md">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-teal-300 block">From cost</span>
                    <span className="font-display font-extrabold text-amber-400 text-sm sm:text-base">
                      ₹{pkg.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Package Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1 text-primary hover:text-primary-dark font-extrabold text-[11px] uppercase tracking-widest">
                        <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{pkg.destination}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${theme.bg} ${theme.text}`}>
                        {theme.emoji} Active Deal
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-lg text-slate-800 group-hover:text-primary transition-colors leading-snug mb-2">
                      {pkg.name}
                    </h3>

                    <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                      {pkg.description}
                    </p>
                  </div>

                {/* Action buttons list */}
                <div className="space-y-2 mt-5">
                  <button
                    onClick={() => setSelectedPkg(pkg)}
                    className="w-full py-2.5 border border-slate-200 text-slate-700 hover:text-teal-700 hover:border-teal-500/20 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Custom Guest Quote</span>
                  </button>

                  <button
                    onClick={() => handleBookDirect(pkg.name)}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-extrabold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md hover:shadow-teal-700/20"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
                    <span>Book on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Feature section info block */}
        <div className="mt-16 bg-gradient-to-r from-teal-900 to-teal-950 p-6 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display font-black text-xl sm:text-2xl text-amber-400">
              Need a completely customized travel route?
            </h3>
            <p className="text-teal-100 text-xs sm:text-sm leading-relaxed font-semibold">
              Don't worry! We cover combined Munnar-Kodaikanal, camp stays in Kolukkumalai, custom packages for corporate outings, colleges, or family reunions at custom budget rates!
            </p>
          </div>
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md shrink-0 flex items-center gap-1.5"
          >
            <span>Express Plan Builder</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Package Detail Modal Overlay */}
      {selectedPkg && (
        <CustomizerModal
          pkg={selectedPkg}
          isOpen={true}
          onClose={() => setSelectedPkg(null)}
          whatsappNumber={whatsappNumber}
        />
      )}
    </section>
  );
}
