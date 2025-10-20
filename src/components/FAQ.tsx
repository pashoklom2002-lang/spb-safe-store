import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Что можно и нельзя хранить?",
    answer: "Можно хранить: мебель, товары для бизнеса, стройматериалы, оборудование, инструменты, сезонные вещи. Запрещены: легковоспламеняющиеся, взрывоопасные, токсичные вещества и незаконные предметы.",
  },
  {
    question: "Как попасть на площадку ночью?",
    answer: "Доступ к контейнерам круглосуточный. У вас будет личный ключ, и вы сможете приезжать в любое удобное время — даже ночью. Охрана работает 24/7.",
  },
  {
    question: "Есть ли залог или предоплата?",
    answer: "Да, требуется залог в размере месячной арендной платы. Он возвращается полностью при окончании аренды и сдаче ключей. Первый месяц оплачивается сразу.",
  },
  {
    question: "Можно ли подключить свет?",
    answer: "Да, освещение и розетки уже есть в каждом контейнере. Электричество включено в стоимость аренды. Дополнительное подключение возможно по запросу.",
  },
  {
    question: "Какой минимальный срок аренды?",
    answer: "Минимальный срок аренды — 1 день. Вы можете арендовать на любой срок: день, неделю, месяц, сезон или год. Договор можно продлить в любой момент.",
  },
  {
    question: "Можно ли привезти свой контейнер?",
    answer: "Да, мы предоставляем площадку для размещения ваших контейнеров. Цена зависит от площади и срока аренды — уточняйте индивидуально.",
  },
  {
    question: "Подходит ли для бизнеса?",
    answer: "Да, отлично подходит для хранения товаров, оборудования, материалов. Удобный заезд для фур и манипуляторов, асфальтированная территория, охрана и документы.",
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
