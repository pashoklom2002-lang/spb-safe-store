import { Package, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export const UseCases = ({ onScrollToForm }: { onScrollToForm: () => void }) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Для чего
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Package className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-card-foreground">Для личных вещей</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Переезд, ремонт, сезонная одежда, спортинвентарь, мебель, техника, колёса, временное освобождение квартиры.
            </p>
            <Button 
              variant="outline"
              className="w-full"
              onClick={onScrollToForm}
            >
              Мне для вещей
            </Button>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Store className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-card-foreground">Для бизнеса</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Интернет-магазины, инструмент и оборудование, стройка и монтаж, склад товара, архив, склад-точка рядом.
            </p>
            <Button 
              variant="outline"
              className="w-full"
              onClick={onScrollToForm}
            >
              Мне для бизнеса
            </Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground"
            onClick={onScrollToForm}
          >
            Подобрать решение
          </Button>
        </div>
      </div>
    </section>
  );
};
