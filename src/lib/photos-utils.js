/**
 * Utility functions for photo gallery operations
 */

export const STATIC_PHOTOS = [
  '11-14_Workshop 1.jpg',
  '11-14_Workshop 2.jpg',
  '11-14_Workshop 3.jpg',
  '11-14_Workshop 4.jpg',
  '20251115_070219.jpg',
  '20251115_070223.jpg',
  '20251115_081441.jpg',
  '20251115_081510.jpg',
  '20251115_081543.jpg',
  '20251115_081716.jpg',
  '20251115_081733.jpg',
  '20251115_081739.jpg',
  '20251115_084854.jpg',
  '20251115_090538.jpg',
  '20251115_090541.jpg',
  '20251115_090602.jpg',
  '20251115_090604.jpg',
  '20251115_090712.jpg',
  '20251115_090727.jpg',
  '20251115_091429.jpg',
  '20251115_091442.jpg',
  '20251115_091448.jpg',
  '20251115_094618.jpg',
  '20251115_105108.jpg',
  '20251115_111918.jpg',
  '20251115_124427.jpg',
  '20251115_124443.jpg',
  '20251115_130004.jpg',
  '20251115_142046.jpg',
  '20251115_142055.jpg',
  '20251115_142056.jpg',
  '20251115_150357.jpg',
  '20251115_150746.jpg',
  '20251115_154135.jpg',
  '20251115_161214.jpg',
  '20251115_161226.jpg',
  '20251115_161327.jpg',
  'IMG_3666.JPG',
  'IMG_3667.JPG',
  'IMG_3669.JPG',
  'IMG_3671.JPG',
  'IMG_3672.JPG',
  'IMG_6108.jpg',
  'IMG_6109.jpg',
  'IMG_6110.jpg',
  'IMG_6111.jpg',
  'IMG_6112.jpg',
  'IMG_6113.jpg',
  'IMG_6114.jpg',
  'IMG_6116.jpg',
  'IMG_6117.jpg',
  'IMG_6118.jpg',
  'IMG_6119.jpg',
  'IMG_6120.jpg',
  'IMG_6121.jpg',
  'IMG_6122.jpg',
  'IMG_6123.jpg',
  'IMG_6124.jpg',
  'IMG_6125.jpg',
  'IMG_6126.jpg',
  'IMG_6127.jpg',
  'IMG_6128.jpg',
  'IMG_6129.jpg',
  'IMG_6130.jpg',
  'IMG_6131.jpg',
  'IMG_6132.jpg',
  'IMG_6133.jpg',
  'PXL_20251115_142324117.jpg',
  'PXL_20251115_142328845.jpg',
  'PXL_20251115_161458360.jpg',
  'PXL_20251115_161508091.jpg',
  'PXL_20251115_161511530.jpg',
  'PXL_20251115_161515011.jpg',
  'PXL_20251115_161631527.jpg',
  'PXL_20251115_211201571.jpg',
  'PXL_20251115_211203266.jpg',
  'PXL_20251115_211209870.jpg',
  'PXL_20251115_211216413.jpg',
  'PXL_20251115_215459673.jpg',
  'PXL_20251115_215506274.jpg',
  'PXL_20251115_215508645.jpg',
  'Saturday - Lobby 1.jpg',
  'Saturday - Lobby 2.jpg',
  'Saturday - Lobby 3.jpg',
  'Saturday - Opening Keynote.jpg',
  'Saturday 1.jpg',
  'Saturday 10.jpg',
  'Saturday 11.jpg',
  'Saturday 12.jpg',
  'Saturday 13.jpg',
  'Saturday 14.jpg',
  'Saturday 15.jpg',
  'Saturday 16.jpg',
  'Saturday 17.jpg',
  'Saturday 18.jpg',
  'Saturday 19.jpg',
  'Saturday 2.jpg',
  'Saturday 3.jpg',
  'Saturday 4.jpg',
  'Saturday 5.jpg',
  'Saturday 6.jpg',
  'Saturday 7.jpg',
  'Saturday 8.jpg',
  'Saturday 9.jpg',
  'Screenshot 2025-11-19 215808.jpg',
  'Screenshot 2025-11-19 215808.png'
];

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
 * Fetch photos (now static for Cloudflare compatibility)
 * @returns {Promise<Array>} Array of photo URLs
 */
export async function fetchPhotos() {
  // Simulate network delay slightly if needed, but instant is better
  return STATIC_PHOTOS.map(file => `/BSidesSWFL2025/${file}`);
}
