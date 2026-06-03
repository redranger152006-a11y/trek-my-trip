import React from "react";
import { Sparkles, Calendar, Compass, ArrowRight, ShieldCheck, Heart, Star, MapPin, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { TRAVEL_PACKAGES } from "../data";
import Testimonials from "../components/Testimonials";
import heroBgImg from "../assets/images/trek_hero_bg_1780382037959.png";

interface HomePageProps {
  onNavigate: (hash: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  // Let's highlight 2 specific packages on the homepage as "Featured"
  const featuredPkgs = TRAVEL_PACKAGES.filter(p => p.id === "munnar" || p.id === "kolukkumalai");

  const quickFilters = [
    { id: "kodaikanal", name: "Kodaikanal", price: "₹2,000", tag: "Nature" },
    { id: "munnar", name: "Munnar", price: "₹2,000", tag: "Tea Valleys" },
    { id: "kolukkumalai", name: "Kolukkumalai", price: "₹1,800", tag: "Sunrise Trek" },
    { id: "vattavada", name: "Vattavada", price: "₹1,390", tag: "Village Stay" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="pt-20"
    >
      {/* Immersive Hero Header */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 py-16">
        {/* Background Image with Layered Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBgImg}
            alt="Trek My Trip Mountain Backdrop"
            className="w-full h-full object-cover scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/60 to-[#0F766E]/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
        </div>

        {/* Floating micro accent blurs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/10 blur-3xl rounded-full z-10" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full z-10" />

        {/* Main Content Area */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Main Copy */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 backdrop-blur-sm shadow-md">
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-teal-200 font-bold text-xs uppercase tracking-widest">
                  Trusted South India Tour Partner
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6.5xl font-black text-white tracking-tight leading-none">
                Explore Nature with <span className="text-secondary tracking-normal block mt-1">Trek My Trip</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-100 max-w-xl leading-relaxed drop-shadow-sm font-medium">
                We orchestrate highly-affordable, fully custom hill expeditions, sunrise treks, and serene village homestays across Kodaikanal, Munnar, Kolukkumalai, and Vattavada.
              </p>

              {/* Inclusions checklist details */}
              <div className="grid grid-cols-2 gap-3.5 text-slate-200 text-xs sm:text-sm max-w-lg pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>Certified local drivers & guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>100% Custom Durations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>Campfires & Cozy Tents</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>Direct WhatsApp Bookings</span>
                </div>
              </div>

              {/* Action Routes */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onNavigate("#packages")}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-teal-900/30 text-base transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Packages</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate("#contact")}
                  className="bg-white/10 hover:bg-white/15 text-white font-bold px-7 py-4 rounded-xl border border-white/20 backdrop-blur-sm text-base transition-all hover:border-white/40 cursor-pointer"
                >
                  Get Custom Plan
                </button>
              </div>
            </div>

            {/* Quick-booking filter card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="bg-slate-900/80 border border-slate-700/60 p-6 rounded-3xl shadow-2xl backdrop-blur-md">
                <h3 className="font-display font-bold text-white text-lg mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-secondary animate-pulse" />
                  Quick Catalog Navigation
                </h3>
                
                <div className="space-y-3.5">
                  {quickFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => onNavigate(`#packages/${filter.id}`)}
                      className="w-full text-left flex justify-between items-center p-3 bg-slate-800/65 hover:bg-teal-950/40 border border-slate-700/50 hover:border-teal-500/50 rounded-2xl transition-all scale-100 hover:scale-102 group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors font-bold text-sm">
                          {filter.name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-100 text-xs sm:text-sm">{filter.name} Expedition</h4>
                          <span className="text-[10px] bg-slate-700 text-slate-300 font-bold px-2 py-0.5 rounded-full">
                            {filter.tag}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block">Pricing from</span>
                        <span className="font-display font-extrabold text-secondary text-sm group-hover:text-amber-400">
                          {filter.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-5 text-center">
                  <p className="text-[11px] text-slate-300 font-semibold">
                    ✨ Tap any row to view its fully interactive calculator & itinerary map!
                  </p>
                </div>
              </div>

              {/* Overlapping badge */}
              <div className="absolute -bottom-6 -right-3 bg-teal-500 text-slate-950 px-4 py-2.5 rounded-2xl font-bold text-xs shadow-xl hidden md:flex items-center gap-2 select-none">
                <div className="p-1 rounded-full bg-slate-950 text-teal-400">
                  <Heart className="w-3.5 h-3.5 fill-teal-400" />
                </div>
                <span>Highly Verified Affordability</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom divider wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[40px] text-white fill-current"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* Brand values list */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-black text-2.5xl sm:text-3.5xl text-slate-950 tracking-tight leading-none mb-3">
              Why Travelers Choose Trek My Trip
            </h2>
            <p className="text-gray-500 font-semibold text-xs sm:text-sm">
              We focus on absolute transparency, local guidance expertise, and direct support to avoid agent commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl space-y-3 shadow-sm">
              <span className="text-3xl">🛡️</span>
              <h3 className="font-display font-bold text-lg text-slate-800">100% Local Operations</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold">
                Our vehicles, homestays, camp sites, and trekking guides belong to natural communities. We promote ethical village tourism.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl space-y-3 shadow-sm">
              <span className="text-3xl">💬</span>
              <h3 className="font-display font-bold text-lg text-slate-800">Direct WhatsApp Assist</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold">
                No slow ticketing dashboards. Chat/call our native team directly anytime to custom-schedule plans, add campfire stays, or coordinate pick-ups.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl space-y-3 shadow-sm">
              <span className="text-3xl">🏷️</span>
              <h3 className="font-display font-bold text-lg text-slate-800">No Booking Commissions</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold">
                By bypassing major commercial travel aggregate platforms, we save you up to 35% on core guide, entry permit, and transit fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Expeditions list */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-teal-600 block uppercase tracking-widest mb-1.5">Selected Highlights</span>
              <h2 className="font-display font-black text-2.5xl sm:text-3.5xl text-slate-950 tracking-tight leading-none">
                Featured Budget Expeditions
              </h2>
            </div>
            <button
              onClick={() => onNavigate("#packages")}
              className="text-xs sm:text-sm font-extrabold text-[#0F766E] hover:text-[#0D5F58] flex items-center gap-1.5 transition-all hover:underline cursor-pointer"
            >
              <span>Browse All Live Packages</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPkgs.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-150/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row"
              >
                {/* Image Block */}
                <div className="sm:w-5/12 aspect-[4/3] sm:aspect-auto relative bg-slate-100 shrink-0">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-teal-900/90 text-white font-bold px-2.5 py-1 rounded-xl text-[10px]">
                    {pkg.duration}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div className="space-y-2">
                    <span className="text-[10px] text-amber-500 font-extrabold uppercase tracking-widest">{pkg.destination} Highlight</span>
                    <h3 className="font-display font-black text-lg text-slate-800 leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold line-clamp-3">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Starting from</span>
                      <span className="font-display font-extrabold text-teal-800">₹{pkg.price.toLocaleString("en-IN")}</span>
                    </div>
                    <button
                      onClick={() => onNavigate(`#packages/${pkg.id}`)}
                      className="bg-primary hover:bg-primary-dark text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Review Slider */}
      <Testimonials />

      {/* Prominent CTA section panel */}
      <section className="py-16 bg-gradient-to-r from-teal-900 to-teal-950 text-white relative">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="font-display font-black text-2.5xl sm:text-3.5xl text-amber-400 tracking-tight leading-none">
            Ready to design a custom group plan?
          </h2>
          <p className="text-xs sm:text-sm text-teal-100 leading-relaxed max-w-2xl mx-auto font-semibold">
            Let us know your college outing requirements, corporate group constraints, or simple family budget queries. Our local travel design desk is available with 24/7 routing.
          </p>
          <div className="pt-3">
            <button
              onClick={() => onNavigate("#contact")}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-black px-8 py-4 rounded-xl text-sm sm:text-base transition-all hover:scale-103 shadow-lg hover:shadow-amber-500/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Build My Dynamic Itinerary</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
