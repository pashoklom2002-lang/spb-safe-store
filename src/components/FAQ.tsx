import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Можно хранить?",
    answer: "Вещи, технику, мебель, инвентарь, оборудование, товар, архив.",
  },
  {
    question: "Нельзя хранить?",
    answer: "Продукты, животных, опасные вещества.",
  },
  {
    question: "Есть ли 24/7 доступ?",
    answer: "Да, доступ круглосуточный.",
  },
  {
    question: "Минимальный срок?",
    answer: "От 1 месяца.",
  },
  {
    question: "Как оформить?",
    answer: "Паспорт + договор.",
  },
  {
    question: "Можно подъехать близко?",
    answer: "Да, вплотную к контейнеру.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
            FAQ
          </h2>

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
