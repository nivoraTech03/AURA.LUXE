"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import EnquiryModal from "./EnquiryModal";

export default function NavbarWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
