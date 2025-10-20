import { MapPin, Truck, Navigation, CheckCircle, Shield, Clock } from "lucide-react";
import facilityImage from "@/assets/facility-view.jpg";

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

export const LocationAdvantage = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-foreground text-center">
          Самая удобная площадка в Шушарах
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img 
              src={facilityImage} 
              alt="Площадка хранения контейнеров в Шушарах"
              className="w-full h-[500px] object-cover"
            />
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
