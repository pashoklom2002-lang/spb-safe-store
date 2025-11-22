import { Cctv, Thermometer, Clock, FileText, Ruler, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const advantages = [
  {
    icon: Cctv,
    title: "Охраняемая территория",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Thermometer,
    title: "Тёплые, сухие и освещённые контейнеры",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Clock,
    title: "Доступ 24/7",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: FileText,
    title: "Быстрое оформление",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Ruler,
    title: "Разные размеры контейнеров",
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
    <section ref={ref} className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2
          className={`text-2xl md:text-4xl font-bold mb-12 text-foreground text-center transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Преимущества площадки
        </h2>

        <div
          className={`max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-500 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border rounded-xl p-4 h-full hover:shadow-[0_8px_30px_-4px_hsl(84_100%_64%_/_0.3)] hover:border-primary/50 transition-all duration-300 ease-out hover:-translate-y-1">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${advantage.gradient} mb-3 group-hover:scale-110 transition-transform duration-300 ease-out`}
                >
                  <advantage.icon
                    className="w-5 h-5 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-card-foreground leading-snug">
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
