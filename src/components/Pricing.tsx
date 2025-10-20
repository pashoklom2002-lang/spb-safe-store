import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const containers = [
  {
    type: "20 ft",
    description: "Для личного хранения, сезонных вещей, инвентаря, ремонта, небольшого бизнеса",
  },
  {
    type: "40 ft",
    description: "Для склада, e-commerce, стройки, оборудования и объёмного хранения",
  },
];

const tariffs = [
  {
    name: "Краткосрочное хранение",
    description: "От 1 месяца",
  },
  {
    name: "Долгосрочная аренда",
    description: "Выгодные условия при длительной аренде",
  },
  {
    name: "Для бизнеса",
    description: "Индивидуальные тарифы и гибкие условия",
  },
];

export const Pricing = ({ onScrollToForm }: { onScrollToForm: () => void }) => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Варианты контейнеров */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Варианты контейнеров
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите подходящий размер под вашу задачу
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {containers.map((container, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-3xl font-bold text-card-foreground mb-4">{container.type}</h3>
                <p className="text-muted-foreground leading-relaxed">{container.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
              onClick={onScrollToForm}
            >
              Помочь выбрать контейнер
            </Button>
          </div>
        </div>

        {/* Цены */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Цены
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Цены зависят от срока, типа контейнера и задач.<br/>
            Подберём вариант под ваш объём и срок — без переплат и обязательств.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {tariffs.map((tariff, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center"
              >
                <h3 className="text-xl font-bold text-card-foreground mb-3">{tariff.name}</h3>
                <p className="text-muted-foreground">{tariff.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent-hover text-accent-foreground"
              onClick={onScrollToForm}
            >
              Узнать точную цену
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
