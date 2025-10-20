import { MapPin, Truck, Navigation, CheckCircle } from "lucide-react";

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

export const LocationAdvantage = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Локация — наш главный плюс
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Шушары. Удобно. Асфальт. Без грязи.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
      </div>
    </section>
  );
};
