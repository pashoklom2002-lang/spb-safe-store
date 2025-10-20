import { Truck, Lock, Zap, Package } from "lucide-react";

const services = [
  { icon: Truck, text: "Доставка манипулятором" },
  { icon: Lock, text: "Установка сигнализации" },
  { icon: Zap, text: "Подключение освещения" },
  { icon: Package, text: "Помощь с размещением" },
];

export const AdditionalServices = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Всё, что может понадобиться
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Дополнительные услуги по запросу
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-card rounded-lg p-4 shadow-card border border-border"
              >
                <div className="bg-accent/10 p-3 rounded-lg">
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
