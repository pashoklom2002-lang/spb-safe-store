import { Truck, Lock, Clock, Wallet, Package, Building } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const advantages = [
  {
    icon: Truck,
    title: "Удобная логистика",
    description: "10 минут от сортировочного центра. Широкий проезд для фур и грузового транспорта.",
  },
  {
    icon: Lock,
    title: "Безопасность",
    description: "Охраняемая территория, видеонаблюдение, личный замок на контейнере.",
  },
  {
    icon: Clock,
    title: "Доступ 24/7",
    description: "Приезжайте за товаром в любое время — даже ночью или в выходные.",
  },
  {
    icon: Wallet,
    title: "Честные цены",
    description: "От 130₽/день. Оплата помесячно или за выбранный период. Без скрытых платежей.",
  },
  {
    icon: Package,
    title: "Гибкость",
    description: "Арендуйте контейнер на нужный срок — от недели до нескольких лет.",
  },
  {
    icon: Building,
    title: "Инфраструктура",
    description: "Асфальтированная площадка, парковка, шиномонтаж и кафе рядом.",
  },
];

export const AdvantagesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-foreground mb-14 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Что важно для хранения товаров и оборудования
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-6 border border-border hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] transition-all duration-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 1) * 80}ms` }}
            >
              <advantage.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
