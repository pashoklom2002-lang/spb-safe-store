import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-containers.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = ({ onScrollToForm }: { onScrollToForm: () => void }) => {
  const [containerType, setContainerType] = useState<string>("");

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.75)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Аренда контейнеров для хранения в СПб — храним.ру
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Охраняемая площадка • 20 и 40-футовые контейнеры • От 6 000 ₽/мес
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 max-w-md mx-auto mb-8">
            <label className="block text-white text-sm font-medium mb-3">
              Выберите тип контейнера
            </label>
            <Select value={containerType} onValueChange={setContainerType}>
              <SelectTrigger className="bg-white text-foreground">
                <SelectValue placeholder="Выберите размер" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="20ft">20 футов (6 × 2.4 × 2.6 м)</SelectItem>
                <SelectItem value="40ft">40 футов (12 × 2.4 × 2.6 м)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-6 h-auto"
            onClick={onScrollToForm}
          >
            Получить подбор и цену
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
