import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "1",
    title: "Оставьте заявку",
    description: "Рассчитаем стоимость за 10 минут. Позвоните или заполните форму.",
  },
  {
    number: "2",
    title: "Осмотрите контейнер",
    description: "Приезжайте на площадку, посмотрите условия хранения, задайте вопросы.",
  },
  {
    number: "3",
    title: "Начните хранить",
    description: "Подписываем договор, вы получаете ключи и привозите вещи в удобное время.",
  },
];

export const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-foreground mb-14 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Как начать
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-foreground font-bold text-xl mb-4">
                {step.number}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+30px)] w-[calc(100%-60px)] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
