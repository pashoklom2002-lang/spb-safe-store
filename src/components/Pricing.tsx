import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    type: "20 футов",
    size: "6 × 2.4 × 2.6 м",
    price: "от 8 000 ₽",
    period: "месяц",
    features: [
      "33 м³ объём",
      "Освещение включено",
      "Круглосуточный доступ",
      "Видеонаблюдение",
      "Замок в комплекте",
    ],
    popular: false,
  },
  {
    type: "40 футов",
    size: "12 × 2.4 × 2.6 м",
    price: "от 14 000 ₽",
    period: "месяц",
    features: [
      "67 м³ объём",
      "Освещение включено",
      "Круглосуточный доступ",
      "Видеонаблюдение",
      "Замок в комплекте",
      "Больше места для товара",
    ],
    popular: true,
  },
];

export const Pricing = ({ onScrollToForm }: { onScrollToForm: () => void }) => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Тарифы и условия
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Выберите подходящий размер контейнера
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <span className="text-muted-foreground ml-2">/ {offer.period}</span>
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
                Арендовать
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
