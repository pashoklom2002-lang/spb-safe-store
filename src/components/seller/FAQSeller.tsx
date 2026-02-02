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
    answer: "90% товаров не требуют тепла: одежда, обувь, электроника, игрушки, посуда, косметика (кроме жидкой), бытовая химия. Контейнер герметичный, сухой, товар не портится. Если есть сомнения — приезжай, посмотри, как другие селлеры хранят.",
  },
  {
    question: "Можно ли снять на 2 недели?",
    answer: "Минимальный срок — 1 месяц. Но если нужно срочно и на короткий срок — напиши в Telegram, попробуем договориться.",
  },
  {
    question: "Как быстро можно заехать?",
    answer: "В день оплаты. Оплатил онлайн → получил код от замка → приехал и работаешь. Без бюрократии.",
  },
  {
    question: "Можно посмотреть контейнер до аренды?",
    answer: "Да, приезжай на площадку, покажем всё за 15-20 минут. Адрес: Шушары, Курьерский проезд 1А. Звони заранее: +7 (995) 606-22-73.",
  },
  {
    question: "Можно поставить свои стеллажи?",
    answer: "Да, разборные стеллажи можно. Главное — чтобы при выезде всё было убрано.",
  },
  {
    question: "Можно делить контейнер с другим арендатором?",
    answer: "Нет. Один контейнер = один арендатор. Твой замок, только ты имеешь доступ.",
  },
  {
    question: "Что если мне понадобится больше места?",
    answer: "Просто берёшь второй контейнер рядом. Или переезжаешь в контейнер побольше (если свободен). Помогаем с переездом.",
  },
  {
    question: "Есть залог?",
    answer: "Нет залога. Оплачиваешь только аренду за месяц вперёд.",
  },
  {
    question: "Какие скидки при долгосрочной аренде?",
    answer: "3 месяца: -10%, 6 месяцев: -15%, 12 месяцев: -20%. Например, 15м² при годовой оплате: 6700₽/мес вместо 8000₽.",
  },
  {
    question: "Как работает видеонаблюдение?",
    answer: "Камеры на территории 24/7. Можешь смотреть онлайн через приложение на телефоне. Плюс охранник на въезде.",
  },
];

export const FAQSeller = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="faq" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Остались вопросы?
          </h2>
          <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Отвечаем на главные
          </p>

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
            <p className="text-muted-foreground mb-4">Не нашёл ответ?</p>
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
                Напиши в Telegram →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
