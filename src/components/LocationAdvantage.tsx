import { Truck, Shield, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import facilityImage from "@/assets/facility-view.jpg";
import heroImage from "@/assets/hero-containers.jpg";
import containersCloseup from "@/assets/containers-closeup.jpg";
import facilityAccess from "@/assets/facility-access.jpg";
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

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-foreground text-center">
          Самая удобная площадка в Шушарах
        </h2>
        
        <div className="grid grid-cols-[70%_30%] gap-8 max-w-7xl mx-auto items-start">
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((item, index) => (
                  <CarouselItem key={index}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div 
                          className="rounded-3xl overflow-hidden shadow-card cursor-pointer hover:shadow-hover transition-all"
                          onClick={() => setSelectedImage(index)}
                        >
                          <img 
                            src={item.image} 
                            alt={item.alt}
                            className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-300"
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

          <div className="space-y-8 pt-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-3 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <feature.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-medium text-foreground leading-tight">
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
