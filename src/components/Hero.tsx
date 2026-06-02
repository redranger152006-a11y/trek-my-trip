import React from "react";
import { Sparkles, Calendar, Compass, ArrowRight, ShieldCheck, Heart } from "lucide-react";

interface HeroProps {
  heroImage: string;
}

export default function Hero({ heroImage }: HeroProps) {
  const quickFilters = [
    { name: "Kodaikanal", price: "₹2,000", tag: "Nature", target: "#kodaikanal" },
    { name: "Munnar", price: "₹2,000", tag: "Tea Valleys", target: "#munnar" },
    { name: "Kolukkumalai", price: "₹1,800", tag: "Sunrise Trek", target: "#kolukkumalai" },
    { name: "Vattavada", price: "₹1,390", tag: "Village Stay", target: "#vattavada" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-900"
    >
      {/* Background Image with Layered Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Trek My Trip Mountain Backdrop"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/60 to-[#0F766E]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
      </div>

      {/* Floating micro accent blurs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/10 blur-3xl rounded-full z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full z-10" />

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full py-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 backdrop-blur-sm shadow-md">
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span className="text-teal-200 font-bold text-xs uppercase tracking-widest">
                Trusted South India Tour Partner
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
              Explore Nature with <span className="text-secondary tracking-normal block lg:inline">Trek My Trip</span>
            </h1>

            <p className="text-lg text-slate-100 max-w-xl leading-relaxed drop-shadow-sm font-medium">
              We orchestrate highly-affordable, fully custom hill expeditions, sunrise treks, and serene village homestays across Kodaikanal, Munnar, Kolukkumalai, and Vattavada.
            </p>

            {/* Inclusions Check list */}
            <div className="grid grid-cols-2 gap-3 text-slate-200 text-sm max-w-lg">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Certified Native Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </div>
                <span>100% Custom Durations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Campfires & Tents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Direct WhatsApp Bookings</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#packages"
                className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-teal-900/30 text-base transition-all hover:scale-103 active:scale-97 flex items-center gap-2"
              >
                <span>Book Your Trip</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/15 text-white font-bold px-7 py-4 rounded-xl border border-white/20 backdrop-blur-sm text-base transition-all hover:border-white/40"
              >
                Get a Custom Plan
              </a>
            </div>
          </div>

          {/* Quick-booking filter board */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl shadow-2xl backdrop-blur-md">
              <h3 className="font-display font-extrabold text-white text-xl mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-secondary" />
                Instant Packages
              </h3>
              
              <div className="space-y-4">
                {quickFilters.map((filter) => (
                  <a
                    key={filter.name}
                    href={filter.target}
                    className="flex justify-between items-center p-3 bg-slate-800/65 hover:bg-teal-950/50 border border-slate-700/60 hover:border-teal-500/50 rounded-xl transition-all group scale-100 hover:scale-102"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors font-bold text-sm">
                        {filter.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 text-sm">{filter.name} Package</h4>
                        <span className="text-[11px] bg-slate-700 text-slate-300 font-semibold px-2 py-0.5 rounded-full">
                          {filter.tag}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block">Starting from</span>
                      <span className="font-display font-extrabold text-secondary text-sm group-hover:text-amber-400">
                        {filter.price}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-5 text-center">
                <p className="text-xs text-slate-400">
                  Select a destination cards below to calculate custom group size pricing!
                </p>
              </div>
            </div>

            {/* Overlapping badge */}
            <div className="absolute -bottom-6 -right-6 bg-teal-500 text-slate-950 px-4 py-3 rounded-2xl font-bold text-xs shadow-xl hidden md:flex items-center gap-2 animate-bounce">
              <div className="p-1 rounded-full bg-slate-950 text-teal-400">
                <Heart className="w-3.5 h-3.5 fill-teal-400" />
              </div>
              <span>Highly Affordable Starting Prices</span>
            </div>
          </div>

        </div>
      </div>

      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] text-white fill-current"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

    </section>
  );
}
