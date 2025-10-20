import { AlertCircle, Lock, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Нехватка места",
    description: "Товар занимает всё помещение, работать негде — арендовать склад дорого и долго",
  },
  {
    icon: Lock,
    title: "Риски безопасности",
    description: "Хранение на неохраняемой территории — постоянный риск кражи и порчи имущества",
  },
  {
    icon: TrendingUp,
    title: "Нет гибкости",
    description: "Долгосрочные договоры и штрафы при досрочном расторжении — переплата за ненужное",
  },
];

export const Problems = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Знакомая ситуация?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Мы знаем, с чем сталкивается бизнес при хранении товара и оборудования
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
