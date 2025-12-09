import { useState, useEffect } from "react";

interface SlideshowProps {
  images: string[];
  interval?: number; // in milliseconds
  aspectRatio?: string;
  className?: string;
  children?: (currentIndex: number) => React.ReactNode;
}

export function Slideshow({ 
  images, 
  interval = 3000, 
  aspectRatio = "4/3",
  className = "",
  children 
}: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div 
      className={`w-full rounded-2xl relative overflow-hidden shadow-sm ${className}`}
      style={{ aspectRatio }}
    >
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={image} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-contain"
          />
        </div>
      ))}

      {/* Optional children content overlay */}
      {children && (
        <div className="absolute inset-0 z-10">
          {children(currentIndex)}
        </div>
      )}

      {/* Carousel Indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
