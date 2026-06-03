import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Sparkles, Send, Check, Clock } from "lucide-react";
import { motion } from "motion/react";

interface ContactPageProps {
  whatsappNumber: string;
}

export default function ContactPage({ whatsappNumber }: ContactPageProps) {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("Kodaikanal Package");
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formattedDate = date ? new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long" }) : "TBD";

    // Pre-formatting message content
    const message = `Hello Trek My Trip,

I am interested in the ${destination}.

Please share more details.

-------------------------------------------
✍️ CUSTOM TRIP ENQUIRY FORM:
- Submitter Name: ${name}
- Destination Chosen: ${destination}
- Number of Travelers: ${guests} guest${guests > 1 ? 's' : ''}
- Proposed Travel Date: ${formattedDate}
- Special Notes/Questions: ${notes || "None"}
-------------------------------------------

Looking forward to your swift response!`;

    setTimeout(() => {
      setSubmitting(false);
      const encodedText = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 600);
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
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-widest mb-3 select-none">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Connect with Travel Coordinators</span>
          </div>
          <h1 className="font-display font-black text-3.5xl sm:text-5xl text-slate-900 tracking-tight leading-none mb-3">
            Plan Your Ultimate Getaway
          </h1>
          <p className="text-gray-500 font-medium text-xs sm:text-sm max-w-lg mx-auto">
            Our local vacation designers are available 24/7 on WhatsApp. Send a quick custom itinerary inquiry below and our teams will configure custom transport & guide rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* LEFT: Coordinates, Emails, & Work hrs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-slate-800 leading-snug">
                Trek My Trip Coordinates
              </h2>
              <p className="text-xs sm:text-[13px] text-gray-500 font-semibold leading-relaxed">
                Connect with our local travel desk based in Tamil Nadu. We manage transport routing directly in hill stations.
              </p>
            </div>

            {/* Structured Card Grid coordinates */}
            <div className="space-y-4 font-semibold">
              
              <div className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">WhatsApp Booking Line</h4>
                  <p className="text-xs text-gray-500 font-mono font-bold mt-1">+{whatsappNumber}</p>
                  <p className="text-[10px] text-teal-600 font-bold uppercase mt-0.5">Response within 5 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Official Corporate Inquiry</h4>
                  <p className="text-xs text-gray-500 font-bold mt-1 select-all">trekmytrip15@gmail.com</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Best for corporate invoices and college group sheets</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Official Head Office Location</h4>
                  <p className="text-xs text-gray-500 mt-1 font-bold select-all">KK Nagar, Madurai-2</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Madurai Local Operations Headquarters, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Working Hours</h4>
                  <p className="text-xs text-gray-500 mt-1">24 Hours / 7 Days Live Desk</p>
                  <p className="text-[10px] text-teal-600 font-bold uppercase mt-0.5">Fully operational during public holidays</p>
                </div>
              </div>

            </div>

            {/* Social channels card */}
            <div className="p-6 bg-white border border-slate-100 rounded-3xl space-y-3 shadow-sm">
              <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">Follow Official channels</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/trekmytrip?igsh=MXRtOXplZDF2c2xseg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-teal-50 hover:bg-amber-500 text-primary hover:text-slate-900 transition-colors flex items-center justify-center"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-teal-50 hover:bg-amber-500 text-primary hover:text-slate-900 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: High quality Custom Lead capture Form */}
          <div className="lg:col-span-7 bg-white border border-slate-150/40 p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl" />
            
            <h3 className="font-display font-black text-slate-800 text-xl tracking-tight mb-6">
              Create a Custom Itinerary Plan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-700 focus:outline-none font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                    Select Package
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-705 focus:outline-none font-black"
                  >
                    <option value="Kodaikanal Package">Kodaikanal Package (From ₹2,000)</option>
                    <option value="Munnar Package">Munnar Package (From ₹2,000)</option>
                    <option value="Kolukkumalai Package">Kolukkumalai Package (From ₹1,800)</option>
                    <option value="Vattavada Package">Vattavada Package (From ₹1,390)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    required
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-707 focus:outline-none font-extrabold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                    Proposed Start Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-700 focus:outline-none font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                  Special Notes or Group Requests (Optional)
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="E.g. We are a family of 10. We require shared suites, vegetarian catering, vehicle pick up from Coimbatore junction..."
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-706 focus:outline-none font-semibold resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-extrabold py-3.5 rounded-xl shadow-lg hover:shadow-teal-700/15 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm text-center cursor-pointer"
              >
                {submitting ? (
                  <>
                    <Check className="w-5 h-5 animate-pulse" />
                    Preparing WhatsApp payload...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Custom WhatsApp Plan Request
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
