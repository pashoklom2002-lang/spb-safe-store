import { Check, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import container20ft from "@/assets/container-20ft.jpg";
import container40ft from "@/assets/container-40ft.jpg";
import container6mHover from "@/assets/container-6m-hover.png";
import container15mHover from "@/assets/container-15m-hover.png";
import container30mHover from "@/assets/container-30m-hover.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const containers = [
  {
    type: "6 м²",
    description: "Секция в контейнере",
    image: container20ft,
    hoverImage: container6mHover,
    price: "от 4 000 ₽",
  },
  {
    type: "15 м²",
    description: "Для личного хранения, сезонных вещей, инвентаря, ремонта, небольшого бизнеса",
    image: container20ft,
    hoverImage: container15mHover,
    price: "от 8 400 ₽",
  },
  {
    type: "30 м²",
    description: "Для склада, e-commerce, стройки, оборудования и объёмного хранения",
    image: container40ft,
    hoverImage: container30mHover,
    price: "от 15 200 ₽",
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
                className={`bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_hsl(84_100%_64%_/_0.4)] transition-all duration-300 ease-out flex flex-col group ${
                  isVisibleContainers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <div className="relative w-full h-full">
                    <img 
                      src={container.image} 
                      alt={`Контейнер ${container.type}`}
                      className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-out group-hover:opacity-0"
                    />
                    {/* Hover indicator on base image */}
                    <div className="absolute bottom-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-lg px-2.5 py-2 transition-all duration-300 ease-out shadow-lg group-hover:opacity-0">
                      <Hand className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={2.5} />
                    </div>
                  </div>
                  <img 
                    src={container.hoverImage} 
                    alt={`Контейнер ${container.type} hover`}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
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
