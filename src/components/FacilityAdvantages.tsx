import { Lock, Thermometer, Clock, Cctv, Ruler, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const advantages = [
  {
    icon: Lock,
    title: "Охраняемая территория",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Thermometer,
    title: "Теплые и освещенные контейнеры",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Clock,
    title: "Доступ 24/7",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Cctv,
    title: "Личный доступ к камерам",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Ruler,
    title: "Гибкие условия аренды",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Truck,
    title: "Удобный заезд и разгрузка",
    gradient: "from-primary/20 to-primary/5",
  },
];

export const FacilityAdvantages = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-16 text-foreground text-center transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Преимущества
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 border border-border hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_hsl(84_100%_64%_/_0.3)] hover:border-primary/50 transition-all duration-300 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${advantage.gradient} transition-transform duration-200 ease-out hover:scale-105 flex-shrink-0`}
                >
                  <advantage.icon
                    className="w-8 h-8 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-card-foreground leading-tight">
                  {advantage.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
