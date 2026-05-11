"use client";

import { useState } from "react";
import Image from "next/image";

export default function TourGallery({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Hlavní velká fotka */}
      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-md border border-stone-100">
        <Image
          src={activeImage || "/Jizerky.jpg"}
          alt="Tour gallery main image"
          fill
          className="object-cover transition-all duration-500"
          priority
        />
      </div>

      {/* Náhledy (Thumbnails) */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(img)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                activeImage === img ? "border-emerald-500 scale-95" : "border-transparent hover:border-emerald-200"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}