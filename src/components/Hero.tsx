import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-containers.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = ({ onScrollToForm }: { onScrollToForm: () => void }) => {
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

          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base">
            <span>Асфальт</span>
            <span>·</span>
            <span>Шушары</span>
            <span>·</span>
            <span>24/7 доступ</span>
            <span>·</span>
            <span>Охрана</span>
            <span>·</span>
            <span>Подъезд к двери</span>
          </div>
        </div>
      </div>
    </section>
  );
};
