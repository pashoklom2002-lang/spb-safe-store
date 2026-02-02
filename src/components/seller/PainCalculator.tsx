import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Wallet, TrendingDown, CheckCircle } from "lucide-react";

interface PainCalculatorProps {
  onScrollToForm: () => void;
}

const sizeOptions = [
  { value: 5, label: "5 м²", ourPrice: 5000, fulfillment: 12000, warmStorage: 10000 },
  { value: 15, label: "15 м²", ourPrice: 8000, fulfillment: 25000, warmStorage: 18000 },
  { value: 30, label: "30 м²", ourPrice: 19000, fulfillment: 45000, warmStorage: 30000 },
];

const storageOptions = [
  { id: "fulfillment", label: "Фулфилмент WB/Ozon", priceKey: "fulfillment" as const },
  { id: "warm", label: "Тёплый склад", priceKey: "warmStorage" as const },
  { id: "home", label: "Квартира/гараж (условно 0₽)", priceKey: null },
];

export const PainCalculator = ({ onScrollToForm }: PainCalculatorProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedSize, setSelectedSize] = useState(1); // index for 15m²
  const [currentStorage, setCurrentStorage] = useState("fulfillment");

  const calculation = useMemo(() => {
    const size = sizeOptions[selectedSize];
    const storage = storageOptions.find(s => s.id === currentStorage);
    
    let currentPrice = 0;
    if (storage?.priceKey) {
      currentPrice = size[storage.priceKey];
    }
    
    const ourPrice = size.ourPrice;
    const monthlyOverpay = currentPrice - ourPrice;
    const yearlyOverpay = monthlyOverpay * 12;
    
    return {
      currentPrice,
      ourPrice,
      monthlyOverpay: Math.max(0, monthlyOverpay),
      yearlySavings: Math.max(0, yearlyOverpay),
      sizeLabel: size.label,
    };
  }, [selectedSize, currentStorage]);

  return (
    <section ref={ref} id="calculator" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Сколько ты переплачиваешь прямо сейчас?
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Рассчитай свою экономию за 30 секунд
        </p>

        <div className={`max-w-3xl mx-auto transition-all duration-500 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="bg-card rounded-2xl p-6 md:p-10 border-2 border-primary/30 shadow-lg">
            {/* Size Selector */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-foreground mb-4">
                Сколько м² нужно?
              </label>
              <div className="flex gap-2 md:gap-4">
                {sizeOptions.map((option, index) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedSize(index)}
                    className={`flex-1 py-3 md:py-4 px-4 md:px-6 rounded-xl font-bold text-lg transition-all duration-200 ${
                      selectedSize === index
                        ? 'bg-primary text-primary-foreground shadow-md scale-105'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Storage Selector */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-foreground mb-4">
                Где хранишь сейчас?
              </label>
              <div className="space-y-3">
                {storageOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                      currentStorage === option.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      currentStorage === option.id
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {currentStorage === option.id && (
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <span className="text-foreground font-medium">{option.label}</span>
                    {option.priceKey && (
                      <span className="ml-auto text-muted-foreground text-sm">
                        ~{sizeOptions[selectedSize][option.priceKey].toLocaleString('ru-RU')}₽/мес
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-background rounded-xl p-6 space-y-4">
              {calculation.monthlyOverpay > 0 && (
                <div className="flex items-center gap-3 text-lg">
                  <Wallet className="w-6 h-6 text-destructive flex-shrink-0" />
                  <span className="text-foreground">Ты переплачиваешь:</span>
                  <span className="font-bold text-destructive ml-auto">
                    {calculation.monthlyOverpay.toLocaleString('ru-RU')}₽/мес
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-3 text-lg">
                <TrendingDown className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground">У нас:</span>
                <span className="font-bold text-primary ml-auto">
                  {calculation.ourPrice.toLocaleString('ru-RU')}₽/мес за {calculation.sizeLabel}
                </span>
              </div>
              
              {calculation.yearlySavings > 0 && (
                <div className="flex items-center gap-3 text-xl pt-2 border-t border-border">
                  <CheckCircle className="w-7 h-7 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold">Экономия за год:</span>
                  <span className="font-bold text-primary text-2xl ml-auto">
                    {calculation.yearlySavings.toLocaleString('ru-RU')}₽
                  </span>
                </div>
              )}
            </div>

            <Button
              size="lg"
              className="w-full mt-6 bg-primary hover:bg-primary-hover text-primary-foreground text-lg py-6 h-auto font-bold"
              onClick={onScrollToForm}
            >
              Забронировать за {calculation.ourPrice.toLocaleString('ru-RU')}₽/мес →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
