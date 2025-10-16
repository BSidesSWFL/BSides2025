# Sessionize Cache System

## Overview

This implementation provides automatic caching of Sessionize API data in the browser's localStorage. When users first visit the site, all Sessionize data is fetched and cached locally for 8 hours, significantly improving performance on subsequent page loads.

## How It Works

### Initial Visit
1. When a user first visits the site, the `SessionizeProvider` checks localStorage for cached data
2. If no valid cache exists, it fetches data from both Sessionize endpoints:
   - Speakers: `https://sessionize.com/api/v2/8yksjn7s/view/Speakers`
   - Schedule: `https://sessionize.com/api/v2/8yksjn7s/view/GridSmart`
3. The fetched data is stored in localStorage with a timestamp
4. All components that need Sessionize data access it from the context

### Subsequent Visits
- If cached data exists and is less than 24 hours old, it's used immediately
- No API calls are made, resulting in instant page loads
- After 8 hours, the cache expires and fresh data is fetched

### Error Handling
- If API calls fail, the system attempts to use expired cached data as a fallback
- This ensures the site remains functional even during API outages

## Files Created

### Core System
- **`src/app/context/SessionizeProvider.jsx`**: React Context Provider that manages fetching and caching
- **`src/app/components/client-layout.jsx`**: Wrapper component to provide context to all pages
- **`src/lib/sessionize-cache.js`**: Utility functions for cache management

### Debug Tools (Development Only)
- **`src/app/components/cache-debug.jsx`**: Visual debug panel (only visible in development mode)

## Usage

### In Components
Use the `useSessionize` hook to access cached data:

```jsx
import { useSessionize } from "../context/SessionizeProvider";

export default function MyPage() {
  const { speakers, schedule, loading } = useSessionize();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: speakers }} />
  );
}
```

### Manual Cache Management

```javascript
import { clearSessionizeCache, getCacheInfo, forceRefresh } from "@/lib/sessionize-cache";

// Clear the cache
clearSessionizeCache();

// Get cache information
const info = getCacheInfo();
console.log(info);
// Output: {
//   exists: true,
//   age: 3600000,
//   ageInHours: "1.00",
//   expiresIn: 82800000,
//   expiresInHours: "23.00",
//   isExpired: false,
//   cachedAt: "2025-01-15T10:30:00.000Z"
// }

// Force a cache refresh
forceRefresh(); // Clears cache and reloads page
```

## Debug Panel (Development)

In development mode, a "🔍 Cache" button appears in the bottom-right corner showing:
- Cache status (Active/Expired)
- Cache age in hours
- Time until expiration
- Cache timestamp
- Buttons to clear cache or refresh info

## Configuration

### Cache Duration
Default: 8 hours. To change, edit `CACHE_DURATION` in `SessionizeProvider.jsx`:

```javascript
const CACHE_DURATION = 8 * 60 * 60 * 1000; // milliseconds
```

### Adding New Endpoints
To cache additional Sessionize endpoints, update `SESSIONIZE_ENDPOINTS` in `SessionizeProvider.jsx`:

```javascript
const SESSIONIZE_ENDPOINTS = {
  speakers: 'https://sessionize.com/api/v2/8yksjn7s/view/Speakers?under=True',
  schedule: 'https://sessionize.com/api/v2/8yksjn7s/view/GridSmart?under=True',
  newEndpoint: 'https://sessionize.com/api/v2/8yksjn7s/view/NewView?under=True',
};
```

## Benefits

1. **Faster Page Loads**: After initial visit, Sessionize data loads instantly
2. **Reduced API Calls**: Only fetches fresh data every 8 hours
3. **Offline Capability**: Site remains functional with cached data during API outages
4. **Better User Experience**: No loading spinners after initial cache
5. **Cost Savings**: Fewer API requests to Sessionize

## Browser Support

Works in all modern browsers that support:
- localStorage API
- React Hooks
- ES6+ JavaScript

## Limitations

- Cache is per-browser/device (not synchronized across devices)
- Users in private/incognito mode won't retain cache between sessions
- localStorage has a typical limit of 5-10MB per domain
- Cache is cleared if user manually clears browser data

## Testing

To test the cache system:

1. Visit the site and check console for "Fetching fresh Sessionize data"
2. Reload the page - console should show "Using cached Sessionize data"
3. Use the debug panel to view cache status
4. Clear cache and reload to force a fresh fetch

## Troubleshooting

### Cache Not Working
- Check browser console for errors
- Verify localStorage is enabled in browser
- Check if browser is in private/incognito mode

### Stale Data
- Clear cache manually using debug panel or browser dev tools
- Or wait for 8-hour expiration

### Performance Issues
- If localStorage is full, clear other site data
- Reduce CACHE_DURATION if updates are needed more frequently

