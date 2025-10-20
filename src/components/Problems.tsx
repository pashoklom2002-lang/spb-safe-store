import { Home, Truck, Warehouse } from "lucide-react";

const problems = [
  {
    icon: Home,
    title: "Вещи не помещаются дома",
    description: "Мебель, коробки, сезонные вещи — всё занимает место",
  },
  {
    icon: Warehouse,
    title: "Временное хранение при переезде",
    description: "Между квартирами нужно где-то держать вещи",
  },
  {
    icon: Truck,
    title: "Инструмент на стройке",
    description: "Неудобно держать материалы и оборудование на объекте",
  },
];

export const Problems = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Зачем нужен контейнер
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Контейнер решает все — без переплат и заморочек
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow border border-border"
            >
              <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
