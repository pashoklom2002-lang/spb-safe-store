import { Shield, Clock, DollarSign, Zap, Key, Truck } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Круглосуточная охрана",
    description: "Видеонаблюдение 24/7 и контроль доступа",
  },
  {
    icon: Zap,
    title: "Освещение",
    description: "Подключение электричества в каждом контейнере",
  },
  {
    icon: Clock,
    title: "Гибкие условия",
    description: "Аренда от 1 месяца без долгосрочных обязательств",
  },
  {
    icon: DollarSign,
    title: "Прозрачная цена",
    description: "Никаких скрытых платежей и дополнительных сборов",
  },
  {
    icon: Key,
    title: "Свободный доступ",
    description: "Ваш ключ — заезжайте когда удобно",
  },
  {
    icon: Truck,
    title: "Удобный подъезд",
    description: "Площадка для погрузки и разгрузки техники",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Почему выбирают нас
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Надежность и удобство для вашего бизнеса
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
