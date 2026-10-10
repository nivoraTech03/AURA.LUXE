"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  Eye, 
  Calendar, 
  MessageSquare, 
  Filter, 
  Bath, 
  Wind, 
  BedDouble, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";
import { ROOMS_DATA, Room, PROPERTY_INFO } from "@/data/propertyData";
import RoomDetailsModal from "@/components/RoomDetailsModal";
import EnquiryModal from "@/components/EnquiryModal";

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryDefaultRoom, setEnquiryDefaultRoom] = useState<string | undefined>(undefined);

  const filteredRooms = selectedCategory === "All"
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.type === selectedCategory);

  const handleOpenRoomModal = (room: Room) => {
    setSelectedRoom(room);
    setIsRoomModalOpen(true);
  };

  const handleOpenEnquiry = (roomName?: string) => {
    setEnquiryDefaultRoom(roomName);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen text-zinc-100">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#f3e5ab] border border-[#d4af37]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Executive Living Suites</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Suites &amp; Room Layouts
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Crafted with sound-dampened partitions, ergonomic study furniture, luxury mattresses, and daily housekeeping. Filter below to discover your ideal residence.
        </p>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {["All", "Single Sharing", "Double Sharing", "Triple Sharing"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/25"
                  : "bg-[#161a23] text-zinc-300 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {filteredRooms.map((room, idx) => (
            <div
              key={room.id}
              id={room.id}
              className={`rounded-3xl bg-[#12151c] border border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 hover:border-[#d4af37]/40 transition-all ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Imagery Showcase */}
              <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {room.badge && (
                  <span className="absolute top-5 left-5 px-3.5 py-1 rounded-full bg-[#d4af37] text-black font-bold text-xs shadow-lg">
                    {room.badge}
                  </span>
                )}

                <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {room.availability}
                </span>

                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-white">
                  <span className="px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 uppercase tracking-widest text-[11px] font-semibold text-[#f3e5ab]">
                    {room.occupancy}
                  </span>
                  <span className="text-xs text-zinc-300">
                    High-speed Wi-Fi Included
                  </span>
                </div>
              </div>

              {/* Details & Specs */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                        {room.name}
                      </h2>
                      <p className="text-xs text-[#d4af37] mt-0.5 font-medium">{room.tagline}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-serif font-bold text-white">{room.price}</span>
                        {room.originalPrice && (
                          <span className="text-xs line-through text-zinc-500">{room.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-xs text-zinc-400 block">/{room.billingPeriod}</span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {room.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Financial Terms Preview */}
                  <div className="p-3 bg-[#171b24] rounded-2xl border border-white/5 flex flex-wrap gap-4 text-xs text-zinc-400">
                    <div><span className="text-zinc-500">Deposit:</span> <strong className="text-zinc-200">{room.deposit}</strong></div>
                    <div><span className="text-zinc-500">Lock-in:</span> <strong className="text-zinc-200">{room.lockIn}</strong></div>
                    <div><span className="text-zinc-500">Food:</span> <strong className="text-zinc-200">{room.foodPolicy.split(" ")[0]} Included</strong></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleOpenRoomModal(room)}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#1a202c] hover:bg-[#252c3d] text-white text-xs font-semibold border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#d4af37]" />
                    <span>View Room Details &amp; Gallery</span>
                  </button>

                  <button
                    onClick={() => handleOpenEnquiry(room.name)}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-black text-xs font-bold hover:opacity-95 shadow-md shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-black" />
                    <span>Book Private Visit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modals */}
      <RoomDetailsModal
        room={selectedRoom}
        isOpen={isRoomModalOpen}
        onClose={() => setIsRoomModalOpen(false)}
        onBookVisit={(name) => {
          setIsRoomModalOpen(false);
          handleOpenEnquiry(name);
        }}
      />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultRoom={enquiryDefaultRoom}
      />
    </div>
  );
}
