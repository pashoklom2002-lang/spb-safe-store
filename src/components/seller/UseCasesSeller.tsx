import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Package, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Package,
    title: "Привёз из Китая → Разложил → Завёз на WB партиями",
    description: "Товар пришёл большой партией из Китая. Нужно разгрузить фуру, рассортировать SKU, подготовить маркировку. Контейнер — твоя операционная база: приезжаешь когда удобно, собираешь заказы, отвозишь на склад WB/Ozon по мере продаж.",
    visual: "Фура → Контейнер → WB",
  },
  {
    icon: Calendar,
    title: "Купил оптом → Храни 6-12 мес → Завозишь по мере продаж",
    description: "Закупил товар по выгодной цене, но не нужен весь объём сразу. Держишь основной запас в контейнере, завозишь на WB небольшими партиями. Экономишь на фулфилменте в 3 раза, товару ничего не будет (90% товаров не требуют тепла).",
    visual: "Паллеты → Хранение → Отгрузка",
  },
  {
    icon: TrendingUp,
    title: "Начал с 5м² → Вырос до 15м² → Взял второй контейнер",
    description: "Ниша выстрелила, объёмы растут. Не нужно искать новый склад — просто берёшь ещё один контейнер рядом. Один для детской одежды, второй для игрушек. Всё под рукой, всё под контролем.",
    visual: "5м² → 15м² → 30м²",
  },
];

export const UseCasesSeller = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Зачем селлеры снимают контейнеры?
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Три реальных сценария
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_hsl(84_100%_64%_/_0.3)] transition-all duration-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Visual representation */}
              <div className="bg-muted rounded-xl p-4 mb-6 flex items-center justify-center gap-2 text-primary font-bold">
                <useCase.icon className="w-5 h-5" />
                <span className="text-sm">{useCase.visual}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-4 leading-snug">
                {useCase.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {useCase.description}
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
              Узнай, какой сценарий подходит тебе
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
