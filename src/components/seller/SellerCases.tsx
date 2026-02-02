import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { User, Package, TrendingUp } from "lucide-react";

interface SellerCasesProps {
  onScrollToForm: () => void;
}

const cases = [
  {
    name: "Дмитрий",
    niche: "Детская одежда",
    marketplace: "WB",
    size: "15м²",
    before: "Платил 22к/мес за тёплый склад. Одежде тепло не нужно, но других вариантов не знал.",
    solution: "Переехал в Складно Тут за 8к/мес. Доступ 24/7, фура подъезжает — разгружаюсь за 20 минут.",
    after: "Экономлю 14к/мес = 168к/год. Маржа выросла на 7%. Товар в сохранности, ничего не портится.",
    icon: User,
  },
  {
    name: "Анна",
    niche: "Товары для дома",
    marketplace: "Ozon",
    size: "5м² → 15м²",
    before: "Квартира забита коробками, муж недоволен. Хранение на Ozon дорогое, нужна альтернатива.",
    solution: "Взяла 5м² на тест. Поняла, что удобно — расширилась до 15м². Теперь держу основной запас здесь.",
    after: "Out-of-stock снизился с 15% до 5%. Выручка +30%, потому что товар всегда в наличии.",
    icon: Package,
  },
  {
    name: "Сергей",
    niche: "Электроника",
    marketplace: "WB",
    size: "30м²",
    before: "Закупал товар из Китая большими партиями. Фулфилмент WB съедал всю маржу.",
    solution: "Контейнер 30м² — привожу товар, раскладываю, завожу на WB партиями по мере продаж.",
    after: "Экономлю 26к/мес = 312к/год. Могу закупать оптом по выгодной цене, маржа +12%.",
    icon: TrendingUp,
  },
];

export const SellerCases = ({ onScrollToForm }: SellerCasesProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Что говорят селлеры?
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Реальные цифры экономии
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <caseItem.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">👤 {caseItem.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    🏷️ {caseItem.niche}, {caseItem.marketplace}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    📦 Снимает: {caseItem.size}
                  </p>
                </div>
              </div>

              {/* Story */}
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">БЫЛО:</p>
                  <p className="text-muted-foreground">{caseItem.before}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">РЕШЕНИЕ:</p>
                  <p className="text-muted-foreground">{caseItem.solution}</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="font-semibold text-primary mb-1">СТАЛО:</p>
                  <p className="text-foreground">{caseItem.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-500 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold"
            onClick={onScrollToForm}
          >
            Ты следующий? → Забронировать контейнер
          </Button>
        </div>
      </div>
    </section>
  );
};
