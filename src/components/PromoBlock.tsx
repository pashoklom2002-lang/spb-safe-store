import { Button } from "@/components/ui/button";
import promoImage from "@/assets/promo-christmas.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface PromoBlockProps {
  onScrollToForm: () => void;
}

export const PromoBlock = ({ onScrollToForm }: PromoBlockProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`relative rounded-2xl overflow-hidden transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-card/95 to-card/80" />
          
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-12">
            {/* Image - Christmas tree with ribbon */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={promoImage} 
                alt="Новогодняя акция" 
                className="w-full max-w-md rounded-xl object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-primary">
                  Новогодняя акция!
                </h2>
                <p className="text-2xl md:text-4xl font-bold text-accent">
                  -10% на любую кладовку
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  на первые 3 месяца
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 h-auto font-semibold"
                onClick={onScrollToForm}
              >
                Получить скидку
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
