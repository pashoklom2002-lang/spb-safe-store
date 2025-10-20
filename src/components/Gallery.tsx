import facilityImage from "@/assets/facility-view.jpg";
import heroImage from "@/assets/hero-containers.jpg";
import containersCloseup from "@/assets/containers-closeup.jpg";
import facilityAccess from "@/assets/facility-access.jpg";

const galleryItems = [
  {
    image: facilityImage,
    alt: "Вид на площадку хранения контейнеров в дневное время",
    title: "Охраняемая площадка"
  },
  {
    image: containersCloseup,
    alt: "20 и 40-футовые контейнеры крупным планом",
    title: "Контейнеры 20 и 40 футов"
  },
  {
    image: facilityAccess,
    alt: "Удобный подъезд к территории хранения",
    title: "Удобный подъезд"
  },
  {
    image: heroImage,
    alt: "Контейнерная площадка с освещением и охраной",
    title: "Освещение и безопасность"
  }
];

export const Gallery = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Галерея
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Современная охраняемая территория с удобным подъездом и контейнерами разных размеров
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
