import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Settings, Check, Lock } from "lucide-react";
import logoImg from "../assets/images/trek_my_trip_dark_logo_1780387834698.png";

interface NavbarProps {
  whatsappNumber: string;
  currentRoute: string;
}

export default function Navbar({ whatsappNumber, currentRoute }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = currentRoute === "" || currentRoute === "#home";

  const isActive = (href: string) => {
    if (href === "#home") return isHome;
    return currentRoute.startsWith(href);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Packages", href: "#packages" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav id="app-navbar"
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
          isScrolled || !isHome
            ? "bg-slate-950/95 shadow-xl py-3 border-b border-slate-850 backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-slate-950 p-0.5 shadow-md group-hover:scale-105 transition-all">
                <img
                  src={logoImg}
                  alt="Trek My Trip Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight block text-white transition-colors">
                  Trek My Trip
                </span>
                <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest block -mt-1.5">
                  Explore Nature
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-extrabold text-xs tracking-widest uppercase transition-all hover:text-secondary ${
                    isActive(link.href)
                      ? "text-secondary font-black"
                      : "text-slate-300 hover:text-white drop-shadow-md"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA and Settings Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setShowConfigModal(true)}
                title="Configure WhatsApp Contact Number"
                className="p-2 rounded-lg transition-colors text-slate-300 hover:text-white hover:bg-white/10"
              >
                <Settings className="w-5 h-5 animate-hover-spin" />
              </button>
              
              <a
                href="#packages"
                className="bg-secondary hover:bg-secondary-dark text-slate-900 font-bold px-5 py-2.5 rounded-lg shadow-lg shadow-amber-500/20 text-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Book Your Trip
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setShowConfigModal(true)}
                className="p-2 rounded-lg text-slate-350 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg transition-colors text-slate-350 hover:text-white hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 shadow-2xl border-b border-slate-850 py-4 px-6 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-semibold text-base py-2 border-b border-slate-900 transition-colors ${
                  isActive(link.href) ? "text-secondary font-black" : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-900/60 border border-slate-850 rounded px-3 py-2">
                <span>Receiver:</span>
                <span className="font-mono font-bold text-slate-200">+{whatsappNumber}</span>
              </div>
              <a
                href="#packages"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg text-center shadow-lg transition-all"
              >
                Book Your Trip
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Configuration Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl p-6 relative overflow-hidden animate-scale-up">
            <button
              onClick={() => setShowConfigModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display font-extrabold text-lg text-slate-800 mb-2 flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-teal-50 text-teal-600">
                <Settings className="w-5 h-5" />
              </span>
              Booking Routing Status
            </h3>
            
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              Trek My Trip booking requests and direct chats are routed securely to our official verified credentials.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Active WhatsApp Booking Number
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-teal-600 font-extrabold text-sm">
                    +
                  </span>
                  <input
                    type="text"
                    readOnly
                    disabled
                    value={whatsappNumber}
                    className="w-full pl-7 pr-10 py-3 bg-slate-50 border border-slate-150 rounded-xl text-slate-700 font-extrabold tracking-wide cursor-not-allowed select-all focus:outline-none"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock className="w-4 h-4 text-teal-600" />
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-teal-50/50 border border-teal-100 rounded-xl flex gap-3 text-xs text-slate-600">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse mt-1 shrink-0" />
                <span>
                  <strong className="text-slate-800 block mb-0.5">Secure Booking Line Verified</strong>
                  This routing line is active and locked by the system to maintain instant booking verification and group event notifications.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowConfigModal(false)}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  Close Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
