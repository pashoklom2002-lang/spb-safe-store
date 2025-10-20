import { MapPin, Truck, Navigation, CheckCircle } from "lucide-react";
import facilityImage from "@/assets/facility-view.jpg";
import heroImage from "@/assets/hero-containers.jpg";
import containersCloseup from "@/assets/containers-closeup.jpg";
import facilityAccess from "@/assets/facility-access.jpg";

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
];

const galleryItems = [
  {
    image: facilityImage,
    alt: "Вид на площадку хранения контейнеров в дневное время",
    title: "Охраняемая площадка",
    description: "Территория под видеонаблюдением 24/7"
  },
  {
    image: containersCloseup,
    alt: "20 и 40-футовые контейнеры крупным планом",
    title: "Контейнеры 20 и 40 футов",
    description: "Герметичные контейнеры с освещением"
  },
  {
    image: facilityAccess,
    alt: "Удобный подъезд к территории хранения",
    title: "Удобный подъезд",
    description: "Асфальтированная площадка для погрузки"
  },
  {
    image: heroImage,
    alt: "Контейнерная площадка с освещением и охраной",
    title: "Освещение и безопасность",
    description: "Уличное освещение и контроль доступа"
  }
];

export const LocationAdvantage = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Площадка в Шушарах
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Удобно. Асфальт. Без грязи. Безопасно.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mb-12 text-center">
          <p className="text-muted-foreground">
            Асфальт, охрана, освещение. Подъезд вплотную к контейнеру — удобно для разгрузки.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all group"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
