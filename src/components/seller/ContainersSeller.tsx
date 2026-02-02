import { Button } from "@/components/ui/button";
import { Check, Star, Hand } from "lucide-react";
import container20ft from "@/assets/container-20ft.jpg";
import container40ft from "@/assets/container-40ft.jpg";
import container6mHover from "@/assets/container-6m-hover.png";
import container15mHover from "@/assets/container-15m-hover.png";
import container30mHover from "@/assets/container-30m-hover.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ContainersSellerProps {
  onScrollToForm: () => void;
}

const containers = [
  {
    size: "5 м²",
    name: "Мини-склад",
    price: "5 000₽",
    priceYear: "4 000₽",
    image: container20ft,
    hoverImage: container6mHover,
    features: [
      "Вмещает: ~20 коробок или 4 европаллеты",
      "Для кого: Микро-селлер, тестируешь нишу",
      "Экономия: vs фулфилмент ~5к/мес = 60к/год",
    ],
    popular: false,
    caseStudy: null,
  },
  {
    size: "15 м²",
    name: "Стандарт для селлера",
    price: "8 000₽",
    priceYear: "6 700₽",
    image: container20ft,
    hoverImage: container15mHover,
    features: [
      "Вмещает: ~80 коробок или 15 европаллет",
      "Для кого: Основной товарный запас, 1-2 категории",
      "Экономия: vs фулфилмент ~17к/мес = 204к/год",
    ],
    popular: true,
    caseStudy: {
      name: "Дмитрий",
      niche: "детская одежда WB",
      text: "Переехал с тёплого склада за 22к. Экономлю 14к/мес = 168к/год. Одежде тепло не нужно, всё сухое.",
    },
  },
  {
    size: "30 м²",
    name: "Для роста",
    price: "19 000₽",
    priceYear: "15 200₽",
    image: container40ft,
    hoverImage: container30mHover,
    features: [
      "Вмещает: ~150 коробок или 20-25 европаллет",
      "Для кого: Крупные партии, несколько категорий",
      "Экономия: vs фулфилмент ~26к/мес = 312к/год",
    ],
    popular: false,
    caseStudy: null,
  },
];

export const ContainersSeller = ({ onScrollToForm }: ContainersSellerProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="containers" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Какой размер тебе нужен?
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Выбери под свои объёмы
        </p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-10">
          {containers.map((container, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl overflow-hidden border-2 transition-all duration-300 ease-out flex flex-col group ${
                container.popular 
                  ? 'border-primary shadow-[0_0_30px_-5px_hsl(84_100%_64%_/_0.4)] md:scale-105' 
                  : 'border-border hover:border-primary/50'
              } hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {container.popular && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Самый популярный
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img 
                  src={container.image} 
                  alt={`Контейнер ${container.size}`}
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-out group-hover:opacity-0"
                />
                <div className="absolute bottom-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-lg px-2.5 py-2 transition-all duration-300 ease-out shadow-lg group-hover:opacity-0">
                  <Hand className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={2.5} />
                </div>
                <img 
                  src={container.hoverImage} 
                  alt={`Контейнер ${container.size} hover`}
                  className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-2xl font-bold text-foreground">📦 {container.size}</span>
                    <span className="block text-sm text-muted-foreground">— "{container.name}"</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">{container.price}/мес</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({container.priceYear} при оплате за год)
                  </span>
                </div>

                <ul className="space-y-2 mb-4 flex-grow">
                  {container.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {container.caseStudy && (
                  <div className="bg-muted rounded-lg p-3 mb-4 text-sm">
                    <p className="text-muted-foreground italic">
                      💬 <strong>{container.caseStudy.name}</strong> ({container.caseStudy.niche}): "{container.caseStudy.text}"
                    </p>
                  </div>
                )}

                <Button
                  className={`w-full mt-auto ${
                    container.popular
                      ? 'bg-primary hover:bg-primary-hover text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                  onClick={onScrollToForm}
                >
                  Забронировать {container.size} →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-500 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <p className="text-muted-foreground mb-4">
            ❓ Не уверен, какой размер? Напиши в Telegram — поможем рассчитать
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a
              href="https://t.me/skladno_tut"
              target="_blank"
              rel="noopener noreferrer"
            >
              Написать в Telegram →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
