import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    type: "20 ft",
    size: "14.8 м²",
    price: "от 6 000 ₽",
    period: "месяц",
    features: [
      "Для вещей и мебели",
      "Освещение включено",
      "Круглосуточный доступ",
      "Видеонаблюдение",
      "Замок в комплекте",
    ],
    popular: false,
  },
  {
    type: "40 ft",
    size: "29.7 м²",
    price: "от 10 000 ₽",
    period: "месяц",
    features: [
      "Для бизнеса и стройматериалов",
      "Освещение включено",
      "Круглосуточный доступ",
      "Видеонаблюдение",
      "Замок в комплекте",
      "Больше места для товара",
    ],
    popular: true,
  },
  {
    type: "Целая площадка",
    size: "от 1 000 м²",
    price: "Цена по запросу",
    period: "",
    features: [
      "Под логистику",
      "Собственные контейнеры",
      "Индивидуальные условия",
      "Охрана и видеонаблюдение",
      "Асфальтированная территория",
    ],
    popular: false,
  },
];

export const Pricing = ({ onScrollToForm }: { onScrollToForm: () => void }) => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Выберите свой контейнер
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Разные форматы для разных задач
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-card border-2 transition-all hover:shadow-card-hover ${
                offer.popular ? 'border-accent' : 'border-border'
              }`}
            >
              {offer.popular && (
                <div className="bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  Популярный выбор
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-card-foreground mb-2">{offer.type}</h3>
              <p className="text-muted-foreground mb-6">{offer.size}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{offer.price}</span>
                {offer.period && <span className="text-muted-foreground ml-2">/ {offer.period}</span>}
              </div>
              
              <ul className="space-y-3 mb-8">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  offer.popular 
                    ? 'bg-accent hover:bg-accent-hover text-accent-foreground' 
                    : 'bg-primary hover:bg-primary-hover text-primary-foreground'
                }`}
                onClick={onScrollToForm}
              >
                Уточнить наличие
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
