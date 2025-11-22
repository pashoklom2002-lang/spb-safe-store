import { Truck, Shield, Clock, MapPin, Cctv, Lightbulb, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const advantages = [
  {
    icon: Shield,
    title: "Охраняемая территория",
    description: "",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Cctv,
    title: "Видеонаблюдение и доступ к камерам",
    description: "",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Lightbulb,
    title: "Теплые, сухие и освещенные контейнеры",
    description: "",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Truck,
    title: "Подъезд вплотную",
    description: "Удобный заезд для любого транспорта",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: CheckCircle,
    title: "Асфальт без грязи",
    description: "Чистая территория в любую погоду",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Clock,
    title: "Доступ круглосуточно",
    description: "Приезжайте в любое время",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: MapPin,
    title: "2 минуты от КАДа",
    description: "Удобное расположение рядом с развязкой",
    gradient: "from-primary/20 to-primary/5"
  },
];

export const FacilityAdvantages = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-2xl md:text-4xl font-bold mb-12 text-foreground text-center transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Преимущества площадки
        </h2>
        
        <div className={`max-w-6xl mx-auto transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {advantages.map((advantage, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="group h-full">
                    <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-[0_8px_30px_-4px_hsl(84_100%_64%_/_0.3)] hover:border-primary/50 transition-all duration-300 ease-out hover:-translate-y-1">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${advantage.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 ease-out`}>
                        <advantage.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-bold text-card-foreground mb-2">
                        {advantage.title}
                      </h3>
                      {advantage.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {advantage.description}
                        </p>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
