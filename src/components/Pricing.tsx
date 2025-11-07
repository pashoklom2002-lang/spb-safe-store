import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import container20ft from "@/assets/container-20ft.jpg";
import container40ft from "@/assets/container-40ft.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const containers = [
  {
    type: "5 м²",
    description: "Секция в контейнере",
    image: container20ft,
    price: "от 5 000 ₽",
  },
  {
    type: "16 м²",
    description: "Для личного хранения, сезонных вещей, инвентаря, ремонта, небольшого бизнеса",
    image: container20ft,
    price: "от 8 000 ₽",
  },
  {
    type: "32 м²",
    description: "Для склада, e-commerce, стройки, оборудования и объёмного хранения",
    image: container40ft,
    price: "от 12 000 ₽",
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
  const { ref: refContainers, isVisible: isVisibleContainers } = useScrollAnimation();
  const { ref: refTariffs, isVisible: isVisibleTariffs } = useScrollAnimation();
  
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Варианты контейнеров */}
        <div ref={refContainers} className="mb-20">
          <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
            isVisibleContainers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Варианты контейнеров
          </h2>
          <p className={`text-center text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-500 ease-out delay-100 ${
            isVisibleContainers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Выберите подходящий размер под вашу задачу
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {containers.map((container, index) => (
              <div 
                key={index}
                className={`bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_hsl(84_100%_64%_/_0.4)] transition-all duration-300 ease-out flex flex-col ${
                  isVisibleContainers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-black">
                  <img 
                    src={container.image} 
                    alt={`Контейнер ${container.type}`}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 ease-out"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">{container.type}</h3>
                  <p className="text-xl font-semibold text-primary mb-3">{container.price}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4 flex-grow">{container.description}</p>
                  <Button 
                    size="sm"
                    variant="outline"
                    onClick={onScrollToForm}
                    className="w-full mt-auto"
                  >
                    Узнать доступность
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-500 ease-out delay-500 ${
            isVisibleContainers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
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
        <div ref={refTariffs}>
          <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
            isVisibleTariffs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Цены
          </h2>
          <p className={`text-center text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-500 ease-out delay-100 ${
            isVisibleTariffs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Цены зависят от срока, типа контейнера и задач.<br/>
            Подберём вариант под ваш объём и срок — без переплат и обязательств.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {tariffs.map((tariff, index) => (
              <div 
                key={index}
                className={`bg-card rounded-xl p-6 border border-border text-center hover:-translate-y-1 hover:shadow-[0_6px_24px_-2px_hsl(0_0%_0%_/_0.6)] transition-all duration-300 ease-out ${
                  isVisibleTariffs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-card-foreground mb-3">{tariff.name}</h3>
                <p className="text-muted-foreground">{tariff.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-500 ease-out delay-500 ${
            isVisibleTariffs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
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
