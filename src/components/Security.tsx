import { Shield, Camera, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Security = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Безопасность и условия
        </h2>
        <p className={`text-center text-muted-foreground mb-12 max-w-3xl mx-auto transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Охраняемая территория, камеры, круглосуточный контроль доступа.<br/>
          Контейнеры сухие, чистые, без посторонних запахов — вещи защищены, техника и товар не пострадают.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className={`bg-card rounded-xl p-6 border border-border text-center hover:-translate-y-1 hover:shadow-[0_6px_24px_-2px_hsl(0_0%_0%_/_0.6)] transition-all duration-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '200ms' }}>
            <div className="transition-transform duration-200 ease-out hover:scale-105">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">
              Охраняемая территория
            </h3>
          </div>

          <div className={`bg-card rounded-xl p-6 border border-border text-center hover:-translate-y-1 hover:shadow-[0_6px_24px_-2px_hsl(0_0%_0%_/_0.6)] transition-all duration-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '300ms' }}>
            <div className="transition-transform duration-200 ease-out hover:scale-105">
              <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">
              Видеонаблюдение 24/7
            </h3>
          </div>

          <div className={`bg-card rounded-xl p-6 border border-border text-center hover:-translate-y-1 hover:shadow-[0_6px_24px_-2px_hsl(0_0%_0%_/_0.6)] transition-all duration-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}>
            <div className="transition-transform duration-200 ease-out hover:scale-105">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">
              Контроль доступа
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
