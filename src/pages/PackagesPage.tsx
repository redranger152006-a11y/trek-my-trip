import React, { useState, useMemo } from "react";
import { TRAVEL_PACKAGES } from "../data";
import { Star, MapPin, Search, ArrowRight, Sparkles, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { motion } from "motion/react";

interface PackagesPageProps {
  onNavigate: (hash: string) => void;
}

const cardThemeMap: Record<string, { bg: string; text: string; emoji: string }> = {
  kodaikanal: { bg: "bg-[#CCF2F4]", text: "text-[#004F54]", emoji: "⛰️" },
  munnar: { bg: "bg-[#DCFCE7]", text: "text-[#155E37]", emoji: "🍵" },
  kolukkumalai: { bg: "bg-[#FEF3C7]", text: "text-[#78350F]", emoji: "🌅" },
  vattavada: { bg: "bg-[#FFEDD5]", text: "text-[#7C2D12]", emoji: "🏡" },
};

export default function PackagesPage({ onNavigate }: PackagesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("All");
  const [sortBy, setSortBy] = useState<"rating" | "price-asc" | "price-desc">("rating");

  const destinations = ["All", "Kodaikanal", "Munnar", "Kolukkumalai", "Vattavada"];

  const filteredAndSortedPackages = useMemo(() => {
    let list = [...TRAVEL_PACKAGES];

    // Destination filter
    if (selectedDestination !== "All") {
      list = list.filter(pkg => pkg.destination.toLowerCase() === selectedDestination.toLowerCase());
    }

    // Search query filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      list = list.filter(pkg => 
        pkg.name.toLowerCase().includes(q) ||
        pkg.description.toLowerCase().includes(q) ||
        pkg.highlights.some(h => h.toLowerCase().includes(q))
      );
    }

    // Sort evaluation
    if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [searchQuery, selectedDestination, sortBy]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="py-24 bg-slate-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page title header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-widest mb-3 select-none">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Select Your Expedition</span>
          </div>
          <h1 className="font-display font-black text-3.5xl sm:text-5xl text-slate-900 tracking-tight leading-none mb-4">
            Curated Budget Packages
          </h1>
          <p className="text-gray-600 font-medium text-xs sm:text-sm max-w-lg mx-auto">
            All prices are completely transparent with no hidden booking commissions. Select your destination below to explore detailed day wise itineraries and configure dynamic pricing!
          </p>
        </div>

        {/* Filter controls panel bar */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <label className="block text-[10px] font-extrabold uppercase text-gray-400 tracking-wider mb-1.5">
                Search activities or sights
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="E.g. sunrise trek, strawberry, lake..."
                  className="w-full bg-slate-50 border border-slate-150 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-teal-500 focus:bg-white text-slate-800 font-semibold"
                />
              </div>
            </div>

            {/* Destination filter tags */}
            <div className="md:col-span-4">
              <label className="block text-[10px] font-extrabold uppercase text-gray-400 tracking-wider mb-1.5">
                Filter Destination
              </label>
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-150 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-700 focus:outline-none focus:border-teal-500"
                >
                  {destinations.map(dest => (
                    <option key={dest} value={dest}>
                      {dest === "All" ? "All Locations" : dest}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sorting */}
            <div className="md:col-span-3">
              <label className="block text-[10px] font-extrabold uppercase text-gray-400 tracking-wider mb-1.5">
                Sort Pricing
              </label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-slate-50 border border-slate-150 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-700 focus:outline-none focus:border-teal-500 appearance-none cursor-pointer"
                >
                  <option value="rating">Top Customer Rated ★</option>
                  <option value="price-asc">Price: Low to High ₹</option>
                  <option value="price-desc">Price: High to Low ₹</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Packages List Grid */}
        {filteredAndSortedPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPackages.map((pkg) => {
              const theme = cardThemeMap[pkg.id] || { bg: "bg-teal-50", text: "text-teal-900", emoji: "⛰️" };
              return (
                <div
                  key={pkg.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-150/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Image container header */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                    {/* Duration tag */}
                    <div className={`absolute top-3 left-3 ${theme.bg} ${theme.text} font-extrabold px-3 py-1 rounded-xl text-[10px] flex items-center gap-1 shadow-md border border-white/10`}>
                      <span>{theme.emoji}</span>
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Rating star badge */}
                    <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black px-2.5 py-1 rounded-xl text-[10px] flex items-center gap-1 shadow-md">
                      <Star className="w-3" />
                      <span>{pkg.rating}</span>
                    </div>

                    {/* Starting price */}
                    <div className="absolute bottom-3 left-3 bg-teal-900/90 text-white backdrop-blur-sm px-3.5 py-1.5 rounded-2xl border border-teal-500/10 shadow-md">
                      <span className="text-[9px] uppercase font-bold tracking-wider text-teal-300 block">Starting budget cost</span>
                      <span className="font-display font-extrabold text-amber-400 text-sm">
                        ₹{pkg.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-primary font-extrabold flex items-center gap-1 uppercase tracking-widest">
                          <MapPin className="w-3.5 h-3.5 text-amber-500" />
                          {pkg.destination}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${theme.bg} ${theme.text}`}>
                          verified deal
                        </span>
                      </div>

                      <h3 className="font-display font-black text-lg text-slate-800 leading-snug group-hover:text-primary transition-colors">
                        {pkg.name}
                      </h3>

                      <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed font-semibold line-clamp-3">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-5 border-t border-slate-50 mt-5">
                      <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Expedition Highlights:</h4>
                      <ul className="space-y-1.5">
                        {pkg.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="text-xs text-slate-600 font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-0.5" />
                            <span className="truncate">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action footer */}
                    <div className="pt-6">
                      <button
                        onClick={() => onNavigate(`#packages/${pkg.id}`)}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                      >
                        <span>View Detailed Plan Itinerary</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-xl mx-auto">
            <span className="text-4xl">🔍</span>
            <h3 className="font-display font-bold text-lg text-slate-800 mt-3 mb-1">No packages found</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold px-4">
              We couldn't find matching hill packages for "{searchQuery}". Try selecting other keywords or contact our team directly for bespoke itineraries!
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDestination("All");
              }}
              className="mt-5 text-xs text-primary font-bold underline"
            >
              Reset all filters
            </button>
          </div>
        )}

      </div>
    </motion.div>
  );
}
