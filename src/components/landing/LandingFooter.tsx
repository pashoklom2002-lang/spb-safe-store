import { Phone, MapPin } from "lucide-react";

export const LandingFooter = () => {
  const phone = "+7 (995) 606-22-73";
  const phoneHref = "tel:+79956062273";

  return (
    <footer className="bg-secondary/30 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Контакты</h3>
            <a 
              href={phoneHref}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{phone}</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Приём заявок: 09:00–22:00 ежедневно
            </p>
            <p className="text-sm text-primary mt-1">
              Доступ к контейнерам: 24/7
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Адрес</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Шушары, Курьерский проезд 1А</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              10 минут от сортировочного центра
            </p>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Юр. информация</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>ИП Никитина-Шин Виктория Викторовна</p>
              <p>ОГРНИП: 325784700357201</p>
              <p>ИНН: 782619801384</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          © 2025 Складно тут. Все права защищены.
        </div>
      </div>
    </footer>
  );
};
