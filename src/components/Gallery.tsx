import facilityImage from "@/assets/facility-view.jpg";
import heroImage from "@/assets/hero-containers.jpg";

export const Gallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Наша площадка
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Современная охраняемая территория с удобным подъездом
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
            <img 
              src={facilityImage} 
              alt="Вид на площадку хранения контейнеров в дневное время"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
            <img 
              src={heroImage} 
              alt="Контейнерная площадка с освещением и охраной"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
