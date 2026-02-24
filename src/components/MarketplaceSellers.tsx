import marketplaceMap from "@/assets/marketplace-map.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const MarketplaceSellers = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Удобно для селлеров маркетплейсов
        </h2>
        <p className={`text-center text-muted-foreground mb-6 max-w-2xl mx-auto transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Склад находится в 10 минутах от СЦ Ozon и Wildberries в Шушарах
        </p>
        <div className={`max-w-[1200px] mx-auto transition-all duration-500 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <img
            src={marketplaceMap}
            alt="Карта: 10 минут от СЦ Ozon и Wildberries до Складно тут"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
