import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqItems = [
  {
    question: "Что можно хранить?",
    answer: "Коробки, мебель, велосипеды, сезонные вещи, спортинвентарь, оборудование, товар и инвентарь для бизнеса.",
  },
  {
    question: "Что нельзя хранить?",
    answer: "Продукты, легковоспламеняющиеся вещества, химикаты и всё, что может создать опасность. Если не уверены — уточните у менеджера.",
  },
  {
    question: "Как устроен доступ?",
    answer: "Доступ 7 дней в неделю. Вы получаете ключ от своего замка и приезжаете в удобное время. Можно обсуждать гибкие условия доступа под ваши задачи.",
  },
  {
    question: "Есть ли охрана и камеры?",
    answer: "Да. Площадка под наблюдением, стоят камеры, контейнер закрывается вашим замком.",
  },
  {
    question: "Минимальный срок аренды?",
    answer: "От 1 месяца. Далее продлеваете как удобно.",
  },
  {
    question: "Как оформить аренду?",
    answer: "Пишите нам. Подберём размер, покажем свободные боксы и оформим договор онлайн.",
  },
  {
    question: "Можно подъехать прямо к контейнеру?",
    answer: "Да. Асфальтированная площадка, подъезд для легковых и небольших грузовых машин.",
  },
  {
    question: "Как происходит оплата?",
    answer: "Переводы, карты, оплата от физлиц и юрлиц. Без скрытых платежей.",
  },
  {
    question: "Можно поменять контейнер по ходу аренды?",
    answer: "Да, если есть свободные боксы подходящего размера.",
  },
  {
    question: "Если возник вопрос?",
    answer: "Мы на связи ежедневно. Пишите в Telegram или WhatsApp — ответим быстро и поможем по ситуации.",
  },
];

export const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold text-center mb-12 text-foreground transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            FAQ
          </h2>

          <Accordion type="single" collapsible className={`w-full transition-all duration-500 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
