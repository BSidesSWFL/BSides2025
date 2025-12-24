import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    // Read photos from the local public/BSidesSWFL2025 directory
    const photosDir = join(process.cwd(), 'public', 'BSidesSWFL2025');
    const files = await readdir(photosDir);
    
    // Filter to only include image files (jpg, jpeg, png) and exclude HEIC, MP4, etc.
    const imageExtensions = /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i;
    const imageFiles = files
      .filter(file => imageExtensions.test(file))
      .sort() // Sort alphabetically for consistent ordering
      .map(file => `/BSidesSWFL2025/${file}`); // Convert to public URL paths

    if (imageFiles.length === 0) {
      return NextResponse.json({ 
        photos: [],
        message: 'No image files found in BSidesSWFL2025 directory.'
      });
    }

    return NextResponse.json({ photos: imageFiles });
  } catch (error) {
    console.error('Error reading photos directory:', error);
    
    return NextResponse.json({ 
      photos: [],
      error: error.message,
      message: 'Failed to read photos from local directory.'
    }, { status: 500 });
  }
}

