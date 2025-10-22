import { FileCheck, Calendar, Key, Package, Headphones } from "lucide-react";

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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Как это работает
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Быстро. Без лишних формальностей.
        </p>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="text-center relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6">
                  {index + 1}
                </div>
                <div className="mb-4">
                  <step.icon className="w-10 h-10 text-accent mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <>
                  {/* Desktop horizontal line */}
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-32px)] h-0.5 bg-border z-0" />
                  {/* Mobile vertical line */}
                  <div className="md:hidden absolute top-[calc(50%+32px)] left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-32px)] bg-border z-0" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
