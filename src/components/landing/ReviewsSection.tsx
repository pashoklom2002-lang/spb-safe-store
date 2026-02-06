import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ReviewsSectionProps {
  onOpenForm: () => void;
}

const reviews = [
  {
    stars: 5,
    text: "Удобное расположение, всегда можно подъехать и забрать товар. Храним сезонные запасы для маркетплейса.",
    author: "Евгений К.",
  },
  {
    stars: 5,
    text: "Хорошая охрана, всё чисто и аккуратно. Цена адекватная.",
    author: "Мария С.",
  },
  {
    stars: 5,
    text: "Пользуемся уже полгода. Никаких проблем, менеджеры отзывчивые.",
    author: "Дмитрий Л.",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-primary text-lg">★</span>
    ))}
  </div>
);

export const ReviewsSection = ({ onOpenForm }: ReviewsSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-foreground mb-3 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Отзывы клиентов
        </h2>
        
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Из Яндекс.Карт
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-secondary/30 rounded-xl p-6 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <StarRating count={review.stars} />
              <p className="text-muted-foreground text-sm leading-relaxed my-4 italic">
                "{review.text}"
              </p>
              <p className="text-foreground font-medium text-sm">— {review.author}</p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-500 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <a 
            href="https://yandex.ru/maps/org/skladno_tut/203985924246/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm mb-8 inline-block"
          >
            → Все отзывы на Яндекс.Картах
          </a>

          <div className="mt-6">
            <Button 
              onClick={onOpenForm}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold"
            >
              Записаться на просмотр
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
