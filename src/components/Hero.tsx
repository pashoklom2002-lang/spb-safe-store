import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-containers.jpg";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface HeroProps {
  onScrollToForm: () => void;
}

export const Hero = ({ onScrollToForm }: HeroProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 uppercase leading-loose transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Аренда контейнеров<br />в Шушарах
          </h1>
          <p className={`text-xl md:text-2xl text-foreground mb-12 transition-all duration-700 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Хранение вещей и оборудования в контейнерах в Шушарах<br />
            Доступ 24/7 Безопасно
          </p>
          
          <div className={`flex flex-wrap gap-4 transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 h-auto font-semibold"
              onClick={onScrollToForm}
            >
              Оставить заявку
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 h-auto font-semibold border-2"
              onClick={onScrollToForm}
            >
              Узнать цены
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
