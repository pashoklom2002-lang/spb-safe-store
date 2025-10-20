import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Что можно хранить?",
    answer: "В контейнерах можно хранить товары для бизнеса, строительные материалы, мебель, оборудование, сезонные товары. Запрещены легковоспламеняющиеся, взрывоопасные и незаконные вещества.",
  },
  {
    question: "Какой минимальный срок аренды?",
    answer: "Минимальный срок аренды — 1 месяц. Вы можете продлить аренду в любой момент или расторгнуть договор с уведомлением за 2 недели.",
  },
  {
    question: "Нужен ли залог?",
    answer: "Да, требуется залог в размере месячной арендной платы. Он возвращается полностью при окончании аренды и сдаче ключей.",
  },
  {
    question: "Есть ли отопление или вентиляция?",
    answer: "Контейнеры не отапливаются, но герметичны и защищают от осадков. По запросу можем установить вентиляцию или обогреватель за дополнительную плату.",
  },
  {
    question: "Можно ли попасть ночью?",
    answer: "Да, доступ к контейнерам круглосуточный. У вас будет личный ключ, и вы сможете приезжать в любое удобное время, даже ночью.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответы на популярные вопросы об аренде контейнеров
          </p>

          <Accordion type="single" collapsible className="w-full">
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
