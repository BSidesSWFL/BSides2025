/**
 * Utility functions for photo gallery operations
 */

/**
 * Shuffle array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Duplicate photos array for seamless infinite scroll
 * @param {Array} arr - Array to duplicate
 * @param {number} times - Number of times to duplicate (default: 3)
 * @returns {Array} Duplicated array
 */
export function duplicatePhotos(arr, times = 3) {
  return Array(times).fill(arr).flat();
}

/**
 * Split photos equally into three arrays for each column
 * @param {Array} allPhotos - All photos to split
 * @returns {Array<Array>} Array containing three arrays of photos
 */
export function splitPhotosEqually(allPhotos) {
  const totalPhotos = allPhotos.length;
  const photosPerColumn = Math.floor(totalPhotos / 3);
  const remainder = totalPhotos % 3;

  // Calculate start and end indices for each column
  let start = 0;
  const columns = [];

  for (let i = 0; i < 3; i++) {
    // Distribute remainder photos to first columns
    const count = photosPerColumn + (i < remainder ? 1 : 0);
    const columnPhotos = allPhotos.slice(start, start + count);
    // Shuffle each column's photos
    columns.push(shuffleArray(columnPhotos));
    start += count;
  }

  return columns;
}

/**
 * Fetch photos from the API
 * @returns {Promise<Array>} Array of photo URLs
 */
export async function fetchPhotos() {
  try {
    const response = await fetch('/api/photos');
    if (response.ok) {
      const data = await response.json();
      if (data.photos && data.photos.length > 0) {
        return data.photos;
      }
    }
  } catch (error) {
    console.error("Error fetching photos:", error);
  }

  return [];
}
