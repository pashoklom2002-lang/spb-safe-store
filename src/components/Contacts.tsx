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
                href="tel:+79939662273"
                className="text-2xl font-bold text-primary hover:text-primary-hover transition-colors"
              >
                8 993 966-22-73
              </a>
              
              <div className="flex gap-3 mt-4">
                <Button 
                  size="sm"
                  className="bg-[#25D366] hover:bg-[#22c55e] text-white"
                  asChild
                >
                  <a
                    href="https://wa.me/79939662273"
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
                    href="https://t.me/Skladno_tut_bot"
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
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=30.392470,59.799270&z=16&l=map&pt=30.392470,59.799270,pm2rdm"
              style={{ width: "100%", height: "400px", border: "0" }}
              title="Карта проезда к Складно Тут"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
