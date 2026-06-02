/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PackageSection from "./components/PackageSection";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import heroBgImg from "./assets/images/trek_hero_bg_1780382037959.png";

export default function App() {
  const whatsappNumber = "919486360690";

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen selection:bg-teal-600/20 selection:text-teal-900 overflow-x-hidden">
      
      {/* Floating Header */}
      <Navbar whatsappNumber={whatsappNumber} />

      {/* Main Home Hero Screen */}
      <Hero heroImage={heroBgImg} />

      {/* Dynamic Package Sections and Calculator Modals */}
      <PackageSection whatsappNumber={whatsappNumber} />

      {/* Testimonials Review Slider */}
      <Testimonials />

      {/* Collapsible FAQ Panels */}
      <FAQSection />

      {/* Customized Direct Form lead generator */}
      <ContactSection whatsappNumber={whatsappNumber} />

      {/* Lower footer information */}
      <Footer whatsappNumber={whatsappNumber} />

    </div>
  );
}
