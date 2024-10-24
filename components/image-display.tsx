"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
}

export function ImageDisplay({ imageUrl, isLoading }: ImageDisplayProps) {
  if (!imageUrl && !isLoading) return null;

  return (
    <div className="mt-8 relative">
      {isLoading ? (
        <div className="w-[512px] h-[512px] bg-gray-100 rounded-lg flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      ) : imageUrl ? (
        <div className="relative w-[512px] h-[512px]">
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