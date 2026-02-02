import { useState, useCallback, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

import facilityNew1 from "@/assets/facility-new-1.jpg";
import facilityNew2 from "@/assets/facility-new-2.jpg";
import facilityNew3 from "@/assets/facility-new-3.jpg";
import facilityNew4 from "@/assets/facility-new-4.jpg";
import facilityNew5 from "@/assets/facility-new-5.jpg";
import facilityNew6 from "@/assets/facility-new-6.jpg";
import facilityNew7 from "@/assets/facility-new-7.jpg";
import facilityNew8 from "@/assets/facility-new-8.jpg";
import facilityNew9 from "@/assets/facility-new-9.jpg";
import facilityNew10 from "@/assets/facility-new-10.jpg";

// Order: 8, 4, 9, 7, 10, 5, 6, 1, 2, 3
const photos = [
  { src: facilityNew8, alt: "Широкий подъезд для фуры" },
  { src: facilityNew4, alt: "Удобный заезд" },
  { src: facilityNew9, alt: "Видеонаблюдение на территории" },
  { src: facilityNew7, alt: "Чистый контейнер изнутри" },
  { src: facilityNew10, alt: "Электричество в контейнере" },
  { src: facilityNew5, alt: "Контейнеры зимой — товар сухой" },
  { src: facilityNew6, alt: "Внутри контейнера — место для паллет" },
  { src: facilityNew1, alt: "Ряды контейнеров" },
  { src: facilityNew2, alt: "Контейнеры снаружи" },
  { src: facilityNew3, alt: "Проход между контейнерами" },
];

// Placeholders for missing photos
const placeholders = [
  "Фура подъезжает к контейнеру вплотную",
  "Внутри контейнера с паллетами и коробками",
  "Ночное фото площадки (показать доступ 24/7)",
  "Скриншот приложения с камерами видеонаблюдения",
  "Селлер грузит коробки в фуру",
];

export const PhotoTour = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselOpen) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') closeCarousel();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [carouselOpen]);

  return (
    <>
      <section ref={ref} className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Посмотри, как это выглядит вживую
          </h2>
          <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Фото-тур по площадке
          </p>
          
          <div className={`relative transition-all duration-500 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background shadow-lg rounded-full p-2 md:p-3 transition-all duration-200 hover:scale-110"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
            </button>
            
            <button
              onClick={scrollNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background shadow-lg rounded-full p-2 md:p-3 transition-all duration-200 hover:scale-110"
              aria-label="Следующее фото"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden mx-8 md:mx-16" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {photos.map((photo, index) => {
                  const isActive = index === selectedIndex;
                  const isHovered = hoveredIndex === index;
                  
                  return (
                    <div
                      key={index}
                      className="flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0 px-2 md:px-4"
                    >
                      <div
                        className={`relative aspect-video overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
                          isActive 
                            ? 'scale-100 opacity-100 shadow-2xl' 
                            : 'scale-90 opacity-60'
                        } ${isHovered && isActive ? 'scale-105' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => openCarousel(index)}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-300"
                          style={{
                            transform: isHovered && isActive ? 'scale(1.1)' : 'scale(1)'
                          }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl transition-opacity duration-300 ${
                          isHovered && isActive ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <span className="absolute bottom-4 left-4 text-white font-medium text-sm md:text-base">
                            {photo.alt}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Перейти к фото ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center mt-10 transition-all duration-500 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="tel:+79956062273">
                Хочешь посмотреть вживую? → Записаться на экскурсию
              </a>
            </Button>
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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
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
              className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
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
