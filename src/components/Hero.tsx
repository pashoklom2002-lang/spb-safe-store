import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-containers.jpg";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onScrollToForm: () => void;
  onScrollToUseCases: () => void;
  onScrollToLocation: () => void;
  onScrollToBenefits: () => void;
  onScrollToPricing: () => void;
  onScrollToSecurity: () => void;
  onScrollToFAQ: () => void;
}

export const Hero = ({ 
  onScrollToForm,
  onScrollToUseCases,
  onScrollToLocation,
  onScrollToBenefits,
  onScrollToPricing,
  onScrollToSecurity,
  onScrollToFAQ
}: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.75)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Контейнеры-кладовки в Шушарах — для личных вещей и бизнеса
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Асфальт, удобный подъезд, охрана и 24/7 доступ. Хранение в 20ft и 40ft контейнерах — для переезда, ремонта, сезонных вещей, инструмента и товара.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-6 h-auto"
              onClick={onScrollToForm}
            >
              Оставить заявку
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 h-auto"
              onClick={onScrollToForm}
            >
              Узнать цены
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white/90 text-sm md:text-base">
            <button 
              onClick={onScrollToUseCases}
              className="hover:text-primary transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4"
            >
              Под что подходит
            </button>
            <span className="hidden md:inline">·</span>
            <button 
              onClick={onScrollToLocation}
              className="hover:text-primary transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4"
            >
              Площадка
            </button>
            <span className="hidden md:inline">·</span>
            <button 
              onClick={onScrollToBenefits}
              className="hover:text-primary transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4"
            >
              Преимущества
            </button>
            <span className="hidden md:inline">·</span>
            <button 
              onClick={onScrollToPricing}
              className="hover:text-primary transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4"
            >
              Цены
            </button>
            <span className="hidden md:inline">·</span>
            <button 
              onClick={onScrollToSecurity}
              className="hover:text-primary transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4"
            >
              Безопасность
            </button>
            <span className="hidden md:inline">·</span>
            <button 
              onClick={onScrollToFAQ}
              className="hover:text-primary transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4"
            >
              FAQ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
