import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check, X, AlertCircle } from "lucide-react";

interface ComparisonTableProps {
  onScrollToForm: () => void;
}

const comparisonData = [
  {
    criteria: "Цена 15м²",
    fulfillment: "~25 000₽/мес",
    warmStorage: "~18 000₽/мес",
    skladnoTut: "8 000₽/мес",
    highlight: true,
  },
  {
    criteria: "Доступ",
    fulfillment: "По графику WB, очереди",
    warmStorage: "8:00-20:00 будни",
    skladnoTut: "24/7 без очередей",
    highlight: true,
  },
  {
    criteria: "Подъезд фуры",
    fulfillment: "Не всегда удобно",
    warmStorage: "Не на всех складах",
    skladnoTut: "Вплотную к двери",
    highlight: true,
  },
  {
    criteria: "Контроль товара",
    fulfillment: "Нет доступа",
    warmStorage: "Общий склад",
    skladnoTut: "Свой замок, камеры онлайн",
    highlight: true,
  },
  {
    criteria: "Отопление",
    fulfillment: "Да (часто не нужно)",
    warmStorage: "Да (переплата)",
    skladnoTut: "Нет (90% товаров не требуют)",
    highlight: false,
  },
  {
    criteria: "Гибкость срока",
    fulfillment: "Долгие договора",
    warmStorage: "От 3-6 мес",
    skladnoTut: "От 1 месяца",
    highlight: true,
  },
];

export const ComparisonTable = ({ onScrollToForm }: ComparisonTableProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Контейнер vs Фулфилмент WB vs Тёплый склад
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Что выгоднее?
        </p>

        {/* Desktop Table */}
        <div className={`hidden md:block max-w-5xl mx-auto mb-8 transition-all duration-500 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Критерий</th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">
                    Фулфилмент WB
                  </th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">
                    Тёплый склад
                  </th>
                  <th className="text-center p-4 font-semibold text-primary bg-primary/10">
                    Складно Тут ✅
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="p-4 font-medium text-foreground">{row.criteria}</td>
                    <td className="text-center p-4 text-muted-foreground">{row.fulfillment}</td>
                    <td className="text-center p-4 text-muted-foreground">{row.warmStorage}</td>
                    <td className="text-center p-4 text-primary font-medium bg-primary/5">
                      {row.skladnoTut}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className={`md:hidden space-y-4 mb-8 transition-all duration-500 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {comparisonData.map((row, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-4">
              <h4 className="font-semibold text-foreground mb-3">{row.criteria}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Фулфилмент WB:</span>
                  <span className="text-muted-foreground">{row.fulfillment}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Тёплый склад:</span>
                  <span className="text-muted-foreground">{row.warmStorage}</span>
                </div>
                <div className="flex justify-between items-center bg-primary/10 rounded-lg p-2 -mx-2">
                  <span className="text-primary font-medium">Складно Тут:</span>
                  <span className="text-primary font-bold">{row.skladnoTut}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className={`max-w-3xl mx-auto mb-8 transition-all duration-500 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="bg-muted rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground text-sm">
              <strong>💡 90% товаров не требуют тепла:</strong> одежда, обувь, электроника, игрушки, посуда, косметика (кроме жидкой). Зачем платить в 3 раза больше?
            </p>
          </div>
        </div>

        <div className={`text-center transition-all duration-500 ease-out delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold"
            onClick={onScrollToForm}
          >
            Хватит переплачивать → Забронировать контейнер
          </Button>
        </div>
      </div>
    </section>
  );
};
