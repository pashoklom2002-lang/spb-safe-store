import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Clock, Truck, Lock, MapPin, Calendar, Plus } from "lucide-react";

interface OperationalDetailsProps {
  onScrollToForm: () => void;
}

const features = [
  {
    icon: Clock,
    title: "Доступ 24/7",
    description: "Приезжайте когда нужно вам. Ночью, утром, выходные — без звонков и согласований. Просто приехали и работаете.",
  },
  {
    icon: Truck,
    title: "Фура к двери",
    description: "Широкие проезды, асфальт. Фура встаёт вплотную к контейнеру. Разгружаете/загружаете за 20-30 минут.",
  },
  {
    icon: Lock,
    title: "Собственный замок",
    description: "Только вы имеете ключ. Плюс камеры онлайн — смотрите через телефон. Полный контроль над товаром.",
  },
  {
    icon: MapPin,
    title: "Локация",
    description: "Шушары, Курьерский проезд 1А. 10 минут от КАД. Быстро из любой точки города и области.",
  },
  {
    icon: Calendar,
    title: "Гибкие сроки",
    description: "От 1 месяца, без залога. Тестируете, сезонный товар, краткосрочная необходимость — платите только за нужное время.",
  },
  {
    icon: Plus,
    title: "Масштабирование",
    description: "Объёмы растут? Берите второй контейнер рядом. Без переезда, без поиска нового места.",
  },
];

export const OperationalDetails = ({ onScrollToForm }: OperationalDetailsProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Операционные возможности
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Что даёт вам полный контроль
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 1) * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-500 ease-out delay-500 ${
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
              Обсудить ваши потребности →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
