import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Дмитрий К.",
    company: "Частное лицо",
    text: "Хранил мебель во время ремонта — всё чётко, удобно, недорого.",
    rating: 5,
  },
  {
    name: "Анна М.",
    company: "Владелец бизнеса",
    text: "Контейнер как склад — свет, доступ, охрана. Всё что нужно.",
    rating: 5,
  },
  {
    name: "Сергей Л.",
    company: "Строитель",
    text: "Дешевле и проще, чем искать гараж или склад. Рекомендую.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Хранят у нас — потому что удобно
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Реальные отзывы клиентов
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
