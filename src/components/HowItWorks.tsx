import { FileCheck, Calendar, Key, Package } from "lucide-react";

const steps = [
  {
    icon: FileCheck,
    title: "Оставляете заявку",
    description: "Звоните или заполняете форму — ответ за 30 минут",
  },
  {
    icon: Calendar,
    title: "Мы подбираем контейнер",
    description: "Уточняем размер и срок, проверяем наличие",
  },
  {
    icon: Key,
    title: "Подписываем договор",
    description: "Договор в день заявки — быстро, без лишних бумаг",
  },
  {
    icon: Package,
    title: "Начинаете пользоваться",
    description: "Получаете ключ — можно заехать уже завтра",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Быстрый старт — за 1 день
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Можно заехать уже завтра
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6">
                  {index + 1}
                </div>
                <div className="mb-4">
                  <step.icon className="w-10 h-10 text-accent mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
