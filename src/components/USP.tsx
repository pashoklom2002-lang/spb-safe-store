import { MapPin, Truck, Navigation, Shield, FileCheck } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Асфальтированная территория",
  },
  {
    icon: Truck,
    title: "Заезд под фуру и манипулятор",
  },
  {
    icon: Navigation,
    title: "Прямой подъезд с КАД",
  },
  {
    icon: Shield,
    title: "Охрана 24/7 и камеры",
  },
  {
    icon: FileCheck,
    title: "Быстрое оформление — за 1 день",
  },
];

export const USP = () => {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Почему выбирают Шушары
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 min-w-[120px]"
            >
              <div className="bg-primary/10 p-4 rounded-full">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
