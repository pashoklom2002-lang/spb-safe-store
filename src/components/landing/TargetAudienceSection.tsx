import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TargetAudienceSectionProps {
  onOpenForm: () => void;
}

const audiences = [
  {
    title: "Продавцам на маркетплейсах",
    description: "Храните товарные запасы рядом с сортировочными центрами. Удобно для работы с Wildberries, Ozon, Яндекс.Маркет и другими площадками.",
  },
  {
    title: "Интернет-магазинам",
    description: "Организуйте складское хранение без аренды дорогого помещения. Доступ когда нужно для комплектации заказов.",
  },
  {
    title: "Компаниям с оборудованием",
    description: "Храните инструменты, стройматериалы, сезонное оборудование в надёжном месте.",
  },
  {
    title: "При переезде или ремонте",
    description: "Временное хранение вещей, мебели, техники на удобный для вас срок.",
  },
];

export const TargetAudienceSection = ({ onOpenForm }: TargetAudienceSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-foreground mb-12 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Кому подходит контейнерное хранение
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`bg-secondary/30 rounded-xl p-6 border-l-4 border-primary transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{audience.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-500 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <Button 
            onClick={onOpenForm}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold"
          >
            Узнать цены
          </Button>
        </div>
      </div>
    </section>
  );
};
