import { Sofa, Package2, Hammer, Wrench, Box, Tv, ShirtIcon, Bike, BikeIcon, CircleDot } from "lucide-react";

const storageItems = [
  {
    icon: Sofa,
    title: "Мебель",
  },
  {
    icon: Package2,
    title: "Вещи при переезде",
  },
  {
    icon: Hammer,
    title: "Стройматериалы при ремонте",
  },
  {
    icon: Wrench,
    title: "Инструменты",
  },
  {
    icon: Box,
    title: "Товары для маркетплейсов",
  },
  {
    icon: Tv,
    title: "Бытовая техника",
  },
  {
    icon: ShirtIcon,
    title: "Личные вещи",
  },
  {
    icon: Bike,
    title: "Велосипеды",
  },
  {
    icon: BikeIcon,
    title: "Мотоциклы и скутеры",
  },
  {
    icon: CircleDot,
    title: "Резину, диски и колеса",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground relative inline-block">
            Что часто хранят в контейнерах
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {storageItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                <item.icon className="w-12 h-12 text-primary stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
