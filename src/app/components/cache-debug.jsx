"use client";

import { useState, useEffect } from "react";
import { getCacheInfo, clearSessionizeCache } from "@/lib/sessionize-cache";

/**
 * Cache Debug Component
 * Shows cache status and provides controls to manage the Sessionize cache
 * Only visible in development mode
 */
export default function CacheDebug() {
  const [cacheInfo, setCacheInfo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      updateCacheInfo();
    }
  }, []);

  const updateCacheInfo = () => {
    const info = getCacheInfo();
    setCacheInfo(info);
  };

  const handleClearCache = () => {
    clearSessionizeCache();
    updateCacheInfo();
    alert('Cache cleared! Refresh the page to fetch new data.');
  };

  // Don't render in production
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isVisible ? (
        <button
          onClick={() => setIsVisible(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
          title="Show Cache Debug Info"
        >
          🔍 Cache
        </button>
      ) : (
        <div className="bg-white border-2 border-purple-600 rounded-lg shadow-xl p-4 max-w-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-purple-900">Sessionize Cache</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {cacheInfo && (
            <div className="space-y-2 text-sm">
              {cacheInfo.exists ? (
                <>
                  <div>
                    <span className="font-semibold">Status:</span>{" "}
                    <span className={cacheInfo.isExpired ? "text-red-600" : "text-green-600"}>
                      {cacheInfo.isExpired ? "Expired" : "Active"}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Age:</span> {cacheInfo.ageInHours}h
                  </div>
                  <div>
                    <span className="font-semibold">Expires in:</span> {cacheInfo.expiresInHours}h
                  </div>
                  <div className="text-xs text-gray-600">
                    Cached: {new Date(cacheInfo.cachedAt).toLocaleString()}
                  </div>
                </>
              ) : (
                <div className="text-gray-600">No cache found</div>
              )}

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleClearCache}
                  className="w-full bg-red-500 text-white px-3 py-1.5 rounded hover:bg-red-600 transition-colors text-sm"
                >
                  Clear Cache
                </button>
                <button
                  onClick={updateCacheInfo}
                  className="w-full bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 transition-colors text-sm"
                >
                  Refresh Info
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

