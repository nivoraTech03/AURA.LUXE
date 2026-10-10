"use client";

import React, { useState } from "react";
import { Sparkles, ZoomIn, Eye, MessageSquare, Calendar } from "lucide-react";
import { GALLERY_DATA, PROPERTY_INFO, GalleryItem } from "@/data/propertyData";
import GalleryLightbox from "@/components/GalleryLightbox";
import EnquiryModal from "@/components/EnquiryModal";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const categories = ["All", "Rooms", "Exterior", "Lounge", "Dining", "Study", "Amenities"];

  const filteredItems = activeTab === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeTab);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen text-zinc-100">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Cinematic Visuals</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Photo Gallery &amp; Architecture
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Explore every corner of our boutique property. Click any photo to launch the interactive lightbox with high-resolution zoom controls.
        </p>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat
                  ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/25"
                  : "bg-[#161a23] text-zinc-300 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer bg-[#141822] border border-white/10 hover:border-[#d4af37]/60 shadow-xl transition-all"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Floating Zoom icon */}
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-5 right-5 text-left space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37]">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-20 p-8 rounded-3xl bg-[#131722] border border-[#d4af37]/30 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white">
            Like what you see? Visit in person.
          </h3>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Experience the spaces, feel the orthopaedic mattress comfort, and taste the meal prep before moving in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-black font-semibold text-xs flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Book A Physical Visit</span>
            </button>
            <a
              href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Aura Luxe, I saw your photo gallery and want to know more about available rooms.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#1b202c] hover:bg-[#252c3c] text-zinc-200 text-xs font-semibold flex items-center gap-2 border border-white/10"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox with zoom controls */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* Booking Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
