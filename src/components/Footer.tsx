"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight 
} from "lucide-react";
import { PROPERTY_INFO, ROOMS_DATA } from "@/data/propertyData";

export default function Footer() {
  return (
    <footer className="bg-[#080a0e] border-t border-white/10 pt-16 pb-28 md:pb-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9b7824] via-[#d4af37] to-[#f9e9a2] p-[1px]">
                <div className="w-full h-full bg-[#0d0f12] rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#d4af37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-xl font-bold text-white">
                  AURA<span className="text-[#d4af37]">.</span>LUXE
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                  Executive Residences
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              Gurugram&apos;s landmark hospitality-grade co-living residence. Redefining paying guest living for forward-thinking scholars and corporate professionals with zero compromise on luxury, privacy, and peace.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4af37]/20 hover:text-[#d4af37] text-zinc-400 flex items-center justify-center transition-all border border-white/5 text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4af37]/20 hover:text-[#d4af37] text-zinc-400 flex items-center justify-center transition-all border border-white/5 text-xs font-bold"
                aria-label="LinkedIn"
              >
                IN
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4af37]/20 hover:text-[#d4af37] text-zinc-400 flex items-center justify-center transition-all border border-white/5 text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#d4af37] transition-colors flex items-center justify-between">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-[#d4af37] transition-colors flex items-center justify-between">
                  <span>Suites &amp; Room Plans</span>
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-[#d4af37] transition-colors flex items-center justify-between">
                  <span>Luxury Amenities</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#d4af37] transition-colors flex items-center justify-between">
                  <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[#d4af37] transition-colors flex items-center justify-between">
                  <span>Location &amp; Transit</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors flex items-center justify-between">
                  <span>Book Visit &amp; Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Suites Available */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Room Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              {ROOMS_DATA.map((room) => (
                <li key={room.id}>
                  <Link href={`/rooms#${room.id}`} className="hover:text-[#f3e5ab] transition-colors block">
                    <span className="font-medium text-zinc-300 block">{room.name}</span>
                    <span className="text-xs text-zinc-500">{room.price} • {room.type}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Immediate Move-ins Accepted
                </span>
              </li>
            </ul>
          </div>

          {/* Concierge & Address */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Residential Concierge
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{PROPERTY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${PROPERTY_INFO.phone}`} className="hover:text-white transition-colors">
                  {PROPERTY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`mailto:${PROPERTY_INFO.email}`} className="hover:text-white transition-colors">
                  {PROPERTY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-zinc-500">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{PROPERTY_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 {PROPERTY_INFO.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-zinc-500">House Rules &amp; Policies</span>
            <span className="text-zinc-500">Privacy Policy</span>
            <span className="flex items-center gap-1 text-[#d4af37]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Premium Listing
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
