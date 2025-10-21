import { Button } from "@/components/ui/button";

interface CTAProps {
  onScrollToForm: () => void;
}

export const CTA = ({ onScrollToForm }: CTAProps) => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Хранение от 300 рублей в день
          </h2>
          <p className="text-lg text-muted-foreground">
            Оставьте заявку и получите доступ к контейнеру уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={onScrollToForm}
              className="text-lg px-8"
            >
              Оставить заявку
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onScrollToForm}
              className="text-lg px-8"
            >
              Узнать цены
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
