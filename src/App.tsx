/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PackagesPage from "./pages/PackagesPage";
import PackageDetailPage from "./pages/PackageDetailPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const whatsappNumber = "919486360690";

  // Pure React hash route parser
  const [currentRoute, setCurrentRoute] = useState(() => {
    return window.location.hash || "#home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || "#home");
      // Instantly scroll to the absolute top to avoid layout jumps between pages
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Dedicated Page Switching Router helper
  const renderCurrentPage = () => {
    if (currentRoute === "" || currentRoute === "#home") {
      return (
        <HomePage 
          onNavigate={(hash) => { window.location.hash = hash; }} 
        />
      );
    }
    
    if (currentRoute === "#packages") {
      return (
        <PackagesPage 
          onNavigate={(hash) => { window.location.hash = hash; }} 
        />
      );
    }
    
    if (currentRoute.startsWith("#packages/")) {
      const pkgId = currentRoute.substring("#packages/".length);
      return (
        <PackageDetailPage 
          packageId={pkgId} 
          onNavigate={(hash) => { window.location.hash = hash; }} 
          whatsappNumber={whatsappNumber}
        />
      );
    }
    
    if (currentRoute === "#faq") {
      return (
        <FAQPage />
      );
    }
    
    if (currentRoute === "#contact") {
      return (
        <ContactPage 
          whatsappNumber={whatsappNumber} 
        />
      );
    }

    // Elegant default safety fallback
    return (
      <HomePage 
        onNavigate={(hash) => { window.location.hash = hash; }} 
      />
    );
  };

  return (
    <div className="font-sans text-slate-800 bg-[#FAFAFA] min-h-screen selection:bg-teal-600/20 selection:text-teal-900 overflow-x-hidden flex flex-col justify-between">
      
      <div>
        {/* Floating Header */}
        <Navbar whatsappNumber={whatsappNumber} currentRoute={currentRoute} />

        {/* Content Container area with AnimatePresence */}
        <main className="min-h-[80vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoute}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {renderCurrentPage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer Details */}
      <Footer whatsappNumber={whatsappNumber} />

    </div>
  );
}
