import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Дмитрий К.",
    company: "Строительная компания",
    text: "Арендуем два 40-футовых контейнера уже полгода. Идеальное решение для хранения инструмента и материалов. Охрана работает отлично, доступ круглосуточный.",
    rating: 5,
  },
  {
    name: "Елена М.",
    company: "Интернет-магазин",
    text: "Нужно было срочно разгрузить склад перед инвентаризацией. Заключили договор за день, всё очень оперативно. Цена честная, никаких скрытых платежей.",
    rating: 5,
  },
  {
    name: "Александр П.",
    company: "Логистическая компания",
    text: "Удобная площадка, всегда есть место для маневра фурой. Контейнеры в хорошем состоянии, замки надежные. Рекомендую для бизнеса.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Отзывы клиентов
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Что говорят о нас наши партнеры
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
