import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Clock } from "lucide-react";

interface PromoBannerProps {
  onScrollToForm: () => void;
}

export const PromoBanner = ({ onScrollToForm }: PromoBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const diff = midnight.getTime() - now.getTime();
      
      return {
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-primary via-accent to-primary p-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-primary-foreground">
              <Clock className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="font-bold text-lg">
                  Оформи заявку сегодня и получи 14 дней бесплатно!
                </p>
                <p className="text-sm opacity-90">
                  Акция действует только сегодня
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-2 text-primary-foreground">
                <div className="text-center bg-background/20 rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs opacity-90">часов</div>
                </div>
                <div className="text-center bg-background/20 rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs opacity-90">минут</div>
                </div>
                <div className="text-center bg-background/20 rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs opacity-90">секунд</div>
                </div>
              </div>

              <Button
                size="lg"
                variant="secondary"
                onClick={onScrollToForm}
                className="bg-background text-foreground hover:bg-background/90 font-bold whitespace-nowrap"
              >
                Получить бонус
              </Button>

              <button
                onClick={() => setIsVisible(false)}
                className="text-primary-foreground hover:opacity-70 transition-opacity"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
