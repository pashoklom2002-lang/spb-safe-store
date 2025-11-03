import { FileCheck, Calendar, Key, Package, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: FileCheck,
    title: "Вы оставляете заявку",
    description: "По телефону, WhatsApp или через форму на сайте"
  },
  {
    icon: Package,
    title: "Менеджер подбирает лучший вариант",
    description: "Консультация и подбор контейнера под ваши задачи"
  },
  {
    icon: Calendar,
    title: "Оформляем договор",
    description: "Быстро и без лишних документов"
  },
  {
    icon: Key,
    title: "Получаете доступ и инструкции",
    description: "Код от ворот, ключи от контейнера и схема проезда"
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Всегда на связи, если возникнут вопросы"
  },
];

export const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Как это работает
        </h2>
        <p className={`text-center text-muted-foreground mb-16 max-w-2xl mx-auto transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Быстро. Без лишних формальностей.
        </p>
        
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col items-center transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="text-center relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6 transition-transform duration-200 ease-out hover:scale-110">
                  {index + 1}
                </div>
                <div className="mb-4 transition-transform duration-200 ease-out hover:scale-105">
                  <step.icon className="w-10 h-10 text-accent mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-32px)] h-0.5 bg-border z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
