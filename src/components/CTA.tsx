import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CTAProps {
  onScrollToForm: () => void;
}

export const CTA = ({ onScrollToForm }: CTAProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className={`text-3xl md:text-5xl font-bold text-foreground transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Хранение от 130 рублей в день
          </h2>
          <p className={`text-lg text-muted-foreground transition-all duration-500 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Оставьте заявку и получите доступ к контейнеру уже сегодня
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-all duration-500 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <Button 
              size="lg" 
              onClick={onScrollToForm}
              className="text-lg px-8"
            >
              Оставить заявку
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onScrollToForm}
              className="text-lg px-8"
            >
              Узнать цены
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
