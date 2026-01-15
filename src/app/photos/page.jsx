"use client";

import { useEffect, useState, useMemo } from "react";
import confetti from "canvas-confetti";
import { shuffleArray, fetchPhotos } from "@/lib/photos-utils";
import { triggerConfetti } from "@/lib/confetti-utils";
import PhotoModal from "../components/photo-modal";

const ITEMS_PER_PAGE = 12;

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

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
      try {
        const fetchedPhotos = await fetchPhotos();
        setPhotos(fetchedPhotos);
      } catch (err) {
        console.error("Failed to load photos", err);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, []);

  // Memoize shuffled photos to prevent reshuffling on every render
  // and maintain consistent order for pagination
  const shuffledPhotos = useMemo(() => {
    if (photos.length === 0) return [];
    return shuffleArray(photos);
  }, [photos]);

  const visiblePhotos = shuffledPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < shuffledPhotos.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, shuffledPhotos.length));
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          <div className="text-xl text-orange-900">Loading photos...</div>
        </div>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-900 mb-4">Photos</h1>
          <p className="text-lg text-slate-700">
            No photos available. Please check back later!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-xl">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-orange-900 mb-8 text-center">Event Photos</h2>

        {/* Responsive Grid - Single source of truth */}
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
                  width={800} // helping browser reserve space
                  height={600}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              Load More Photos ({shuffledPhotos.length - visibleCount} remaining)
            </button>
          </div>
        )}
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
