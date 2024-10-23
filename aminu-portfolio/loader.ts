"use client";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function myImageLoader({ src, width, quality }: ImageLoaderProps): string {
  // Check if the image is from Pexels, return as-is
  if (src.startsWith("https://images.pexels.com")) {
    return `${src}?w=${width}&q=${quality || 75}`;  // Add width and quality params
  }
  // For other images, construct the URL based on your domain
  return `https://gote-coffee-hub.com/${src}?w=${width}&q=${quality || 75}`;
}
