import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Clock, Truck, Lock, MapPin, Calendar, Plus } from "lucide-react";

interface AdvantagesSellerProps {
  onScrollToForm: () => void;
}

const advantages = [
  {
    icon: Clock,
    title: "Доступ 24/7 без очередей",
    description: "Привёз товар в 23:00? Приехал в 6:00 перед отправкой на WB? Без звонков, без ожидания. Просто приехал и работаешь.",
  },
  {
    icon: Truck,
    title: "Фура подъезжает вплотную",
    description: "Широкие проезды, асфальт, фура встаёт прямо у двери контейнера. Разгружаешь за 20 минут, не таскаешь коробки через грязь.",
  },
  {
    icon: Lock,
    title: "Твой замок + камеры онлайн",
    description: "Только ты имеешь ключ. Плюс камеры онлайн — смотришь свой контейнер с телефона в любой момент. Полный контроль.",
  },
  {
    icon: MapPin,
    title: "10 минут от КАД",
    description: "Шушары, Курьерский проезд. Между складами WB на юге и центром СПб. Быстро добраться из любой точки города.",
  },
  {
    icon: Calendar,
    title: "От 1 месяца, без залога",
    description: "Тестируешь нишу? Сезонный товар? Сними на месяц, продли если нужно. Никаких залогов и долгих договоров.",
  },
  {
    icon: Plus,
    title: "Масштабируйся без переезда",
    description: "Объёмы растут? Бери второй контейнер рядом с первым. Не ищешь новый склад, не переезжаешь. Просто расширяешься.",
  },
];

export const AdvantagesSeller = ({ onScrollToForm }: AdvantagesSellerProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Почему селлеры выбирают нас?
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          6 причин
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 2) * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
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
            onClick={onScrollToForm}
          >
            Убедился? → Забронировать контейнер
          </Button>
        </div>
      </div>
    </section>
  );
};
