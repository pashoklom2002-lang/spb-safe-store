import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-containers.jpg";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onScrollToForm: () => void;
}

export const Hero = ({ onScrollToForm }: HeroProps) => {
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
            Контейнеры-кладовки в Шушарах
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Просторные теплые контейнеры для безопасного хранения вещей
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </div>
    </section>
  );
};
