import { Droplets, Calendar, FileCheck, Package, ThermometerSnowflake, Lock } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Сухие и чистые",
  },
  {
    icon: ThermometerSnowflake,
    title: "Защита от непогоды",
  },
  {
    icon: Lock,
    title: "Герметичный замок",
  },
  {
    icon: Calendar,
    title: "Гибкие сроки",
  },
  {
    icon: FileCheck,
    title: "Быстрое оформление",
  },
  {
    icon: Package,
    title: "Личное и коммерческое",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Преимущества хранения в контейнерах
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
