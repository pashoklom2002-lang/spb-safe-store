import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";

const pricingData = [
  { size: "5м²", month: "3 500₽", three: "3 150₽", six: "2 975₽", year: "2 800₽" },
  { size: "15м²", month: "7 500₽", three: "6 750₽", six: "6 375₽", year: "6 000₽" },
  { size: "30м²", month: "13 000₽", three: "11 700₽", six: "11 050₽", year: "10 400₽" },
];

const included = [
  "Доступ 24/7",
  "Собственный замок",
  "Онлайн-видеонаблюдение",
  "Охрана территории",
  "Широкие проезды для фуры",
  "Электричество",
];

export const Economics = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Экономика
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Прозрачное ценообразование
        </p>

        {/* Pricing Table - Desktop */}
        <div className={`hidden md:block max-w-4xl mx-auto mb-10 transition-all duration-500 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Размер</th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">Месяц</th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">
                    3 мес <span className="text-primary text-xs">-10%</span>
                  </th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">
                    6 мес <span className="text-primary text-xs">-15%</span>
                  </th>
                  <th className="text-center p-4 font-semibold text-primary bg-primary/10">
                    12 мес <span className="text-xs">-20%</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="p-4 font-bold text-foreground">{row.size}</td>
                    <td className="text-center p-4 text-muted-foreground">{row.month}</td>
                    <td className="text-center p-4 text-muted-foreground">{row.three}/мес</td>
                    <td className="text-center p-4 text-muted-foreground">{row.six}/мес</td>
                    <td className="text-center p-4 text-primary font-bold bg-primary/5">{row.year}/мес</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Cards - Mobile */}
        <div className={`md:hidden space-y-4 mb-10 transition-all duration-500 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {pricingData.map((row, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-4">
              <h4 className="font-bold text-foreground text-lg mb-3">{row.size}</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Месяц:</span>
                  <span className="text-foreground">{row.month}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">3 мес:</span>
                  <span className="text-foreground">{row.three}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">6 мес:</span>
                  <span className="text-foreground">{row.six}</span>
                </div>
                <div className="flex justify-between bg-primary/10 rounded p-1 -mx-1">
                  <span className="text-primary font-medium">12 мес:</span>
                  <span className="text-primary font-bold">{row.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className={`max-w-4xl mx-auto mb-10 transition-all duration-500 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-bold text-foreground mb-4">Что включено:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground border-t border-border pt-4">
              Без скрытых платежей. Без залога.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-500 ease-out delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <Button
            size="lg"
            className="bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold"
            asChild
          >
            <a
              href="https://t.me/skladno_tut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <TelegramIcon className="w-5 h-5" />
              Telegram
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#22c55e] text-white font-bold"
            asChild
          >
            <a
              href="https://wa.me/+79217987222"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <a href="tel:+79956062273" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              +7 (995) 606-22-73
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
