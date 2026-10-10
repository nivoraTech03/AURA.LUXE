"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2 
} from "lucide-react";
import { GalleryItem } from "@/data/propertyData";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.35, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.35, 1));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const handlePrev = () => {
    setZoomLevel(1);
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setZoomLevel(1);
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={() => {
        handleResetZoom();
        onClose();
      }}
    >
      {/* Top Bar Controls */}
      <div 
        className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            {currentItem.category} • {currentIndex + 1} of {items.length}
          </span>
          <h4 className="text-white font-medium text-base sm:text-lg">
            {currentItem.title}
          </h4>
        </div>

        {/* Toolbar: Zoom In / Zoom Out / Reset / Close */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#181d26]/80 border border-white/10 rounded-full px-2 py-1 shadow-md">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className="p-2 text-zinc-300 hover:text-white disabled:opacity-30 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-zinc-300 px-2 min-w-[3.5rem] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.5}
              className="p-2 text-zinc-300 hover:text-white disabled:opacity-30 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-2 text-zinc-300 hover:text-[#d4af37] transition-colors ml-1"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all ml-2"
            title="Close Lightbox (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Display with dynamic zoom */}
      <div 
        className="relative w-full h-[78vh] flex items-center justify-center p-4 sm:p-12 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="relative max-w-5xl max-h-full transition-transform duration-200 ease-out flex items-center justify-center select-none"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[72vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 transition-all z-20 backdrop-blur-md"
        aria-label="Previous Photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 transition-all z-20 backdrop-blur-md"
        aria-label="Next Photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Caption at bottom */}
      <div 
        className="absolute bottom-4 left-4 right-4 sm:left-12 sm:right-12 text-center z-20 pointer-events-none"
      >
        <div className="inline-block px-5 py-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs sm:text-sm text-zinc-300 max-w-2xl">
          {currentItem.description}
        </div>
      </div>
    </div>
  );
}
