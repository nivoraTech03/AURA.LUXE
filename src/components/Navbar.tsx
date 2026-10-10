"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Sparkles,
  ChevronRight
} from "lucide-react";
import { PROPERTY_INFO } from "@/data/propertyData";

interface NavbarProps {
  onOpenEnquiry?: (roomName?: string) => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Suites & Rooms", href: "/rooms" },
    { name: "Amenities", href: "/amenities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Location", href: "/location" },
    { name: "Contact & Enquiry", href: "/contact" },
  ];

  const handleBookVisit = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0d11]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9b7824] via-[#d4af37] to-[#f9e9a2] p-[1px] shadow-lg shadow-[#d4af37]/20">
                <div className="w-full h-full bg-[#0d0f12] rounded-xl flex items-center justify-center group-hover:bg-[#151922] transition-colors">
                  <Building2 className="w-5 h-5 text-[#d4af37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                  AURA<span className="text-[#d4af37]">.</span>LUXE
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#d4af37]/80 font-medium">
                  Executive Residences
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#12151b]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 shadow-inner">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-[#d4af37] bg-white/5 font-semibold"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${encodeURIComponent(PROPERTY_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-900/30 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={handleBookVisit}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all"
              >
                <span className="px-5 py-2 transition-all ease-in duration-75 bg-[#0f1217] rounded-full group-hover:bg-opacity-0 text-[#f3e5ab] group-hover:text-[#0a0b0e] flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule Visit</span>
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${encodeURIComponent(PROPERTY_INFO.whatsappDefaultMsg)}`}
                className="p-2 text-emerald-400 bg-emerald-950/30 rounded-full border border-emerald-500/20"
                aria-label="WhatsApp Us"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-300 hover:text-white bg-[#151922] rounded-xl border border-white/10"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0f14] border-b border-[#d4af37]/20 px-5 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base ${
                      isActive
                        ? "bg-[#d4af37]/15 text-[#f3e5ab] font-semibold border border-[#d4af37]/30"
                        : "text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleBookVisit();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-black font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book A Private Tour</span>
              </button>
              <a
                href={`tel:${PROPERTY_INFO.phone}`}
                className="w-full py-3 rounded-xl bg-[#171c26] text-white font-medium text-center flex items-center justify-center gap-2 border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Direct Call Concierge</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
