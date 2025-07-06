"use client"; // Add this line if you are using App Router in Next.js

import { useState, useEffect } from 'react';
import Hero from "./components/hero";
import InfoCards from "./components/info-cards";
import CallForSpeakersModal from "./components/call-for-speakers";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Open the modal when the component mounts
    setIsModalOpen(true);
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main className="max-w-5xl bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 mx-auto my-6 p-4 rounded-t-2xl">
        <Hero />
        <InfoCards />
      </main>
      {/* <CallForSpeakersModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </>
  );
}
