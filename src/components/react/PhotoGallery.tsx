import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { shuffleArray, getPhotoUrls } from '@/lib/photos-utils';
import { triggerConfetti } from '@/lib/confetti-utils';
import PhotoModal from './PhotoModal';

// Reduced to prevent memory issues - large images (2-3MB each) cause browser crashes
const ITEMS_PER_PAGE = 12;
const MAX_RENDERED_IMAGES = 36; // Cap to prevent memory exhaustion

export default function PhotoGallery() {
  const [photos] = useState<string[]>(() => getPhotoUrls());
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
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

  const totalPages = Math.ceil(shuffledPhotos.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + MAX_RENDERED_IMAGES, shuffledPhotos.length);
  const visiblePhotos = shuffledPhotos.slice(startIndex, endIndex);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [totalPages]);

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
        <p className="text-center text-orange-700 mb-8">
          Page {currentPage + 1} of {totalPages} ({shuffledPhotos.length} photos)
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, index) => (
            <div
              key={`photo-${startIndex + index}-${photo}`}
              className="w-full cursor-pointer group"
              onClick={() => handlePhotoClick(photo)}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-orange-100">
                <img
                  src={photo}
                  alt={`BSides SWFL Event Photo ${startIndex + index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-700 transition-colors"
          >
            Previous
          </button>
          <span className="text-orange-800 font-medium">
            {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages - 1}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-700 transition-colors"
          >
            Next
          </button>
        </div>

        <div className="mt-8 text-center text-orange-700 text-sm">
          Click any photo to view full size
        </div>
      </div>

      {/* Photo Modal */}
      <PhotoModal photo={selectedPhoto} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
