import { Truck, Lock, Zap, Package } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Truck, text: "Доставка манипулятором" },
  { icon: Lock, text: "Установка сигнализации" },
  { icon: Zap, text: "Подключение освещения" },
  { icon: Package, text: "Помощь с размещением" },
];

export const AdditionalServices = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Всё, что может понадобиться
          </h2>
          <p className={`text-center text-muted-foreground mb-10 transition-all duration-500 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Дополнительные услуги по запросу
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 bg-card rounded-lg p-4 shadow-card border border-border hover:-translate-y-1 hover:shadow-[0_6px_24px_-2px_hsl(0_0%_0%_/_0.6)] transition-all duration-300 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="bg-accent/10 p-3 rounded-lg transition-transform duration-200 ease-out hover:scale-105">
                  <service.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-card-foreground font-medium">{service.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
