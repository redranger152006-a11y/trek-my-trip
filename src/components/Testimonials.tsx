import React from "react";
import { TESTIMONIALS } from "../data";
import { Star, Quote, Heart } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative blurred backdrops */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
            <span>Satisfied Trekkers</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4">
            Loved by 1,200+ Happy Customers
          </h2>
          <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
            Read stories from travelers who escaped standard commercial packages to explore the raw and beautiful nature of South India with Trek My Trip.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm relative hover:scale-102 transition-transform duration-300 flex flex-col justify-between"
            >
              {/* Overlapping Quote Icon */}
              <div className="absolute top-6 right-6 text-teal-600/10">
                <Quote className="w-12 h-12 stroke-current fill-current" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-4 select-none">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4.5 h-4.5 ${
                        idx < testimonial.rating
                          ? "fill-amber-500 text-amber-500"
                          : "fill-slate-200 text-slate-200"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed italic relative z-10 mb-6">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/50">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-2xl object-cover border-2 border-teal-600/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-black text-slate-800 text-sm leading-none">
                    {testimonial.name}
                  </h4>
                  <span className="text-[11px] text-gray-500 font-bold block mt-0.5">
                    {testimonial.role} – {testimonial.date}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic review summary highlight */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 font-semibold flex items-center justify-center gap-1.5 flex-wrap">
            <span>Verified Customer Reviews fetched directly from active trip feedback.</span>
            <span className="text-primary font-bold">★ 4.9 Average General Rating</span>
          </p>
        </div>

      </div>
    </section>
  );
}
