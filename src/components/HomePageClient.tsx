"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Wifi, 
  MapPin, 
  ChevronDown, 
  Star, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  ChevronRight,
  Eye,
  MessageSquare,
  BedDouble,
  Wind,
  Bath,
  Users,
  Quote
} from "lucide-react";
import { 
  PROPERTY_INFO, 
  ROOMS_DATA, 
  AMENITIES_DATA, 
  GALLERY_DATA, 
  TESTIMONIALS_DATA, 
  LOCATION_HIGHLIGHTS, 
  WHY_CHOOSE_US,
  Room,
  GalleryItem
} from "@/data/propertyData";
import RoomDetailsModal from "@/components/RoomDetailsModal";
import GalleryLightbox from "@/components/GalleryLightbox";
import EnquiryModal from "@/components/EnquiryModal";

export default function HomePageClient() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryDefaultRoom, setEnquiryDefaultRoom] = useState<string | undefined>(undefined);

  // Gallery filter
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>("All");

  const filteredGallery = activeGalleryTab === "All" 
    ? GALLERY_DATA.slice(0, 8) 
    : GALLERY_DATA.filter(item => item.category === activeGalleryTab);

  const handleOpenRoomModal = (room: Room) => {
    setSelectedRoom(room);
    setIsRoomModalOpen(true);
  };

  const handleOpenEnquiry = (roomName?: string) => {
    setEnquiryDefaultRoom(roomName);
    setIsEnquiryModalOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] text-zinc-100 selection:bg-[#d4af37]/30 selection:text-[#f3e5ab]">
      {/* =========================================================================
          1. HERO SECTION (Cinematic Full-Screen, Real-Estate Luxury Aesthetic)
      ========================================================================= */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Cinematic Backdrop Image with multi-layer luxury overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury PG Serviced Residence Exterior & Penthouse Suite"
            className="w-full h-full object-cover scale-105 filter brightness-[0.4] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10]/90 via-[#0a0c10]/40 to-[#0a0c10]/90" />
        </div>

        {/* Ambient subtle glowing accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          {/* Top trust badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181e29]/80 border border-[#d4af37]/40 shadow-xl backdrop-blur-md mb-6 animate-in fade-in duration-700">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-[#f3e5ab]">
              Now Accepting Bookings for 2026-2027 Season
            </span>
            <span className="text-zinc-500 text-xs">•</span>
            <span className="text-xs text-zinc-300 font-medium">Golf Course Road, Gurugram</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
            Premium Living. <br />
            <span className="gold-gradient-text">Better Everyday.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            {PROPERTY_INFO.tagline} Fully furnished PG accommodation crafted specifically for corporate executives, tech creators, and ambitious scholars.
          </p>

          {/* Key Value Indicator Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Sector 43 (3 min from Rapid Metro)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>Starting from <strong className="text-white font-semibold">{PROPERTY_INFO.startingPrice}</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>{PROPERTY_INFO.rating} ★ Rating ({PROPERTY_INFO.reviewsCount})</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => handleOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-black shadow-xl shadow-[#d4af37]/25 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Book a Private Visit</span>
            </button>

            <Link
              href="/rooms"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-sm bg-[#151922]/90 hover:bg-[#1d2330] text-zinc-200 hover:text-white border border-white/10 hover:border-[#d4af37]/40 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Suites</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </Link>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-zinc-500 animate-bounce cursor-pointer">
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37]/70 font-semibold mb-1">
              Scroll To Discover
            </span>
            <ChevronDown className="w-4 h-4 text-[#d4af37]" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTRO / BRAND STORY (Split Layout, Hospitality Philosophy)
      ========================================================================= */}
      <section className="py-24 relative border-t border-white/5 bg-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Imagery Display */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/25 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Aura Luxe Suites Shared Living & Co-working Lounge"
                  className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider block">Signature Experience</span>
                    <span className="text-white font-medium text-sm">Resort-Style Shared Executive Lounges</span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-zinc-300">Acoustic Rated</span>
                </div>
              </div>

              {/* Floating Award/Metric Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#161a23] border border-[#d4af37]/40 p-4 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white font-serif">5-Star Rated</div>
                  <div className="text-xs text-zinc-400">Hospitality Cleanliness Audit</div>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20">
                <span>The Hospitality Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                More Than a Room. <br />
                <span className="gold-gradient-text">It&apos;s Your Personal Space.</span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Traditional PG hostels compromise on acoustic quietness, hygienic food, and professional courtesy. At {PROPERTY_INFO.brandName}, we built an ecosystem that matches the polish of a boutique serviced apartment with the camaraderie of an aspirational community.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Whether you are returning after an intense 12-hour workday in CyberHub or preparing for competitive examinations late into the night, your sanctuary awaits with quiet climate control, chef-cooked nutritious dinners, and zero landlord hassle.
              </p>

              {/* Four Key Pillars Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-[#12151c] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                  <div className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-1">
                    <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                    <span>24/7 Guards</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Biometric Entry &amp; Full CCTV</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#12151c] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                  <div className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-1">
                    <Wifi className="w-5 h-5 text-[#d4af37]" />
                    <span>300 Mbps</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Dedicated Dual Mesh Fibernet</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#12151c] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                  <div className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-1">
                    <Sparkles className="w-5 h-5 text-[#d4af37]" />
                    <span>100% Ready</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Ergonomic Chairs &amp; Bedding</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#12151c] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                  <div className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-1">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                    <span>Prime Hub</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Golf Course Rd, Gurugram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ROOM TYPES SHOWCASE (Single, Double, Triple with Details Modal)
      ========================================================================= */}
      <section className="py-24 relative bg-[#0a0c10]" id="rooms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-3">
                <span>Tailored Residences</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Architectural Suites &amp; Floorplans
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                Every layout is acoustically balanced, fully climate-controlled, and equipped with individual oak study desks.
              </p>
            </div>

            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#f3e5ab] hover:text-white px-5 py-2.5 rounded-full bg-[#181d26] border border-[#d4af37]/30 transition-all self-start md:self-auto"
            >
              <span>View Full Comparison</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="group rounded-3xl bg-[#12151c] border border-white/10 hover:border-[#d4af37]/40 shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12151c] via-transparent to-black/30" />
                    
                    {/* Badge */}
                    {room.badge && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#d4af37] text-black text-xs font-bold shadow-lg">
                        {room.badge}
                      </div>
                    )}

                    {/* Availability */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {room.availability}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
                      <span className="font-semibold text-white tracking-wide uppercase text-[11px] bg-black/40 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                        {room.type}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                        {room.tagline}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className="flex items-baseline gap-2 pt-2 border-t border-white/5">
                      <span className="text-2xl font-bold text-white font-serif">{room.price}</span>
                      {room.originalPrice && (
                        <span className="text-xs line-through text-zinc-500">{room.originalPrice}</span>
                      )}
                      <span className="text-xs text-zinc-400">/{room.billingPeriod}</span>
                    </div>

                    {/* Highlights list */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 pt-1">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>{room.occupancy.split(" ")[0]} Resident</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span className="truncate">{room.bathroom}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Wind className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span className="truncate">{room.cooling}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BedDouble className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Workstation</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleOpenRoomModal(room)}
                    className="py-2.5 px-3 rounded-xl bg-[#191f2b] hover:bg-[#232c3d] text-white text-xs font-semibold border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>View Room</span>
                  </button>

                  <button
                    onClick={() => handleOpenEnquiry(room.name)}
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-black text-xs font-bold hover:opacity-95 shadow-md shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-black" />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. LUXURY AMENITIES (Modern icons, Clean hover grid)
      ========================================================================= */}
      <section className="py-24 relative bg-[#0d0f14] border-t border-white/5" id="amenities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-3">
              <span>Everything Included</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Hospitality-Grade Amenities
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              We took everything frustrating about typical rental flats and replaced it with effortless boutique service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES_DATA.map((amenity) => (
              <div
                key={amenity.id}
                className="glass-card p-6 rounded-3xl group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1d222e] group-hover:bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-4 transition-colors border border-white/5 group-hover:border-[#d4af37]/30">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#d4af37]/80 uppercase tracking-widest font-semibold">
                  <span>{amenity.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#f3e5ab] hover:text-white px-6 py-3 rounded-full bg-[#181d26] border border-[#d4af37]/30 hover:border-[#d4af37] transition-all"
            >
              <span>Explore All 18+ Hospitality Perks</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PROPERTY EXPERIENCE / LIFESTYLE (Visual Full Width Mosaic)
      ========================================================================= */}
      <section className="py-24 relative bg-[#0a0c10] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Designed for Comfort. <br />
              <span className="gold-gradient-text">Built for Modern Living.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              Take a walk through the daily rhythm of an Aura Luxe resident: high-focus study mornings, nutritious dining, and relaxed rooftop sunset evenings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-3xl overflow-hidden group border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                alt="Acoustic Co-Working & Library Pods"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Quietude</span>
                <h4 className="font-serif text-xl font-bold text-white">Silent Co-Working &amp; Library Pods</h4>
                <p className="text-xs text-zinc-300 mt-1">High-speed ethernet sockets, Herman Miller chairs &amp; coffee dock.</p>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden group border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop"
                alt="Artisan Dining Hall & Fresh Cooked Meals"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Wholesome Nutrition</span>
                <h4 className="font-serif text-xl font-bold text-white">Artisan Dining &amp; Chef&apos;s Buffet</h4>
                <p className="text-xs text-zinc-300 mt-1">Hygienic multi-cuisine regional menu prepared 4 times daily.</p>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden group border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
                alt="Fitness Studio & Sky Gaming Terrace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Wellness</span>
                <h4 className="font-serif text-xl font-bold text-white">Fitness Studio &amp; Sky Gaming Terrace</h4>
                <p className="text-xs text-zinc-300 mt-1">PlayStation 5 lounge, pool table, yoga turf, and weights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. GALLERY SECTION WITH LIGHTBOX & ZOOM IN/OUT INTERACTION
      ========================================================================= */}
      <section className="py-24 relative bg-[#0d0f14] border-t border-white/5" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-3">
                <span>Visual Tour</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Curated Photographic Tour
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2">
                Click any image to open the high-definition interactive lightbox with zoom-in and zoom-out controls.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {["All", "Rooms", "Lounge", "Dining", "Study", "Exterior"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveGalleryTab(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    activeGalleryTab === category
                      ? "bg-[#d4af37] text-black font-semibold shadow-md shadow-[#d4af37]/20"
                      : "bg-[#181d26] text-zinc-300 hover:text-white border border-white/5"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry / Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#d4af37]/50 shadow-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Floating caption */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] uppercase font-semibold text-[#d4af37] tracking-wider block">
                    {item.category}
                  </span>
                  <p className="text-sm font-semibold text-white group-hover:text-[#f3e5ab] transition-colors truncate">
                    {item.title}
                  </p>
                </div>

                {/* Hover zoom icon badge */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#f3e5ab] hover:text-white px-6 py-3 rounded-full bg-[#181d26] border border-[#d4af37]/30 hover:border-[#d4af37] transition-all"
            >
              <span>View Full Gallery (30+ High-Res Photos)</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. LOCATION & TRANSIT SECTION
      ========================================================================= */}
      <section className="py-24 relative bg-[#0a0c10]" id="location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Location Copy & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20">
                <span>Connectivity &amp; Transit</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Heart of Golf Course Road, Gurugram
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Save hours of stressful daily commute. Situated in peaceful Sector 43, moments away from Sector 42-43 Rapid Metro, DLF Cyber City, One Horizon Center, and top academic hubs.
              </p>

              {/* Transit cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {LOCATION_HIGHLIGHTS.map((loc, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-[#141822] border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] text-[#d4af37] uppercase tracking-wider font-semibold block">{loc.category}</span>
                      <span className="text-xs font-medium text-white block mt-0.5">{loc.name}</span>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <span className="text-xs font-bold text-[#f3e5ab] block">{loc.timeMin}</span>
                      <span className="text-[10px] text-zinc-500">{loc.distance}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-zinc-300">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Official Address:</strong>
                  {PROPERTY_INFO.address}
                </div>
              </div>
            </div>

            {/* Right Map Placeholder */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl h-[460px] bg-[#12151d] flex flex-col justify-between p-6">
                {/* Background Map Visual Stylized Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                  alt="Sector 43 Golf Course Road Gurugram Map View"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] contrast-[1.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-black/40" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-[#f3e5ab] font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Live GPS Verified Location</span>
                  </div>
                </div>

                {/* Center Pin Marker */}
                <div className="relative z-10 self-center text-center animate-bounce">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-2xl shadow-[#d4af37]/60 border-2 border-white">
                    <MapPin className="w-6 h-6 fill-black" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-xs font-semibold text-white border border-[#d4af37]/40">
                    Aura Luxe Suites
                  </div>
                </div>

                {/* Bottom Navigation CTAs */}
                <div className="relative z-10 p-4 rounded-2xl bg-[#141822]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-400 block">Need driving directions?</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">Open in Google Maps / Apple Maps</span>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#d4af37] text-black text-xs font-bold hover:bg-[#e6c148] transition-colors"
                  >
                    Get Route
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. WHY CHOOSE US (6 Feature Cards)
      ========================================================================= */}
      <section className="py-24 relative bg-[#0d0f14] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-3">
              <span>The Gold Standard</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Why Discerning Residents Choose Us
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              Zero brokerage, zero landlord intrusions, 100% refundable deposits, and certified five-star hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#12151c] border border-white/5 hover:border-[#d4af37]/30 transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1c212e] text-[#d4af37] flex items-center justify-center border border-white/5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. TESTIMONIALS (Realistic Resident Stories)
      ========================================================================= */}
      <section className="py-24 relative bg-[#0a0c10] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-3">
              <span>Verified Testimonials</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Loved By Professionals &amp; Scholars
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              Hear directly from current residents who elevated their living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-[#12151c] border border-white/10 flex flex-col justify-between relative space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#d4af37]/30" />
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#d4af37]/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-[11px] text-[#f3e5ab]">{t.role} • {t.companyOrCollege}</p>
                    <span className="text-[10px] text-zinc-500 block">{t.stayDuration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. PRICING & PLANS COMPARISON
      ========================================================================= */}
      <section className="py-24 relative bg-[#0d0f14] border-t border-white/5" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-3">
              <span>Transparent Rates</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Honest, Transparent Pricing
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              No hidden maintenance fees, no surprise utility surcharges, and fully refundable deposits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS_DATA.map((plan) => (
              <div
                key={plan.id}
                className={`p-8 rounded-3xl bg-[#12151c] border flex flex-col justify-between ${
                  plan.badge === "Most Popular"
                    ? "border-[#d4af37] ring-1 ring-[#d4af37]/40 shadow-2xl relative"
                    : "border-white/10"
                }`}
              >
                <div>
                  {plan.badge === "Most Popular" && (
                    <div className="inline-block px-3 py-1 rounded-full bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-wider mb-3">
                      Recommended Choice
                    </div>
                  )}

                  <h3 className="font-serif text-2xl font-bold text-white">{plan.name}</h3>
                  <span className="text-xs text-zinc-400 block mt-1">{plan.type}</span>

                  <div className="my-6">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-white">{plan.price}</span>
                    <span className="text-xs text-zinc-400">/{plan.billingPeriod}</span>
                  </div>

                  <div className="space-y-3 border-t border-white/5 pt-6 text-xs text-zinc-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span><strong>Deposit:</strong> {plan.deposit}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span><strong>Food Policy:</strong> {plan.foodPolicy}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span><strong>Electricity:</strong> Sub-metered at actual govt tariff</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span><strong>Maintenance:</strong> Zero extra charge (Included)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span><strong>Minimum Stay:</strong> {plan.lockIn}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleOpenEnquiry(plan.name)}
                    className="w-full py-3.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-black shadow-lg shadow-[#d4af37]/20 hover:opacity-95 transition-all cursor-pointer"
                  >
                    Select Plan &amp; Schedule Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. BOOK A VISIT CTA (Full-Width Cinematic Banner)
      ========================================================================= */}
      <section className="relative py-24 bg-gradient-to-r from-[#171b24] via-[#10131a] to-[#171b24] border-t border-b border-[#d4af37]/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">
            Private Site Visit Concierge
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Find Your New Home Away From Home.
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Schedule a visit and experience the property, inspect the acoustic study rooms, and sample our chef-crafted dining menu before you decide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-black shadow-xl shadow-[#d4af37]/30 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Book a Visit Now</span>
            </button>

            <a
              href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${encodeURIComponent(PROPERTY_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modals & Lightbox Components */}
      <RoomDetailsModal
        room={selectedRoom}
        isOpen={isRoomModalOpen}
        onClose={() => setIsRoomModalOpen(false)}
        onBookVisit={(roomName) => {
          setIsRoomModalOpen(false);
          handleOpenEnquiry(roomName);
        }}
      />

      <GalleryLightbox
        items={filteredGallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultRoom={enquiryDefaultRoom}
      />
    </div>
  );
}
