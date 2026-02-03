import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Package, Calendar, TrendingUp, Truck, ArrowRightLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Truck,
    title: "Операционный хаб",
    subtitle: "Приёмка → Сортировка → Отгрузка",
    description: "Принимаете поставку, готовите товар, отправляете частями. Гибкий доступ для оперативной работы.",
  },
  {
    icon: Package,
    title: "Буферный запас",
    subtitle: "Основной товар → Резерв → По мере необходимости",
    description: "Держите запас отдельно от основных операций. Забираете когда нужно, масштабируете без обязательств.",
  },
  {
    icon: Plus,
    title: "Расширение базы",
    subtitle: "Начали с 5м² → Выросли до 15м² → Добавили второй",
    description: "Масштабируйтесь без поиска нового места. Добавляйте площадь рядом по мере роста.",
  },
];

export const CapabilityOverview = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-12 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Три способа использовать пространство
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_hsl(84_100%_64%_/_0.3)] transition-all duration-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Visual representation */}
              <div className="bg-muted rounded-xl p-4 mb-6 flex items-center justify-center gap-3">
                <capability.icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-bold text-primary">{capability.title}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                {capability.subtitle}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-500 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold"
            asChild
          >
            <a
              href="https://t.me/skladno_tut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Выберите свой сценарий
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
