import { Phone, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { VKIcon } from "@/components/icons/VKIcon";

export const Footer = () => {
  const phone = "+7 (995) 606-22-73";
  const phoneHref = "tel:+79956062273";
  const address = "Шушары, Курьерский проезд 1А";

  return (
    <footer className="bg-card text-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Складно тут</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Контейнер-склад для селлеров WB, Ozon, Яндекс.Маркет в Шушарах. 
              Доступ 24/7, своё хранение от 5 000₽/мес.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/+79217987222"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/skladno_tut_channel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <TelegramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://vk.com/skladnotut"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <VKIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a 
                href={phoneHref}
                className="flex items-center gap-3 hover:text-primary transition-colors font-bold"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>{phone}</span>
              </a>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{address}</span>
              </div>

              <div className="pt-2 text-sm text-muted-foreground">
                <p>Приём заявок: 09:00-22:00 ежедневно</p>
                <p className="text-primary font-medium">Доступ к контейнерам: 24/7</p>
              </div>
            </div>
          </div>

          {/* For Sellers */}
          <div>
            <h3 className="text-lg font-bold mb-4">Для селлеров</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Экономия vs фулфилмент до 312к/год</li>
              <li>✅ Фура подъезжает вплотную</li>
              <li>✅ Свой замок, камеры онлайн</li>
              <li>✅ От 1 месяца, без залога</li>
              <li>✅ 10 минут от КАД</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          <div className="space-y-1 mb-3">
            <p className="font-medium">ИП Никитина-Шин Виктория Викторовна</p>
            <p>ОГРНИП: 325784700357201 | ИНН: 782619801384</p>
          </div>
          <p className="font-bold">© 2025 Складно тут. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
