'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[4/5] bg-muted rounded-2xl flex items-center justify-center border border-border">
        <span className="text-muted-foreground text-sm">No images available</span>
      </div>
    );
  }

  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="space-y-4">
      {/* Main Image Carousel */}
      <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden relative border border-border flex items-center justify-center group">
        <Image 
          src={images[selectedIndex]} 
          alt={`${title} - View ${selectedIndex + 1}`} 
          fill 
          className="object-cover transition-opacity duration-300"
          priority
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage} 
              className="absolute left-4 p-2.5 rounded-full bg-background/60 hover:bg-background/90 text-foreground backdrop-blur opacity-0 group-hover:opacity-100 transition-all shadow-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-4 p-2.5 rounded-full bg-background/60 hover:bg-background/90 text-foreground backdrop-blur opacity-0 group-hover:opacity-100 transition-all shadow-sm"
              aria-label="Next image"
            >
              <ChevronRight className="size-5" />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 p-2 rounded-full bg-background/30 backdrop-blur-md">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`size-2 rounded-full transition-all ${
                    selectedIndex === i ? 'bg-primary scale-110' : 'bg-primary-foreground/50 hover:bg-primary-foreground/80'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {images.map((img, i) => (
            <button 
              key={i} 
              onClick={() => setSelectedIndex(i)}
              className={`aspect-square rounded-xl relative overflow-hidden transition-all ${
                selectedIndex === i 
                  ? 'ring-2 ring-accent ring-offset-2 ring-offset-background opacity-100' 
                  : 'border border-border opacity-70 hover:opacity-100'
              }`}
            >
              <Image 
                src={img} 
                alt={`${title} thumbnail ${i + 1}`} 
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
