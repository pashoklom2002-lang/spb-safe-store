import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import storageFurniture from "@/assets/storage-furniture.png";
import storageClothing from "@/assets/storage-clothing.png";
import storageTools from "@/assets/storage-tools.png";
import storageSports from "@/assets/storage-sports.png";
import storageElectronics from "@/assets/storage-electronics.png";
import storageEcommerce from "@/assets/storage-ecommerce.png";

const storageItems = [
  {
    image: storageFurniture,
    title: "Мебель",
  },
  {
    image: storageClothing,
    title: "Сезонные вещи",
  },
  {
    image: storageTools,
    title: "Инструменты и стройматериалы",
  },
  {
    image: storageSports,
    title: "Спортинвентарь",
  },
  {
    image: storageElectronics,
    title: "Техника",
  },
  {
    image: storageEcommerce,
    title: "Товары для e-commerce",
  },
];

export const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`mb-16 text-center transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground relative inline-block">
            Что часто хранят в контейнерах
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {storageItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-[0_6px_24px_-2px_hsl(0_0%_0%_/_0.6)] transition-all duration-300 ease-out border border-border ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
