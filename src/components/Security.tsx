import { Shield, Camera, CheckCircle } from "lucide-react";

export const Security = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Безопасность и условия
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Охраняемая территория, камеры, круглосуточный контроль доступа.<br/>
          Контейнеры сухие, чистые, без посторонних запахов — вещи защищены, техника и товар не пострадают.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground">
              Охраняемая территория
            </h3>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground">
              Видеонаблюдение 24/7
            </h3>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground">
              Контроль доступа
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
