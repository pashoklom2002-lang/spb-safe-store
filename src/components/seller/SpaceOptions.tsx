import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import container20ft from "@/assets/container-20ft.jpg";
import container40ft from "@/assets/container-40ft.jpg";
import container6mHover from "@/assets/container-6m-hover.png";
import container15mHover from "@/assets/container-15m-hover.png";
import container30mHover from "@/assets/container-30m-hover.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SpaceOptionsProps {
  onScrollToForm: () => void;
}

const containers = [
  {
    size: "5 м²",
    price: "5 000₽",
    priceYear: "4 000₽",
    image: container20ft,
    hoverImage: container6mHover,
    capacity: "~20 коробок или 4 европаллеты",
    suitable: "Тестирования ниши, небольших партий",
    popular: false,
  },
  {
    size: "15 м²",
    price: "8 000₽",
    priceYear: "6 700₽",
    image: container20ft,
    hoverImage: container15mHover,
    capacity: "~80 коробок или 15 европаллет",
    suitable: "Основного товарного запаса, 1-2 категории",
    popular: true,
  },
  {
    size: "30 м²",
    price: "19 000₽",
    priceYear: "15 200₽",
    image: container40ft,
    hoverImage: container30mHover,
    capacity: "~150 коробок или 20-25 европаллет",
    suitable: "Крупных партий, нескольких категорий",
    popular: false,
  },
];

export const SpaceOptions = ({ onScrollToForm }: SpaceOptionsProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="containers" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-12 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Выберите площадь под ваши объёмы
        </h2>

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
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {container.popular && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Популярный размер
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img 
                  src={container.image} 
                  alt={`Контейнер ${container.size}`}
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-out group-hover:opacity-0"
                />
                <img 
                  src={container.hoverImage} 
                  alt={`Контейнер ${container.size} hover`}
                  className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">📦 {container.size}</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-bold text-primary">{container.price}/мес</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({container.priceYear} при оплате за год)
                  </span>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Вмещает:</p>
                    <p className="text-foreground font-medium">{container.capacity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Подходит для:</p>
                    <p className="text-foreground font-medium">{container.suitable}</p>
                  </div>
                </div>

                <Button
                  className={`w-full mt-auto ${
                    container.popular
                      ? 'bg-primary hover:bg-primary-hover text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                  onClick={onScrollToForm}
                >
                  Забронировать {container.size}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-500 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <p className="text-muted-foreground mb-4">
            ❓ Не уверены какой размер? Напишите в Telegram — поможем рассчитать
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
