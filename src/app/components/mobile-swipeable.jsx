"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Mobile Carousel Component
 * Displays photos in a swipeable horizontal carousel on mobile devices
 * @param {Array} photos - Array of photo URLs
 * @param {Function} onPhotoClick - Callback function when a photo is clicked
 */
export default function MobileSwipeable({ photos, onPhotoClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);
  const startXRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const startXValueRef = useRef(0);

  // Get unique photos (remove duplicates)
  const uniquePhotos = Array.from(new Set(photos));

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startXRef.current = touch.clientX;
    startXValueRef.current = touch.clientX;
    
    // Get current transform
    if (carouselRef.current) {
      const computedStyle = window.getComputedStyle(carouselRef.current);
      const transform = computedStyle.transform;
      if (transform && transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        currentTranslateRef.current = matrix.m41; // m41 is translateX
      } else {
        currentTranslateRef.current = -currentIndex * 100;
      }
    }
    
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - startXRef.current;
    
    // Prevent default to avoid page scroll
    if (Math.abs(deltaX) > 5) {
      e.preventDefault();
    }
    
    // Convert pixel delta to percentage (assuming viewport width)
    const viewportWidth = window.innerWidth;
    const deltaPercent = (deltaX / viewportWidth) * 100;
    const newTranslateX = currentTranslateRef.current + deltaPercent;
    
    setTranslateX(newTranslateX);
    
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${newTranslateX}%)`;
      carouselRef.current.style.transition = 'none';
    }
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const deltaX = startXValueRef.current - endX;
    const threshold = 50; // Minimum swipe distance to change slide
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && currentIndex < uniquePhotos.length - 1) {
        // Swipe left - go to next
        setCurrentIndex(prev => prev + 1);
      } else if (deltaX < 0 && currentIndex > 0) {
        // Swipe right - go to previous
        setCurrentIndex(prev => prev - 1);
      } else {
        // Snap back to current
        updateCarouselPosition();
      }
    } else {
      // Snap back to current
      updateCarouselPosition();
    }
    
    setIsDragging(false);
    setTranslateX(0);
  };

  const updateCarouselPosition = () => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 0.3s ease-out';
      const translateValue = -currentIndex * 100;
      carouselRef.current.style.transform = `translateX(${translateValue}%)`;
      currentTranslateRef.current = translateValue;
    }
  };

  useEffect(() => {
    if (!isDragging) {
      updateCarouselPosition();
    }
  }, [currentIndex, isDragging]);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < uniquePhotos.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div 
      className="md:hidden w-full h-screen overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-x' }}
    >
      <div 
        ref={carouselRef}
        className="flex h-full"
        style={{
          width: `${uniquePhotos.length * 100}%`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        {uniquePhotos.map((photo, index) => (
          <div
            key={`mobile-carousel-${index}`}
            className="flex-shrink-0 h-full px-2 flex items-center justify-center"
            style={{ width: `${100 / uniquePhotos.length}%` }}
          >
            <div
              className="w-full h-full flex items-center justify-center cursor-pointer"
              onClick={() => onPhotoClick(photo)}
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                loading="lazy"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left Chevron */}
      {uniquePhotos.length > 1 && currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all"
          aria-label="Previous photo"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Right Chevron */}
      {uniquePhotos.length > 1 && currentIndex < uniquePhotos.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all"
          aria-label="Next photo"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Dots indicator */}
      {uniquePhotos.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {uniquePhotos.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-orange-900 w-6' 
                  : 'bg-orange-300 hover:bg-orange-400'
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

