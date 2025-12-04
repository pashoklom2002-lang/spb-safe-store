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
          Реальные отзывы из Яндекс.Карт
        </p>
        
        <div className={`rounded-xl overflow-hidden shadow-lg mb-8 max-w-4xl mx-auto transition-all duration-500 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <a 
              href="https://yandex.ru/maps/org/skladno_tut/203985924246/?utm_medium=mapframe&utm_source=maps" 
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
            >
              Складно тут
            </a>
            <a 
              href="https://yandex.ru/maps/2/saint-petersburg/category/warehouse_services/184105438/?utm_medium=mapframe&utm_source=maps" 
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
            >
              Складские услуги в Санкт‑Петербурге
            </a>
            <a 
              href="https://yandex.ru/maps/2/saint-petersburg/category/baggage_storage/43845902895/?utm_medium=mapframe&utm_source=maps" 
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '28px' }}
            >
              Камера хранения в Санкт‑Петербурге
            </a>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=30.417874%2C59.799891&mode=search&oid=203985924246&ol=biz&pt=30.392470%2C59.799270&sll=30.384915%2C59.799891&source=mapframe&sspn=0.077419%2C0.029020&text=%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%BD%D0%BE%20%D1%82%D1%83%D1%82&utm_source=mapframe&z=13" 
              width="100%" 
              height="400" 
              frameBorder="0"
              allowFullScreen
              style={{ position: 'relative' }}
              title="Складно тут на Яндекс.Картах"
            />
          </div>
        </div>
        
        <div className={`text-center transition-all duration-500 ease-out delay-300 ${
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
