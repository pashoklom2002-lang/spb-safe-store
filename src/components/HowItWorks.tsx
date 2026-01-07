import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    emoji: "📲",
    title: "Вы оставляете заявку",
    description: "В соцсетях, по телефону или через форму на сайте"
  },
  {
    emoji: "📦",
    title: "Менеджер подбирает лучший вариант",
    description: "Консультация и подбор контейнера под ваши задачи"
  },
  {
    emoji: "🤝",
    title: "Оформляем договор",
    description: "Прозрачный договор без скрытых условий и дополнительных платежей"
  },
  {
    emoji: "🔑",
    title: "Получаете доступ и инструкции",
    description: "Контейнер закрывается на ваш собственный замок. Доступ к контейнеру есть только у вас."
  },
  {
    emoji: "✅",
    title: "Свободно пользуетесь с доступом 24/7",
    description: "Вы можете приезжать в любое время. Доступ к контейнеру есть только у вас — по вашему замку."
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
              <div className="text-center md:text-center relative z-10 w-full">
                {/* Mobile: emoji left, number right - centered */}
                <div className="flex md:hidden items-center justify-center gap-4 mb-4">
                  <span className="text-4xl" style={{ fontFamily: "'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif" }}>
                    {step.emoji}
                  </span>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-base font-bold transition-transform duration-200 ease-out hover:scale-110">
                    {index + 1}
                  </div>
                </div>
                {/* Desktop: number then emoji stacked */}
                <div className="hidden md:block">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-base font-bold mb-6 transition-transform duration-200 ease-out hover:scale-110">
                    {index + 1}
                  </div>
                  <div className="mb-4 transition-transform duration-200 ease-out hover:scale-105">
                    <span className="text-4xl" style={{ fontFamily: "'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif" }}>
                      {step.emoji}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+20px)] w-[calc(100%-20px)] h-0.5 bg-border z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};