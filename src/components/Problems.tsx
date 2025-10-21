import { Package, Briefcase, PaintBucket, Truck, Bike, Gift } from "lucide-react";

const situations = [
  {
    number: "01",
    title: "Для ваших личных вещей",
    description: "Когда вещей в гардеробе много, а выкидывать жалко",
  },
  {
    number: "02",
    title: "Для бизнеса",
    description: "Удобно поставщикам для маркетплейсов",
  },
  {
    number: "03",
    title: "Ремонт",
    description: "Если затеяли в гостиной ремонт, но диван на кухню не поставишь",
  },
  {
    number: "04",
    title: "Переезд",
    description: "Чтобы не тащить все вещи разом",
  },
  {
    number: "05",
    title: "Сезонное хранение",
    description: "Шины, велосипед, консервные банки",
  },
  {
    number: "06",
    title: "И всё, что угодно",
    description: "Ваш любимый плюшевый медвежонок, лишний дневник, курьёза… Список можно продолжать бесконечно",
  },
];

export const Problems = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-sm text-primary mb-2 uppercase tracking-wider">Когда мы нужны</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Контейнеры помогут в самых разных жизненных ситуациях
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {situations.map((situation, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all group"
              >
                <div className="text-primary text-sm font-bold mb-3">{situation.number}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {situation.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {situation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
