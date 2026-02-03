import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-containers.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface HeroSellerProps {
  onScrollToContainers: () => void;
  onScrollToPhotos: () => void;
}

export const HeroSeller = ({ onScrollToContainers, onScrollToPhotos }: HeroSellerProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="relative min-h-[90vh] md:min-h-screen flex items-center py-8 md:py-0">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.65)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 md:mb-6 leading-tight transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Когда товарному бизнесу нужна гибкость
          </h1>
          
          <p className={`text-2xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Операционное пространство с полным контролем доступа.
            <br className="hidden md:block" />
            <span className="text-muted-foreground">От 5м² до 30м². Шушары, 10 минут от КАД.</span>
          </p>
          
          <p className={`text-base md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl transition-all duration-700 ease-out delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Собственный замок. Доступ 24/7. Фура к двери.<br />
            Договор онлайн, въезд в день оплаты.
          </p>
          
          <div className={`flex flex-wrap gap-3 md:gap-4 transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto font-bold"
              onClick={onScrollToContainers}
            >
              Выбрать площадь
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto font-semibold border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
              onClick={onScrollToPhotos}
            >
              Посмотреть вживую
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
