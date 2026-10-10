"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Calendar, User, Phone, Mail, Clock, ShieldCheck, Sparkles, Send } from "lucide-react";
import { PROPERTY_INFO, ROOMS_DATA } from "@/data/propertyData";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoom?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultRoom }: EnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState(defaultRoom || ROOMS_DATA[0].name);
  const [moveInDate, setMoveInDate] = useState("");
  const [duration, setDuration] = useState("6 Months");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if defaultRoom prop changes
  React.useEffect(() => {
    if (defaultRoom) {
      setRoomType(defaultRoom);
    }
  }, [defaultRoom]);

  if (!isOpen) return null;

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
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#11141b] border border-[#d4af37]/30 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner glow */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl text-white font-bold">
              Private Tour Requested!
            </h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{fullName}</strong>. Our residential estate manager has received your priority enquiry for <span className="text-[#f3e5ab] font-medium">{roomType}</span>. You will receive an instant WhatsApp confirmation with route directions and slot verification shortly.
            </p>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-xs text-zinc-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Direct Concierge Desk: {PROPERTY_INFO.phone}</span>
            </div>
            <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Aura Luxe! I just submitted an enquiry for ${roomType}. My name is ${fullName}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Continue on WhatsApp</span>
              </a>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-full bg-[#1b202c] hover:bg-[#252c3d] text-zinc-200 text-sm font-medium transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Priority Booking Concierge</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Book A Private Visit
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Experience high-end hospitality, tour executive rooms, and taste our chef&apos;s gourmet dining menu.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Arjun Kapoor"
                    className="w-full bg-[#171b24] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                  />
                </div>
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Phone / WhatsApp <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 00000"
                      className="w-full bg-[#171b24] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                    />
                  </div>
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Email Address <span className="text-zinc-500">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="arjun@company.com"
                      className="w-full bg-[#171b24] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Preferred Room Category
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full bg-[#171b24] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
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
                    Expected Move-in Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={moveInDate}
                      onChange={(e) => setMoveInDate(e.target.value)}
                      className="w-full bg-[#171b24] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Expected Duration
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
                  Specific Requirements or Preferred Time for Call
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Looking for a high-floor quiet room with balcony, please call after 6 PM."
                  className="w-full bg-[#171b24] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c29d2b] text-black shadow-lg shadow-[#d4af37]/20 hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm &amp; Schedule Tour</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-zinc-500">
                🔒 Your contact details are strictly confidential. No spam guaranteed.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
