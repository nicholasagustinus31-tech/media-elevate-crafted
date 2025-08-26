import { useState, useEffect } from "react";

interface HeroSectionProps {
  images: string[];
  title?: string;
  autoSlide?: boolean;
  interval?: number;
}

const HeroSection = ({ 
  images, 
  title, 
  autoSlide = true, 
  interval = 4000 
}: HeroSectionProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoSlide, images.length, interval]);

  return (
    <section className="hero-section">
      <div className="relative h-[60vh] overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero ${index + 1}`}
            className={`hero-image absolute top-0 left-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Slide indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        )}
      </div>
      
      {title && (
        <div className="container mx-auto px-4 py-16">
          <h1 className="page-title fade-in">{title}</h1>
        </div>
      )}
    </section>
  );
};

export default HeroSection;