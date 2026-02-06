import { Check, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import facilityNew1 from "@/assets/facility-new-1.jpg";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const keyBenefits = [
  "Асфальтированная площадка с широким проездом",
  "Охрана и видеонаблюдение 24/7",
  "От 130₽/день, гибкие сроки аренды",
];

export const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="min-h-[85vh] flex items-center bg-background py-12 md:py-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - 55% */}
          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
              Надёжное хранение для бизнеса в 10 минутах от сортировочного центра
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Контейнерное хранение в Шушарах с круглосуточным доступом. Подходит для товаров, оборудования, сезонного хранения.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-col gap-3 mb-8">
              {keyBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <Button 
              onClick={onOpenForm}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold h-14 px-8 text-base mb-6"
            >
              Рассчитать стоимость
            </Button>

            {/* Alternative Actions */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
              <a 
                href="tel:+79956062273"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (995) 606-22-73</span>
              </a>
              <a 
                href="https://t.me/skladno_tut"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <TelegramIcon className="w-4 h-4" />
                <span>Telegram</span>
              </a>
              <a 
                href="https://yandex.ru/maps/-/CLr-q831"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Записаться на просмотр</span>
              </a>
            </div>
          </div>

          {/* Visual - 45% */}
          <div className={`relative transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={facilityNew1} 
                alt="Контейнерная площадка Складно"
                className="w-full aspect-[4/3] object-cover"
              />
              
              {/* Trust Badge */}
              <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg px-4 py-3 border border-border">
                <div className="flex items-center gap-2">
                  <span className="text-primary text-lg">★</span>
                  <span className="text-foreground font-semibold">4.8</span>
                  <span className="text-muted-foreground text-sm">· 20 отзывов на Яндекс.Картах</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
