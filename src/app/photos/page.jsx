"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { shuffleArray, getPhotos } from "@/lib/photos-utils";
import { triggerConfetti } from "@/lib/confetti-utils";
import PhotoModal from "../components/photo-modal";

export default function Photos() {
  const [photos] = useState(() => getPhotos());
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  useEffect(() => {
    // Trigger confetti on mount
    triggerConfetti(confetti);

  if (photos.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-900 mb-4">Photos</h1>
          <p className="text-lg text-slate-700">
            No photos available. Please check the Google Photos link or add photos manually.
          </p>
        </div>
      </div>
    );
  }

  // Shuffle photos for variety
  const shuffledPhotos = shuffleArray(photos);
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Mobile: Single column */}
        <div className="md:hidden space-y-4">
          {shuffledPhotos.map((photo, index) => (
            <div
              key={`mobile-${index}`}
              className="w-full h-64 relative cursor-pointer rounded-lg shadow-lg hover:opacity-90 transition-opacity overflow-hidden"
              onClick={() => handlePhotoClick(photo)}
            >
              <Image
                src={photo}
                alt={`Photo ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Tablet/Desktop: Two columns */}
        <div className="hidden md:grid md:grid-cols-2 gap-4">
          {shuffledPhotos.map((photo, index) => (
            <div
              key={`desktop-${index}`}
              className="w-full h-80 relative cursor-pointer rounded-lg shadow-lg hover:opacity-90 transition-opacity overflow-hidden"
              onClick={() => handlePhotoClick(photo)}
            >
              <Image
                src={photo}
                alt={`Photo ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Photo Modal */}
      <PhotoModal 
        photo={selectedPhoto} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}
