"use client";

import React from "react";
import { MessageSquare, Calendar, Phone } from "lucide-react";
import { PROPERTY_INFO } from "@/data/propertyData";

interface MobileBottomBarProps {
  onOpenEnquiry: () => void;
}

export default function MobileBottomBar({ onOpenEnquiry }: MobileBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0a0d13]/95 backdrop-blur-lg border-t border-[#d4af37]/25 px-4 py-3 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2">
        {/* Instant Call */}
        <a
          href={`tel:${PROPERTY_INFO.phone}`}
          className="p-3 bg-[#171b24] text-zinc-200 rounded-xl border border-white/10 hover:text-white flex items-center justify-center shrink-0"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-5 h-5 text-[#d4af37]" />
        </a>

        {/* WhatsApp Fast Trigger */}
        <a
          href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${encodeURIComponent(PROPERTY_INFO.whatsappDefaultMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-950/50"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Book Visit Trigger */}
        <button
          onClick={onOpenEnquiry}
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] active:opacity-90 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#d4af37]/20"
        >
          <Calendar className="w-4 h-4 text-black" />
          <span>Book Tour</span>
        </button>
      </div>
    </div>
  );
}
