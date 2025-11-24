"use client";

import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";
import { shuffleArray, duplicatePhotos, splitPhotosEqually, fetchPhotos } from "@/lib/photos-utils";
import { triggerConfetti } from "@/lib/confetti-utils";
import MobileSwipeable from "../components/mobile-swipeable";
import PhotoModal from "../components/photo-modal";

// Scrollable Column Component
function ScrollableColumn({ photos, direction = 'down', className = '', onPhotoClick }) {
  return (
    <div className={`flex-1 h-full overflow-hidden ${className}`}>
      <div 
        className={`flex flex-col h-full ${direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'}`}
      >
        {photos.map((photo, index) => (
          <div
            key={`${className}-${index}`}
            className="flex-shrink-0 w-full h-1/3 px-1 my-2 cursor-pointer"
            onClick={() => onPhotoClick(photo)}
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
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
    
    // Fetch photos
    const loadPhotos = async () => {
      const fetchedPhotos = await fetchPhotos();
      setPhotos(fetchedPhotos);
      setLoading(false);
    };
    
    loadPhotos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-orange-900">Loading photos...</div>
      </div>
    );
  }

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

  // Shuffle all photos first, then split equally across three columns
  const shuffledPhotos = shuffleArray(photos);
  const [leftColumnPhotos, centerColumnPhotos, rightColumnPhotos] = splitPhotosEqually(shuffledPhotos);
  
  // Duplicate each column's photos for seamless infinite scroll
  const leftPhotos = duplicatePhotos(leftColumnPhotos, 3);
  const centerPhotos = duplicatePhotos(centerColumnPhotos, 3);
  const rightPhotos = duplicatePhotos(rightColumnPhotos, 3);
  
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative">
      {/* Title - positioned absolutely for mobile, normal for desktop */}
      
      {/* Mobile: Horizontal carousel */}
      <MobileSwipeable 
        photos={photos}
        onPhotoClick={handlePhotoClick}
      />

      {/* Tablet/Desktop: Three rows */}
      <div className="hidden md:flex w-full h-screen gap-2 px-2 pt-24">
        {/* Left row - scrolls down */}
        <ScrollableColumn 
          photos={leftPhotos} 
          direction="down" 
          className="left-column"
          onPhotoClick={handlePhotoClick}
        />

        {/* Center row - scrolls up */}
        <ScrollableColumn 
          photos={centerPhotos} 
          direction="up" 
          className="center-column"
          onPhotoClick={handlePhotoClick}
        />

        {/* Right row - scrolls down */}
        <ScrollableColumn 
          photos={rightPhotos} 
          direction="down" 
          className="right-column"
          onPhotoClick={handlePhotoClick}
        />
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
