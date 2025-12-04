import { Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Contacts = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Контакты
        </h2>
        <p className={`text-center text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Свяжитесь с нами удобным способом
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`bg-card rounded-xl p-6 border border-border transition-all duration-500 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Телефон</h3>
              <a 
                href="tel:+79217987222"
                className="text-2xl font-bold text-primary hover:text-primary-hover transition-colors"
              >
                8 921 798-72-22
              </a>
              
              <div className="flex gap-3 mt-4">
                <Button 
                  size="sm"
                  className="bg-[#25D366] hover:bg-[#22c55e] text-white"
                  asChild
                >
                  <a
                    href="https://wa.me/+79217987222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
                
                <Button 
                  size="sm"
                  className="bg-[#0088cc] hover:bg-[#0077b5] text-white"
                  asChild
                >
                  <a
                    href="https://t.me/skladno_tut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <TelegramIcon className="w-4 h-4" />
                    Telegram
                  </a>
                </Button>
              </div>
            </div>
            
            <div className={`bg-card rounded-xl p-6 border border-border transition-all duration-500 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Адрес</h3>
              <p className="text-muted-foreground mb-4">
                Шушары, Курьерский проезд 1А<br />
                (2 мин от КАДа, рядом с Лентой)
              </p>
              <Button 
                size="sm"
                variant="outline"
                asChild
              >
                <a
                  href="https://yandex.ru/maps/-/CLr-q831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Построить маршрут
                </a>
              </Button>
            </div>
          </div>
          
          <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-out delay-400 ${
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
                frameBorder="1"
                allowFullScreen
                style={{ position: 'relative' }}
                title="Складно тут на Яндекс.Картах"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
