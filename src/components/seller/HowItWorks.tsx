import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, CreditCard, KeyRound } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "1",
    title: "Обсуждение",
    description: "Напишите в Telegram или позвоните. Уточним размер, срок, ответим на вопросы.",
    time: "5-10 минут",
  },
  {
    icon: FileText,
    number: "2",
    title: "Договор онлайн",
    description: "Отправим договор, подписываете электронно. Без визитов в офис.",
    time: "15 минут",
  },
  {
    icon: CreditCard,
    number: "3",
    title: "Оплата",
    description: "Банковский перевод или онлайн-оплата. Получаете код доступа сразу после оплаты.",
    time: "В течение часа",
  },
  {
    icon: KeyRound,
    number: "4",
    title: "Въезд",
    description: "Приезжаете в удобное время (доступ 24/7). Охрана пропускает, открываете свой контейнер.",
    time: "В день оплаты",
  },
];

export const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Как это работает
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Простой процесс от заявки до использования
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-4 md:gap-8 transition-all duration-500 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl md:absolute md:left-1/2 md:-translate-x-1/2">
                    {step.number}
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors ${
                    index % 2 === 0 ? 'md:mr-auto md:w-[45%] md:pr-8' : 'md:ml-auto md:w-[45%] md:pl-8'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      ⏱️ {step.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`text-center mt-12 transition-all duration-500 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold"
            asChild
          >
            <a
              href="https://t.me/skladno_tut"
              target="_blank"
              rel="noopener noreferrer"
            >
              Начать → Написать в Telegram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
