import { Shield, Clock, Calendar, Truck, FileCheck, Package, Droplets } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24/7 доступ",
  },
  {
    icon: Shield,
    title: "Видеонаблюдение",
  },
  {
    icon: Droplets,
    title: "Сухие и чистые контейнеры",
  },
  {
    icon: Calendar,
    title: "Гибкие сроки",
  },
  {
    icon: Truck,
    title: "Подъезд вплотную",
  },
  {
    icon: FileCheck,
    title: "Быстрое оформление",
  },
  {
    icon: Package,
    title: "Личное и коммерческое",
  },
  {
    icon: Shield,
    title: "Безопасная территория",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Преимущества
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
