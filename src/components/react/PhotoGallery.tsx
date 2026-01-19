import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { shuffleArray, getPhotoUrls } from '@/lib/photos-utils';
import { triggerConfetti } from '@/lib/confetti-utils';
import PhotoModal from './PhotoModal';

const ITEMS_PER_PAGE = 24;

export default function PhotoGallery() {
  const [photos] = useState<string[]>(() => getPhotoUrls());
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const observerTarget = useRef<HTMLDivElement>(null);
  const hasTriggeredConfetti = useRef(false);

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  useEffect(() => {
    if (!hasTriggeredConfetti.current) {
      triggerConfetti(confetti);
      hasTriggeredConfetti.current = true;
    }
  }, []);

  // Memoize shuffled photos to prevent reshuffling on every render
  const shuffledPhotos = useMemo(() => {
    if (photos.length === 0) return [];
    return shuffleArray(photos);
  }, [photos]);

  const visiblePhotos = shuffledPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < shuffledPhotos.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, shuffledPhotos.length));
  }, [shuffledPhotos.length]);

  // Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, loadMore]);

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
        <h2 className="text-3xl font-bold text-orange-900 mb-8 text-center">Event Photos</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, index) => (
            <div
              key={`photo-${index}`}
              className="w-full cursor-pointer group"
              onClick={() => handlePhotoClick(photo)}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-orange-100">
                <img
                  src={photo}
                  alt={`BSides SWFL Event Photo ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  draggable="false"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Scroll Trigger */}
        {hasMore && (
          <div ref={observerTarget} className="mt-12 text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
            <p className="mt-2 text-orange-800 text-sm">Loading more memories...</p>
          </div>
        )}

        {!hasMore && photos.length > 0 && (
          <div className="mt-12 text-center py-8 text-orange-800 font-medium">
            You've reached the end of the gallery!
          </div>
        )}
      </div>

      {/* Photo Modal */}
      <PhotoModal photo={selectedPhoto} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
