/**
 * Utility functions for managing Sessionize cache
 */

const STORAGE_KEYS = {
  speakers: 'sessionize_speakers',
  schedule: 'sessionize_schedule',
  timestamp: 'sessionize_timestamp',
};

const CACHE_DURATION = 8 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Clears all Sessionize cached data from localStorage
 */
export function clearSessionizeCache() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.speakers);
    localStorage.removeItem(STORAGE_KEYS.schedule);
    localStorage.removeItem(STORAGE_KEYS.timestamp);
    console.log('Sessionize cache cleared successfully');
  }
}

/**
 * Gets information about the current cache
 * @returns {Object} Cache information
 */
export function getCacheInfo() {
  if (typeof window === 'undefined') {
    return null;
  }

  const timestamp = localStorage.getItem(STORAGE_KEYS.timestamp);
  if (!timestamp) {
    return {
      exists: false,
      age: null,
      expiresIn: null,
    };
  }

  const cacheAge = Date.now() - parseInt(timestamp);
  const expiresIn = CACHE_DURATION - cacheAge;

  return {
    exists: true,
    age: cacheAge,
    ageInHours: (cacheAge / (1000 * 60 * 60)).toFixed(2),
    expiresIn: expiresIn,
    expiresInHours: (expiresIn / (1000 * 60 * 60)).toFixed(2),
    isExpired: cacheAge >= CACHE_DURATION,
    cachedAt: new Date(parseInt(timestamp)).toISOString(),
  };
}

/**
 * Forces a cache refresh by clearing the cache
 * The next page load will fetch fresh data
 */
export function forceRefresh() {
  clearSessionizeCache();
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
}

