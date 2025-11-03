import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import facilityView from "@/assets/facility-view.jpg";
import facilityAccess from "@/assets/facility-access.jpg";
import containersCloseup from "@/assets/containers-closeup.jpg";
import container20ft from "@/assets/container-20ft.jpg";
import container40ft from "@/assets/container-40ft.jpg";
import heroContainers from "@/assets/hero-containers.jpg";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const photos = [
  { src: facilityView, alt: "Вид на площадку с контейнерами" },
  { src: facilityAccess, alt: "Удобный заезд на территорию" },
  { src: containersCloseup, alt: "Контейнеры крупным планом" },
  { src: container20ft, alt: "Контейнер 20 футов" },
  { src: container40ft, alt: "Контейнер 40 футов" },
  { src: heroContainers, alt: "Контейнеры на охраняемой площадке в Шушарах" },
];

export const Photos = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Как выглядит площадка
        </h2>
        <p className={`text-center text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Асфальт, охрана, видеонаблюдение. Заезд удобен для любой машины.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className={`aspect-[4/3] rounded-xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-[0_8px_30px_-4px_hsl(84_100%_64%_/_0.4)] transition-all duration-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              onClick={() => setSelectedImageIndex(index)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <p className={`text-center text-muted-foreground text-sm transition-all duration-500 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Адрес: Шушары, Курьерский проезд 1А (2 мин от КАДа, рядом с Лентой)
        </p>
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-5xl">
          <Carousel opts={{ startIndex: selectedImageIndex ?? 0 }}>
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  );
};
