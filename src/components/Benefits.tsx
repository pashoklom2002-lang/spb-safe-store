import { Shield, Clock, DollarSign, Zap, Key, Truck } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Охраняемая территория",
    description: "Круглосуточная охрана и видеонаблюдение",
  },
  {
    icon: Zap,
    title: "Электричество и освещение",
    description: "Свет и розетки в каждом контейнере",
  },
  {
    icon: Clock,
    title: "Аренда от 1 дня",
    description: "Гибкие условия под любой срок",
  },
  {
    icon: DollarSign,
    title: "Честные тарифы",
    description: "Прозрачные цены без скрытых платежей",
  },
  {
    icon: Key,
    title: "Доступ 24/7",
    description: "Приезжайте в любое время с личным ключом",
  },
  {
    icon: Truck,
    title: "Удобный заезд",
    description: "Асфальт, место под фуру и манипулятор",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Всё, чтобы вещи были в порядке
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Безопасно, удобно, доступно
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
