"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SessionizeContext = createContext();

// Configuration for Sessionize endpoints
const SESSIONIZE_ENDPOINTS = {
  speakers: 'https://sessionize.com/api/v2/8yksjn7s/view/Speakers?under=True',
  schedule: 'https://sessionize.com/api/v2/8yksjn7s/view/GridSmart?under=True',
};

// Cache duration in milliseconds (24 hours)
const CACHE_DURATION = 24 * 60 * 60 * 1000;

// Local storage keys
const STORAGE_KEYS = {
  speakers: 'sessionize_speakers',
  schedule: 'sessionize_schedule',
  timestamp: 'sessionize_timestamp',
};

export function SessionizeProvider({ children }) {
  const [data, setData] = useState({
    speakers: null,
    schedule: null,
    loading: true,
  });

  useEffect(() => {
    const fetchAndCacheData = async () => {
      try {
        // Check if we have valid cached data
        const cachedTimestamp = localStorage.getItem(STORAGE_KEYS.timestamp);
        const now = Date.now();
        
        if (cachedTimestamp && (now - parseInt(cachedTimestamp)) < CACHE_DURATION) {
          // Use cached data
          const cachedSpeakers = localStorage.getItem(STORAGE_KEYS.speakers);
          const cachedSchedule = localStorage.getItem(STORAGE_KEYS.schedule);
          
          if (cachedSpeakers && cachedSchedule) {
            console.log('Using cached Sessionize data');
            setData({
              speakers: cachedSpeakers,
              schedule: cachedSchedule,
              loading: false,
            });
            return;
          }
        }

        // Fetch fresh data
        console.log('Fetching fresh Sessionize data');
        const [speakersResponse, scheduleResponse] = await Promise.all([
          fetch(SESSIONIZE_ENDPOINTS.speakers),
          fetch(SESSIONIZE_ENDPOINTS.schedule),
        ]);

        const [speakersHtml, scheduleHtml] = await Promise.all([
          speakersResponse.text(),
          scheduleResponse.text(),
        ]);

        // Cache the data
        localStorage.setItem(STORAGE_KEYS.speakers, speakersHtml);
        localStorage.setItem(STORAGE_KEYS.schedule, scheduleHtml);
        localStorage.setItem(STORAGE_KEYS.timestamp, now.toString());

        setData({
          speakers: speakersHtml,
          schedule: scheduleHtml,
          loading: false,
        });
      } catch (error) {
        console.error('Error fetching Sessionize data:', error);
        
        // Try to use cached data even if expired in case of error
        const cachedSpeakers = localStorage.getItem(STORAGE_KEYS.speakers);
        const cachedSchedule = localStorage.getItem(STORAGE_KEYS.schedule);
        
        if (cachedSpeakers && cachedSchedule) {
          console.log('Using cached data due to fetch error');
          setData({
            speakers: cachedSpeakers,
            schedule: cachedSchedule,
            loading: false,
          });
        } else {
          setData(prev => ({ ...prev, loading: false }));
        }
      }
    };

    fetchAndCacheData();
  }, []);

  return (
    <SessionizeContext.Provider value={data}>
      {children}
    </SessionizeContext.Provider>
  );
}

// Custom hook to use Sessionize data
export function useSessionize() {
  const context = useContext(SessionizeContext);
  if (context === undefined) {
    throw new Error('useSessionize must be used within a SessionizeProvider');
  }
  return context;
}

// Utility function to clear cache manually
export function clearSessionizeCache() {
  localStorage.removeItem(STORAGE_KEYS.speakers);
  localStorage.removeItem(STORAGE_KEYS.schedule);
  localStorage.removeItem(STORAGE_KEYS.timestamp);
  console.log('Sessionize cache cleared');
}

