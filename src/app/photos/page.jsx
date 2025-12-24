"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { shuffleArray, getPhotos } from "@/lib/photos-utils";
import { triggerConfetti } from "@/lib/confetti-utils";
import PhotoModal from "../components/photo-modal";

export default function Photos() {
  const [shuffledPhotos] = useState(() => shuffleArray(getPhotos()));
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhotoClick = useCallback((event) => {
    // Always get photo from data attribute to ensure we have the correct one
    const clickedPhoto = event.currentTarget.dataset.photo;
    console.log('Photo clicked - data attribute:', clickedPhoto);
    
    if (!clickedPhoto) {
      console.error('No photo found in data attribute!');
      return;
    }
    
    console.log('Setting selected photo to:', clickedPhoto);
    
    // Use functional updates to ensure state is set correctly
    setSelectedPhoto(() => clickedPhoto);
    setIsModalOpen(() => true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  }, []);

  useEffect(() => {
    // Trigger confetti on mount
    triggerConfetti(confetti);
  }, []);

  if (shuffledPhotos.length === 0) {
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
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Mobile: Single column */}
        <div className="md:hidden space-y-4">
          {shuffledPhotos.map((photo) => (
            <div
              key={`mobile-${photo}`}
              className="w-full h-64 relative cursor-pointer rounded-lg shadow-lg hover:opacity-90 transition-opacity overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePhotoClick(e);
              }}
              data-photo={photo}
            >
              <Image
                src={photo}
                alt={photo}
                fill
                className="object-cover pointer-events-none"
                sizes="100vw"
                loading="lazy"
                onLoad={(e) => {
                  const imgSrc = e.target.src;
                  console.log(`Thumbnail loaded - expected: ${photo}, actual: ${imgSrc}`);
                }}
              />
            </div>
          ))}
        </div>

        {/* Tablet/Desktop: Two columns */}
        <div className="hidden md:grid md:grid-cols-2 gap-4">
          {shuffledPhotos.map((photo) => (
            <div
              key={`desktop-${photo}`}
              className="w-full h-80 relative cursor-pointer rounded-lg shadow-lg hover:opacity-90 transition-opacity overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePhotoClick(e);
              }}
              data-photo={photo}
            >
              <Image
                src={photo}
                alt={photo}
                fill
                className="object-cover pointer-events-none"
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
