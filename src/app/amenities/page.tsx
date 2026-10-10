"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Wifi, 
  Wind, 
  Coffee, 
  Utensils, 
  Car, 
  Zap, 
  Droplets, 
  Shirt, 
  Gamepad2, 
  BookOpen, 
  BedDouble,
  ArrowRight
} from "lucide-react";
import { AMENITIES_DATA, PROPERTY_INFO } from "@/data/propertyData";
import EnquiryModal from "@/components/EnquiryModal";

export default function AmenitiesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const categories = ["All", "Comfort", "Lifestyle", "Security", "Convenience"];

  const filteredAmenities = activeCategory === "All"
    ? AMENITIES_DATA
    : AMENITIES_DATA.filter((a) => a.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen text-zinc-100">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>All-Inclusive Living</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          World-Class Amenities
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          From high-speed fiber internet and biometric surveillance to gourmet dining and daily housekeeping, everything is curated for elevated executive ease.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20"
                  : "bg-[#161a23] text-zinc-300 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="p-8 rounded-3xl bg-[#12151c] border border-white/10 hover:border-[#d4af37]/40 shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#1a202c] text-[#d4af37] group-hover:bg-[#d4af37]/20 flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#d4af37]/30 transition-colors">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37] mb-1">
                  {amenity.category}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#f3e5ab] transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Included in monthly rent
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gourmet Food Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-3xl bg-gradient-to-r from-[#171c26] to-[#10131b] border border-[#d4af37]/30 p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">
                Culinary Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Chef-Prepared 4-Meal Daily Menu
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Tired of oily hostel meals? Our commercial kitchen is run by professional hotel chefs who prepare nutritious, hygienic, and authentic breakfast, lunch, high-tea, and dinner menus with seasonal fresh produce.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-zinc-200">
                <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                  <strong className="text-[#f3e5ab] block">Breakfast</strong>
                  Hot South &amp; North Indian spreads + Fresh eggs &amp; tea
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                  <strong className="text-[#f3e5ab] block">Evening High Tea</strong>
                  Fresh cookies, artisanal tea &amp; wholesome snacks
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                  <strong className="text-[#f3e5ab] block">Gourmet Dinner</strong>
                  Paneer/chicken specials, lentils, hot chapatis &amp; dessert
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-64 sm:h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop"
                  alt="Aura Luxe Dining Buffet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-20">
        <button
          onClick={() => setIsEnquiryModalOpen(true)}
          className="px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-black shadow-xl shadow-[#d4af37]/25 hover:scale-105 transition-all cursor-pointer"
        >
          Book a Tour &amp; Experience In Person
        </button>
      </section>

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
