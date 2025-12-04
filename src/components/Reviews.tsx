import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Reviews = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Отзывы
        </h2>
        <p className={`text-center text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Отзывы наших клиентов
        </p>
        
        <div className={`max-w-4xl mx-auto transition-all duration-500 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe 
              src="https://yandex.ru/maps-reviews-widget/203985924246?comments"
              className="w-full"
              style={{ height: '600px', border: 'none' }}
              title="Отзывы Складно тут"
            />
          </div>
        </div>
        
        <div className={`text-center mt-8 transition-all duration-500 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground"
            asChild
          >
            <a
              href="https://yandex.ru/maps/org/skladno_tut/203985924246/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Читать все отзывы
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
