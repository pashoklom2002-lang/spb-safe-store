import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "Товар не испортится без отопления?",
    answer: "Контейнеры герметичные, сухие. Большинство товаров не требует отопления: одежда, обувь, электроника, игрушки, посуда, упакованная косметика, бытовая химия. Если есть специфика — обсудим индивидуально.",
  },
  {
    question: "Можно ли снять на 2 недели?",
    answer: "Минимальный срок — 1 месяц. Для срочных краткосрочных задач напишите — рассмотрим индивидуально.",
  },
  {
    question: "Как быстро можно начать использовать?",
    answer: "В день оплаты. Договор онлайн → оплата → получаете код доступа → приезжаете и работаете.",
  },
  {
    question: "Можно посмотреть до аренды?",
    answer: "Да. Приезжайте на площадку, покажем всё за 15 минут. Адрес: Шушары, Курьерский проезд 1А. Звоните заранее: +7 (995) 606-22-73.",
  },
  {
    question: "Можно поставить свои стеллажи?",
    answer: "Да, разборные стеллажи. При выезде убираете с собой.",
  },
  {
    question: "Делите контейнер с другими?",
    answer: "Нет. Один контейнер = один арендатор. Ваш замок, только вы имеете доступ.",
  },
  {
    question: "Что если понадобится больше места?",
    answer: "Берёте второй контейнер рядом. Или переезжаете в больший (если свободен). Помогаем с переездом.",
  },
  {
    question: "Есть залог?",
    answer: "Нет. Оплачиваете только аренду.",
  },
  {
    question: "Какие скидки при долгосрочной аренде?",
    answer: "3 месяца: -10%, 6 месяцев: -15%, 12 месяцев: -20%.",
  },
  {
    question: "Как работает видеонаблюдение?",
    answer: "Камеры на территории 24/7. Можете смотреть онлайн через приложение. Плюс охранник на въезде.",
  },
];

export const FAQSeller = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="faq" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold text-center mb-12 text-foreground transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Вопросы и ответы
          </h2>

          <Accordion type="single" collapsible className={`w-full transition-all duration-500 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className={`text-center mt-8 transition-all duration-500 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <p className="text-muted-foreground mb-4">Остались вопросы?</p>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a
                href="https://t.me/skladno_tut"
                target="_blank"
                rel="noopener noreferrer"
              >
                Написать в Telegram →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
