import { MapPin, Truck, Navigation, Shield, FileCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Почему выбирают Шушары
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center gap-3 min-w-[120px] transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 p-4 rounded-full transition-transform duration-200 ease-out hover:scale-110">
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
