import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Truck, Rocket, CheckCircle } from "lucide-react";

const scenarios = [
  {
    icon: TrendingUp,
    title: "Операционная база для роста",
    situation: "Товарный бизнес с сезонными колебаниями объёмов",
    goods: "Одежда, обувь, товары для дома — 3-5 категорий",
    task: "Объёмы непредсказуемы: летом нужно 10м², зимой 30м². Долгосрочная аренда склада невыгодна, нужна гибкость.",
    solution: "Начали с 15м² на месячной основе. Когда объёмы выросли — добавили второй контейнер рядом. Полный контроль доступа: приезжаем когда нужно, без очередей.",
    results: [
      "Операционная гибкость: масштабируемся без поиска нового склада",
      "Фиксированные расходы: платим только за нужную площадь",
      "Скорость реакции: от решения до отгрузки 2 дня вместо 5",
    ],
  },
  {
    icon: Truck,
    title: "Перевалочная база для импорта",
    situation: "Поставки из Азии — крупные партии, нужна перевалка",
    goods: "Электроника, аксессуары — контейнерные поставки 2-4 раза в квартал",
    task: "Товар приходит большой партией. Нужно разгрузить, рассортировать, частями отправлять дальше. Краткосрочная аренда склада дорого.",
    solution: "Контейнер 30м² как перевалочная база. Приняли поставку, разгрузили фуру за 30 минут (въезд вплотную). Рассортировали товар, отправляем партиями по мере необходимости.",
    results: [
      "Предсказуемая логистика: знаем расходы заранее",
      "Быстрая обработка: не ждём очередь на приёмку",
      "Операционный контроль: доступ 24/7, работаем в удобное время",
    ],
  },
  {
    icon: Rocket,
    title: "Масштабирование без рисков",
    situation: "Запуск новой товарной категории — нужна площадь на короткий срок",
    goods: "Новая ниша — тестовая партия на 1-3 месяца",
    task: "Неясно, пойдёт ли товар. Долгосрочная аренда — риск. Хранение в офисе — непрофессионально.",
    solution: "Взяли 5м² на месяц без залога и обязательств. Протестировали нишу, поняли что работает — расширились до 15м². Гибкие условия: платим только за время использования.",
    results: [
      "Снижен риск: нет долгосрочных обязательств",
      "Операционная гибкость: добавили площадь когда поняли потребность",
      "Фокус на продукте: не отвлекаемся на поиск складов",
    ],
  },
];

export const UseCaseScenarios = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Примеры использования
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Реальные бизнес-ситуации
        </p>

        <div className="space-y-8 max-w-4xl mx-auto">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <scenario.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{scenario.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Left column - Context */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ситуация:</p>
                    <p className="text-foreground">{scenario.situation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Товар:</p>
                    <p className="text-foreground">{scenario.goods}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Задача:</p>
                    <p className="text-foreground">{scenario.task}</p>
                  </div>
                </div>

                {/* Right column - Solution & Results */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Решение:</p>
                    <p className="text-foreground">{scenario.solution}</p>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <p className="text-sm font-semibold text-primary mb-3">Результат:</p>
                    <ul className="space-y-2">
                      {scenario.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
