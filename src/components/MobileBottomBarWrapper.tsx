"use client";

import React, { useState } from "react";
import MobileBottomBar from "./MobileBottomBar";
import EnquiryModal from "./EnquiryModal";

export default function MobileBottomBarWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <MobileBottomBar onOpenEnquiry={() => setIsModalOpen(true)} />
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
