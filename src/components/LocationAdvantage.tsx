import { MapPin, Truck, Navigation, CheckCircle, Shield, Clock } from "lucide-react";
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
    title: "Заезд фуры, газели и легкового авто",
  },
  {
    icon: Navigation,
    title: "Можно подъехать вплотную к двери",
  },
  {
    icon: CheckCircle,
    title: "Асфальтированная территория",
  },
  {
    icon: CheckCircle,
    title: "Никакой грязи, слякоти и луж",
  },
  {
    icon: MapPin,
    title: "Быстрый доступ без пробок",
  },
  {
    icon: Shield,
    title: "Охрана и видеонаблюдение 24/7",
  },
  {
    icon: Clock,
    title: "Удобный заезд в любое время",
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
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((item, index) => (
                  <CarouselItem key={index}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div 
                          className="rounded-2xl overflow-hidden shadow-card cursor-pointer hover:shadow-hover transition-all"
                          onClick={() => setSelectedImage(index)}
                        >
                          <img 
                            src={item.image} 
                            alt={item.alt}
                            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
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

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
