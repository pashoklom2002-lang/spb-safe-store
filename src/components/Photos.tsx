import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import facility1 from "@/assets/facility-1.jpg";
import facility2 from "@/assets/facility-2.jpg";
import facility3 from "@/assets/facility-3.jpg";
import facility4 from "@/assets/facility-4.jpg";

const photos = [
  { src: facility1, alt: "Контейнеры на площадке" },
  { src: facility2, alt: "Ровные ряды" },
  { src: facility3, alt: "Широкий подъезд" },
  { src: facility4, alt: "Кладовка изнутри" },
];

export const Photos = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (index: number) => {
    setCurrentIndex(index);
    setCarouselOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCarousel = () => {
    setCarouselOpen(false);
    document.body.style.overflow = '';
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <section ref={ref} className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Наша площадка
          </h2>
          <p className={`text-center text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-500 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Как выглядит территория хранения
          </p>
          
          <div className={`grid grid-cols-2 gap-4 max-w-4xl mx-auto transition-all duration-500 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`relative aspect-[16/10] overflow-visible cursor-pointer transition-all duration-500 ease-out rounded-xl ${
                  hoveredIndex === index 
                    ? 'z-50 scale-[2] md:scale-[1.8]' 
                    : 'z-0'
                }`}
                style={{
                  transformOrigin: index % 2 === 0 ? 'left center' : 'right center'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openCarousel(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <span className="absolute bottom-4 left-4 text-white font-medium text-sm">
                    {photo.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Carousel */}
      {carouselOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeCarousel}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeCarousel(); }}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            className="w-full h-full flex items-center justify-center p-4 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          <p className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white text-lg font-medium">
            {photos[currentIndex].alt}
          </p>
        </div>
      )}
    </>
  );
};
