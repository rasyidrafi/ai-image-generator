"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  width: number;
  height: number;
}

export function ImageDisplay({ imageUrl, isLoading, width, height }: ImageDisplayProps) {
  if (!imageUrl && !isLoading) return null;

  return (
    <div className="mt-8 relative">
      {isLoading ? (
        <div 
          className="bg-gray-100 rounded-lg flex items-center justify-center"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      ) : imageUrl ? (
        <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
          <Image
            src={imageUrl}
            alt="Generated image"
            fill
            className="rounded-lg object-cover"
            unoptimized
          />
        </div>
      ) : null}
    </div>
  );
}