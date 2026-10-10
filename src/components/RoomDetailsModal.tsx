"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  X, 
  Check, 
  Shield, 
  Wifi, 
  Wind, 
  Sparkles, 
  Calendar, 
  MessageSquare, 
  Phone,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Info
} from "lucide-react";
import { Room, PROPERTY_INFO } from "@/data/propertyData";

interface RoomDetailsModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  onBookVisit: (roomName: string) => void;
}

export default function RoomDetailsModal({
  room,
  isOpen,
  onClose,
  onBookVisit,
}: RoomDetailsModalProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  if (!isOpen || !room) return null;

  const allPhotos = [room.image, ...room.secondaryImages];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#11141b] border border-[#d4af37]/30 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161a23]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/20 text-[#f3e5ab] border border-[#d4af37]/30">
              {room.type}
            </span>
            <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {room.availability}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Visual Carousel / Gallery */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={allPhotos[selectedPhotoIndex]}
                alt={room.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
                    {room.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#f3e5ab]/90 mt-1">
                    {room.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {allPhotos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    selectedPhotoIndex === idx
                      ? "border-[#d4af37] ring-2 ring-[#d4af37]/50"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Pricing & Key specs banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#161a23] p-4 rounded-2xl border border-white/5">
            <div>
              <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Price</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xl sm:text-2xl font-bold text-white font-serif">{room.price}</span>
              </div>
              <span className="text-[10px] text-zinc-500">/{room.billingPeriod}</span>
            </div>

            <div>
              <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Bathroom</span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1 block">
                {room.bathroom}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Air Conditioning</span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1 block">
                {room.cooling}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Furnishing</span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1 block">
                Workstation &amp; Bed
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] mb-2">
              Suite Overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Features check grid */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
              Included In-Room Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-[#171c26]/60 p-2.5 rounded-xl border border-white/5">
                  <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-zinc-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Policies */}
          <div className="bg-[#1a1f2c]/70 rounded-2xl p-4 border border-[#d4af37]/20 space-y-2">
            <h5 className="text-xs font-semibold text-white flex items-center gap-1.5 uppercase tracking-wider">
              <Info className="w-3.5 h-3.5 text-[#d4af37]" />
              Lease &amp; Financial Terms
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-300 pt-1">
              <div>
                <span className="text-zinc-500 block">Security Deposit:</span>
                <span className="font-medium text-white">{room.deposit}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Food Plan:</span>
                <span className="font-medium text-white">{room.foodPolicy}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Agreement Lock-in:</span>
                <span className="font-medium text-white">{room.lockIn}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Actions */}
        <div className="p-4 sm:p-6 bg-[#161a23] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-xs text-zinc-400">Ready to make this your residence?</span>
            <div className="text-sm text-white font-medium">Slots available for immediate check-in.</div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Aura Luxe! I want to enquire about the ${room.name} (${room.type}). Is it currently available?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookVisit(room.name);
              }}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-black text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 hover:opacity-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Tour</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
