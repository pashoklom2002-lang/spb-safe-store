import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqItems = [
  {
    question: "Сколько стоит аренда контейнера?",
    answer: "От 130₽/день в зависимости от размера контейнера и срока аренды. Оставьте заявку — рассчитаем точную стоимость.",
  },
  {
    question: "Какие размеры контейнеров доступны?",
    answer: "Контейнеры разных размеров. Поможем подобрать оптимальный вариант под ваш объём.",
  },
  {
    question: "Насколько безопасно хранение?",
    answer: "Территория охраняется, есть видеонаблюдение. Каждый контейнер закрывается на ваш личный замок.",
  },
  {
    question: "Можно приехать в любое время?",
    answer: "Да, доступ к контейнерам круглосуточный без выходных.",
  },
  {
    question: "Минимальный срок аренды?",
    answer: "От одной недели. Можем обсудить любые сроки — краткосрочные и долгосрочные.",
  },
  {
    question: "Где находится площадка?",
    answer: "В Шушарах, удобный съезд с Московского шоссе, 10 минут от сортировочного центра.",
  },
];

export const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-foreground mb-12 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Частые вопросы
        </h2>

        <div className={`max-w-3xl mx-auto transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-4"
              >
                <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
