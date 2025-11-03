import { Truck, Shield, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import facilityImage from "@/assets/facility-view.jpg";
import heroImage from "@/assets/hero-containers.jpg";
import containersCloseup from "@/assets/containers-closeup.jpg";
import facilityAccess from "@/assets/facility-access.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const features = [
  {
    icon: Truck,
    title: "Подъезд вплотную",
  },
  {
    icon: CheckCircle,
    title: "Асфальт без грязи",
  },
  {
    icon: Shield,
    title: "Охрана 24/7",
  },
  {
    icon: Clock,
    title: "Доступ круглосуточно",
  },
];

const galleryImages = [
  {
    image: facilityImage,
    alt: "Площадка хранения контейнеров в Шушарах",
  },
  {
    image: facilityAccess,
    alt: "Удобный подъезд к территории хранения",
  },
  {
    image: containersCloseup,
    alt: "20 и 40-футовые контейнеры крупным планом",
  },
  {
    image: heroImage,
    alt: "Контейнерная площадка с освещением и охраной",
  },
];

export const LocationAdvantage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold mb-16 text-foreground text-center transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Самая удобная площадка в Шушарах
        </h2>
        
        <div className="grid lg:grid-cols-[70%_30%] gap-6 max-w-7xl mx-auto items-start">
          <div className={`relative transition-all duration-500 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((item, index) => (
                  <CarouselItem key={index}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div 
                          className="rounded-3xl overflow-hidden shadow-card cursor-pointer hover:shadow-[0_8px_30px_-4px_hsl(84_100%_64%_/_0.4)] transition-all duration-300 ease-out"
                          onClick={() => setSelectedImage(index)}
                        >
                          <img 
                            src={item.image} 
                            alt={item.alt}
                            className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-300 ease-out"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl w-full p-0 bg-background">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {galleryImages.map((dialogItem, dialogIndex) => (
                              <CarouselItem key={dialogIndex}>
                                <div className="p-4">
                                  <img 
                                    src={dialogItem.image} 
                                    alt={dialogItem.alt}
                                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div className="grid grid-cols-4 lg:grid-cols-1 gap-4 lg:space-y-2">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`text-center group transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-3 group-hover:from-primary/30 group-hover:to-primary/10 group-hover:scale-105 transition-all duration-200 ease-out">
                  <feature.icon className="w-8 h-8 text-primary transition-transform duration-200 ease-out group-hover:scale-105" strokeWidth={1.5} />
                </div>
                <h3 className="text-xs lg:text-sm font-medium text-foreground leading-tight">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
