import React from "react";
import { MessageCircle, Instagram, Phone, ArrowUp } from "lucide-react";
import logoImg from "../assets/images/trek_my_trip_dark_logo_1780387834698.png";

interface FooterProps {
  whatsappNumber: string;
}

export default function Footer({ whatsappNumber }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1E293B] text-slate-400 py-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-slate-950 p-0.5 shadow-md">
                <img
                  src={logoImg}
                  alt="Trek My Trip Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display text-lg font-extrabold tracking-tight text-white block">
                  Trek My Trip
                </span>
                <span className="text-[9px] font-semibold text-secondary uppercase tracking-widest block -mt-1.5">
                  Explore Nature
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              We provide raw, authentic, and highly customized travel expeditions across Western Ghats hill resorts. Affordable budgets, verified safety, and direct local operator contacts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Our Packages</h4>
            <div className="flex flex-col gap-2 text-xs">
              <a href="#kodaikanal" className="hover:text-primary transition-colors">Kodaikanal Package - ₹2000</a>
              <a href="#munnar" className="hover:text-primary transition-colors">Munnar Package - ₹2000</a>
              <a href="#kolukkumalai" className="hover:text-primary transition-colors">Kolukkumalai Package - ₹1800</a>
              <a href="#vattavada" className="hover:text-primary transition-colors">Vattavada Package - ₹1390</a>
            </div>
          </div>

          {/* Help Center */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Connect</h4>
            <p className="text-xs text-slate-500">Available 24/7 for booking confirmations & trip modifications.</p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-teal-950 text-primary hover:text-slate-900 hover:bg-amber-500 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-current" />
              </a>
              <a
                href="https://www.instagram.com/trekmytrip?igsh=MXRtOXplZDF2c2xseg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-teal-950 text-primary hover:text-slate-900 hover:bg-amber-500 transition-colors flex items-center justify-center"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href={`tel:+${whatsappNumber}`}
                className="w-8 h-8 rounded-lg bg-teal-950 text-primary hover:text-slate-900 hover:bg-amber-500 transition-colors flex items-center justify-center"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower footer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} Trek My Trip. All rights reserved.</p>
            <p className="mt-0.5">Designed with Teal & Amber natural aesthetics.</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#packages" className="hover:text-white transition-colors">Packages</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <button
              onClick={handleScrollTop}
              className="hover:text-white transition-colors flex items-center gap-0.5 cursor-pointer font-bold select-none text-teal-400"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
