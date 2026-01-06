import { Lock, Lightbulb, Clock, Cctv, Ruler, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const advantages = [
  {
    icon: Lock,
    title: "Охраняемая территория",
    gradient: "from-primary/20 to-primary/5",
    tooltip: "На территории постоянно дежурит охрана 24/7.\nВъезд через шлагбаум по спискам и пропускам.",
  },
  {
    icon: Lightbulb,
    title: "Сухие и освещённые контейнеры",
    gradient: "from-primary/20 to-primary/5",
    tooltip: "Контейнеры сухие, с естественной вентиляцией.\nВ каждом контейнере есть освещение и розетка 220V.",
  },
  {
    icon: Clock,
    title: "Доступ 24/7",
    gradient: "from-primary/20 to-primary/5",
    tooltip: "Вы можете приезжать в любое время без согласований.\nСразу вписываем ваш номер или автомобиль в список охраны.\nПо запросу добавляем доступ для других людей.",
  },
  {
    icon: Cctv,
    title: "Личный доступ к камерам",
    gradient: "from-primary/20 to-primary/5",
    tooltip: "Вся площадка под круглосуточным видеонаблюдением.\nУ вас есть личный онлайн-доступ к камерам.",
  },
  {
    icon: Ruler,
    title: "Гибкие условия аренды",
    gradient: "from-primary/20 to-primary/5",
    tooltip: "Срок аренды — от 1 месяца.\nВозможна индивидуальная договорённость и дробление последнего месяца.\nСкидки при оплате за 3, 6 или 12 месяцев.",
  },
  {
    icon: Truck,
    title: "Удобный заезд и разгрузка",
    gradient: "from-primary/20 to-primary/5",
    tooltip: "Широкий проезд 4 метра.\nПарковка для грузовых авто.\nМожно заехать на фуре вплотную к контейнеру и разгрузиться.",
  },
];

export const FacilityAdvantages = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
              className={`relative bg-card rounded-2xl p-8 border border-border hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_hsl(84_100%_64%_/_0.3)] hover:border-primary/50 transition-all duration-300 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
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
              
              {/* Hover tooltip */}
              <div
                className={`absolute bottom-4 left-4 right-4 bg-zinc-900 text-white text-sm p-4 rounded-xl z-10 transition-all duration-300 ease-out ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {advantage.tooltip.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? "mt-1" : ""}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};