import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Sparkles, Send, Check } from "lucide-react";

interface ContactSectionProps {
  whatsappNumber: string;
}

export default function ContactSection({ whatsappNumber }: ContactSectionProps) {
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
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Contact Trek My Trip</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
                Let’s Plan Your Ultimate Getaway
              </h2>
              <p className="text-gray-500 font-semibold text-xs sm:text-sm leading-relaxed">
                Connect directly with our native vacation experts. Whether you require a customized corporate trek, college trip, or a simple private guide, we are available 24/7 on WhatsApp.
              </p>
            </div>

            {/* Direct Coordinates card stack */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Call/WhatsApp Business</h4>
                  <p className="text-xs text-gray-500 font-mono font-bold mt-1">+{whatsappNumber}</p>
                  <p className="text-[10px] text-teal-600 font-semibold uppercase mt-0.5">Response within 5 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Official Mail Inbox</h4>
                  <p className="text-xs text-gray-500 font-semibold mt-1">trekmytrip15@gmail.com</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">For corporate invoice packages & group events</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Local base Base coordinates</h4>
                  <p className="text-xs text-gray-500 mt-1">KK Nagar, Madurai-2</p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Follow Socials</h4>
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

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
            
            <h3 className="font-display font-black text-slate-800 text-xl tracking-tight mb-6">
              Create a Custom Itinerary Request
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
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-teal-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                    Select Package
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-teal-500 font-bold"
                  >
                    <option value="Kodaikanal Package">Kodaikanal Package (Starts from ₹2,000)</option>
                    <option value="Munnar Package">Munnar Package (Starts from ₹2,000)</option>
                    <option value="Kolukkumalai Package">Kolukkumalai Package (Starts from ₹1,800)</option>
                    <option value="Vattavada Package">Vattavada Package (Starts from ₹1,390)</option>
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
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-teal-500 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                    Proposed Star Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-teal-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                  Special Notes or Group Requests (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="E.g. We require shared cabins, mountain campfire facilities, vegetarian food catering..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-teal-500 font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-extrabold py-3.5 rounded-xl shadow-lg hover:shadow-teal-700/20 transition-all flex items-center justify-center gap-2 text-sm text-center"
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
    </section>
  );
}
