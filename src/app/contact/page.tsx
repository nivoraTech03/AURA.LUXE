"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Calendar
} from "lucide-react";
import { PROPERTY_INFO, ROOMS_DATA } from "@/data/propertyData";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState(ROOMS_DATA[0].name);
  const [moveInDate, setMoveInDate] = useState("");
  const [duration, setDuration] = useState("6 Months");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = "Please enter your full name";
    if (!phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{10,15}$/.test(phone.trim())) {
      errs.phone = "Enter a valid 10-digit phone number";
    }
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen text-zinc-100">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Concierge Desk</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Connect With Us
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Schedule your guided property walkthrough, inquire about room inventory, or chat directly with our estate manager on WhatsApp.
        </p>
      </section>

      {/* Main Grid: Form + Direct Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Info & WhatsApp Quick Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-[#11181f] to-[#121620] border border-emerald-500/30 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Instant WhatsApp Chat
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Need fastest response? Ping our residential manager directly. We send instant room video walkthroughs, fee breakdown PDF, and exact pin location.
              </p>
              <a
                href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${encodeURIComponent(PROPERTY_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/50"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+91 98765 43210)</span>
              </a>
            </div>

            {/* Direct Details */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#12151c] border border-white/10 space-y-5">
              <h4 className="font-serif text-xl font-bold text-white">
                Estate Information
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block text-xs">Address:</span>
                    <span>{PROPERTY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block text-xs">Front Desk Phone:</span>
                    <a href={`tel:${PROPERTY_INFO.phone}`} className="hover:text-[#d4af37]">
                      {PROPERTY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block text-xs">Official Email:</span>
                    <a href={`mailto:${PROPERTY_INFO.email}`} className="hover:text-[#d4af37]">
                      {PROPERTY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block text-xs">Operating Hours:</span>
                    <span>{PROPERTY_INFO.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#d4af37]">
                <ShieldCheck className="w-4 h-4" />
                <span>Strict KYC &amp; Verified Professional Community</span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Booking & Enquiry Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#12151c] border border-[#d4af37]/30 p-6 sm:p-10 shadow-2xl relative">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-1">
                Priority Booking Request
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Book A Private Property Visit
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Fill the details below and our concierge desk will call you to confirm your arrival slot.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white">
                  Visit Request Submitted Successfully!
                </h4>
                <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{fullName}</strong>. Our residential estate manager has locked in your tour request for <span className="text-[#f3e5ab]">{roomType}</span>. We will call you within 15 minutes to share the gate visitor pass.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName("");
                      setPhone("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#1b202c] hover:bg-[#252c3c] text-xs font-semibold text-zinc-300 transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Siddharth Mehra"
                    className="w-full bg-[#171b24] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 00000"
                      className="w-full bg-[#171b24] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Email Address <span className="text-zinc-500">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="siddharth@company.com"
                      className="w-full bg-[#171b24] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Room Configuration
                    </label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full bg-[#171b24] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      {ROOMS_DATA.map((r) => (
                        <option key={r.id} value={r.name} className="bg-[#171b24] text-white">
                          {r.name} ({r.type} - {r.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Target Move-in Date
                    </label>
                    <input
                      type="date"
                      value={moveInDate}
                      onChange={(e) => setMoveInDate(e.target.value)}
                      className="w-full bg-[#171b24] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Expected Stay Period
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["3 Months", "6 Months", "1 Year+"].map((dur) => (
                      <button
                        type="button"
                        key={dur}
                        onClick={() => setDuration(dur)}
                        className={`py-2 text-xs rounded-xl font-medium border transition-all ${
                          duration === dur
                            ? "bg-[#d4af37]/20 border-[#d4af37] text-[#f3e5ab]"
                            : "bg-[#171b24] border-white/10 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {dur}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Special Inquiries or Diet Preferences
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Need dedicated car parking space, vegetarian food only."
                    className="w-full bg-[#171b24] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-black shadow-lg shadow-[#d4af37]/25 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        <span>Confirm Visit Schedule</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
