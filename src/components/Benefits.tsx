import { Sofa, Package2, Hammer, Wrench, Box, Tv, ShirtIcon, Dumbbell, ShoppingBag, Monitor } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const storageItems = [
  {
    icon: Sofa,
    title: "Мебель",
  },
  {
    icon: ShirtIcon,
    title: "Сезонные вещи",
  },
  {
    icon: Hammer,
    title: "Инструменты и стройматериалы",
  },
  {
    icon: Dumbbell,
    title: "Спортинвентарь",
  },
  {
    icon: Monitor,
    title: "Техника",
  },
  {
    icon: ShoppingBag,
    title: "Товары для e-commerce",
  },
];

export const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`mb-16 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground relative inline-block">
            Что часто хранят в контейнерах
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {storageItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-[0_6px_24px_-2px_hsl(0_0%_0%_/_0.6)] transition-all duration-300 ease-out border border-border ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 transition-transform duration-200 ease-out hover:scale-105">
                <item.icon className="w-12 h-12 text-primary stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
