"use client";

import { useEffect, useState } from "react";

/**
 * Photo Modal Component
 * Displays a full-size photo in a modal overlay
 * @param {string} photo - URL of the photo to display
 * @param {boolean} isOpen - Whether the modal is open
 * @param {Function} onClose - Callback function to close the modal
 */
export default function PhotoModal({ photo, isOpen, onClose }) {
  // Store the photo in local state to prevent stale values
  const [displayPhoto, setDisplayPhoto] = useState(null);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    if (isOpen && photo) {
      // Reset image key to force remount when photo changes
      setImageKey(prev => prev + 1);
      setDisplayPhoto(photo);
    } else if (!isOpen) {
      // Clear photo when modal closes
      setDisplayPhoto(null);
    }
  }, [isOpen, photo]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !displayPhoto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-orange-900 hover:text-orange-700 text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          ×
        </button>
        {displayPhoto && (
          <img
            src={displayPhoto}
            alt="Full size photo"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => {
              e.stopPropagation();
            }}
            key={`${displayPhoto}-${imageKey}`}
            style={{ display: 'block' }}
          />
        )}
      </div>
    </div>
  );
}
