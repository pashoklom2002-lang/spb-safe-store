import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FinalCTASectionProps {
  onOpenForm: () => void;
}

export const FinalCTASection = ({ onOpenForm }: FinalCTASectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold text-primary-foreground mb-4 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Начните хранить уже сегодня
        </h2>
        
        <p className={`text-primary-foreground/85 text-lg mb-10 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Оставьте заявку — рассчитаем стоимость за 10 минут
        </p>

        <div className={`transition-all duration-500 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <Button 
            onClick={onOpenForm}
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 font-semibold h-14 px-10 text-base mb-8"
          >
            Рассчитать стоимость
          </Button>

          <div className="flex flex-wrap justify-center items-center gap-6 text-primary-foreground/90">
            <a 
              href="tel:+79956062273"
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Позвонить</span>
            </a>
            <a 
              href="https://t.me/skladno_tut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <TelegramIcon className="w-4 h-4" />
              <span>Telegram</span>
            </a>
            <a 
              href="https://yandex.ru/maps/-/CLr-q831"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors"
            >
              Записаться на просмотр
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
