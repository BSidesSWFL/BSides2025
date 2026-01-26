import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { shuffleArray, getPhotoUrls } from '@/lib/photos-utils';
import { triggerConfetti } from '@/lib/confetti-utils';
import PhotoModal from './PhotoModal';

// Auto-advance interval in milliseconds
const AUTO_ADVANCE_INTERVAL = 5000;

export default function PhotoGallery() {
  const [photos] = useState<string[]>(() => getPhotoUrls());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const hasTriggeredConfetti = useRef(false);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize shuffled photos to prevent reshuffling on every render
  const shuffledPhotos = useMemo(() => {
    if (photos.length === 0) return [];
    return shuffleArray(photos);
  }, [photos]);

  const totalPhotos = shuffledPhotos.length;
  const currentPhoto = shuffledPhotos[currentIndex];

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  }, [totalPhotos]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  }, [totalPhotos]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-advance effect
  useEffect(() => {
    if (isPaused || isModalOpen || totalPhotos === 0) {
      if (autoAdvanceRef.current) {
        clearInterval(autoAdvanceRef.current);
        autoAdvanceRef.current = null;
      }
      return;
    }

    autoAdvanceRef.current = setInterval(goToNext, AUTO_ADVANCE_INTERVAL);

    return () => {
      if (autoAdvanceRef.current) {
        clearInterval(autoAdvanceRef.current);
      }
    };
  }, [isPaused, isModalOpen, totalPhotos, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) return;
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, goToNext, goToPrev]);

  // Confetti on mount
  useEffect(() => {
    if (!hasTriggeredConfetti.current) {
      triggerConfetti(confetti);
      hasTriggeredConfetti.current = true;
    }
  }, []);

  const handlePhotoClick = () => {
    setSelectedPhoto(currentPhoto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  if (photos.length === 0) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-900 mb-4">Photos</h1>
          <p className="text-lg text-slate-700">No photos available. Please check back later!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-xl">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-orange-900 mb-4 text-center">Event Photos</h2>
        <p className="text-center text-orange-700 mb-6">
          {currentIndex + 1} of {totalPhotos} photos
        </p>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            aria-label="Previous photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Photo Display - fixed height container for both portrait and landscape */}
          <div
            className="h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-2xl bg-slate-900 cursor-pointer flex items-center justify-center"
            onClick={handlePhotoClick}
          >
            <img
              key={currentIndex}
              src={currentPhoto}
              alt={`BSides SWFL Event Photo ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain transition-opacity duration-300"
              style={{ imageOrientation: 'from-image' }}
              loading="eager"
              decoding="async"
              draggable="false"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            aria-label="Next photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Controls */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center gap-2"
          >
            {isPaused ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Play
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
                Pause
              </>
            )}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-4xl mx-auto">
          <div className="h-1 bg-orange-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-600 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalPhotos) * 100}%` }}
            />
          </div>
        </div>

        {/* Quick Jump - shows dots for navigation */}
        <div className="mt-4 flex justify-center items-center gap-1 flex-wrap max-w-4xl mx-auto">
          {Array.from({ length: Math.min(20, totalPhotos) }).map((_, i) => {
            // Show first 10, current area, and last few
            const stepSize = Math.max(1, Math.floor(totalPhotos / 20));
            const dotIndex = i * stepSize;
            if (dotIndex >= totalPhotos) return null;

            const isActive = currentIndex >= dotIndex && currentIndex < dotIndex + stepSize;
            return (
              <button
                key={dotIndex}
                onClick={() => goToIndex(dotIndex)}
                className={`w-2 h-2 rounded-full transition-all ${
                  isActive ? 'bg-orange-600 w-4' : 'bg-orange-300 hover:bg-orange-400'
                }`}
                aria-label={`Go to photo ${dotIndex + 1}`}
              />
            );
          })}
        </div>

        <div className="mt-6 text-center text-orange-700 text-sm space-y-1">
          <p>Click photo to view full size</p>
          <p className="text-orange-500">Keyboard: Arrow keys to navigate, Space to pause/play</p>
        </div>
      </div>

      {/* Photo Modal */}
      <PhotoModal photo={selectedPhoto} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
