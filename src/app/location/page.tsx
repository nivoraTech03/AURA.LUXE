"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  ExternalLink, 
  Train, 
  Building2, 
  GraduationCap, 
  Hospital, 
  ShoppingBag,
  Sparkles
} from "lucide-react";
import { PROPERTY_INFO, LOCATION_HIGHLIGHTS } from "@/data/propertyData";
import EnquiryModal from "@/components/EnquiryModal";

export default function LocationPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen text-zinc-100">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Prime Cyber Belt Connectivity</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Neighborhood &amp; Transit
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Positioned directly off Golf Course Road, Sector 43, Gurugram. Enjoy whisper-quiet residential peace with 5-minute transit access to top Fortune 500 offices and universities.
        </p>
      </section>

      {/* Main Map & Address Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map display */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl relative h-[440px] sm:h-[520px] bg-[#12151d] flex flex-col justify-between p-6">
            {/* Visual satellite/street styled map backdrop */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1400&auto=format&fit=crop"
              alt="Sector 43 Gurugram Map Route"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] contrast-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-black/30 to-black/50" />

            {/* Live GPS badge */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs text-[#f3e5ab] font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Sector 43, Golf Course Road</span>
              </div>
            </div>

            {/* Pin Marker */}
            <div className="relative z-10 self-center text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-2xl shadow-[#d4af37]/70 border-4 border-white animate-bounce">
                <MapPin className="w-7 h-7 fill-black" />
              </div>
              <div className="mt-2 px-4 py-1.5 rounded-xl bg-black/90 backdrop-blur-md text-xs font-bold text-white border border-[#d4af37]/50 shadow-xl">
                {PROPERTY_INFO.brandName}
              </div>
            </div>

            {/* Get Driving Directions CTA */}
            <div className="relative z-10 p-4 rounded-2xl bg-[#141822]/90 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs text-zinc-400">Exact coordinates verified</span>
                <div className="text-sm font-semibold text-white">Google Maps Navigation</div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-bold hover:bg-[#e6c148] transition-colors flex items-center justify-center gap-2"
              >
                <span>Open GPS Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location Key Stats & Address info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#12151c] border border-white/10 space-y-4">
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
                Official Address
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {PROPERTY_INFO.address}
              </p>
              <div className="pt-2 border-t border-white/5 space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Concierge Hotline: {PROPERTY_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <span>{PROPERTY_INFO.hours}</span>
                </div>
              </div>
            </div>

            {/* Commute Highlights */}
            <div className="p-6 rounded-3xl bg-[#12151c] border border-white/10 space-y-4">
              <h3 className="font-serif text-xl font-bold text-white">
                Proximity To Essentials
              </h3>
              <div className="space-y-3">
                {LOCATION_HIGHLIGHTS.map((loc, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#171b24] border border-white/5 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#d4af37] block">{loc.category}</span>
                      <span className="font-medium text-white">{loc.name}</span>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <span className="text-xs font-bold text-[#f3e5ab]">{loc.timeMin}</span>
                      <span className="text-[10px] text-zinc-500 block">{loc.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-black font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#d4af37]/20 hover:opacity-95 transition-all cursor-pointer"
            >
              Schedule In-Person Site Visit
            </button>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
