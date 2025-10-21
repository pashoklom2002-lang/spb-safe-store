import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-containers.jpg";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onScrollToForm: () => void;
}

export const Hero = ({ onScrollToForm }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center">
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 animate-fade-in uppercase leading-tight">
            Контейнеры<br />для хранения
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-12">
            Чистые и охраняемые 24/7
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 h-auto font-semibold"
              onClick={onScrollToForm}
            >
              Выбрать контейнер
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
