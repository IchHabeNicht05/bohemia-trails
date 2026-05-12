"use client";

import { useState } from "react";
import Image from "next/image";

interface TourImage {
  url: string;
  portrait: boolean;
}

export default function TourGallery({ images }: { images: TourImage[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [isFading, setIsFading] = useState(false);

  // Funkce pro plynulé prolnutí fotek při kliknutí
  const handleImageChange = (img: TourImage) => {
    if (img.url === activeImage.url) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveImage(img);
      setIsFading(false);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center space-y-6 w-full">
      <div 
        className={`relative rounded-3xl overflow-hidden shadow-lg border border-stone-200 transition-all duration-700 ease-in-out bg-stone-100 flex-shrink-0 ${
          activeImage.portrait 
            ? "h-[450px] md:h-[600px] w-[80%] md:w-[450px]" // Rozměry pro fotku na výšku
            : "aspect-video w-full"               // Rozměry pro fotku na šířku
        }`}
      >
        <Image
          src={activeImage.url}
          alt="Active tour image"
          fill
          className={`object-cover transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`} 
          priority
        />
      </div>

      {/* Náhledy */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-3 w-full">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(img)}
            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              activeImage.url === img.url ? "border-emerald-500 scale-95 opacity-100" : "border-transparent hover:border-emerald-200 opacity-70 hover:opacity-100"
            }`}
          >
            <Image src={img.url} alt="Thumbnail" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}