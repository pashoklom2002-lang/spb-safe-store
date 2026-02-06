import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { VKIcon } from "@/components/icons/VKIcon";

export const Footer = () => {
  const phone = "+7 (995) 606-22-73";
  const phoneHref = "tel:+79956062273";
  const address = "Шушары, Курьерский проезд 1А";

  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a 
                href={phoneHref}
                className="flex items-center gap-3 hover:text-accent transition-colors font-bold"
              >
                <Phone className="w-5 h-5" />
                <span>{phone}</span>
              </a>
              
              <div className="flex items-start gap-3 font-bold">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>{address}</span>
              </div>
            </div>
          </div>

          {/* Мессенджеры */}
          <div>
            <h3 className="text-xl font-bold mb-4">Напишите нам</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/+79217987222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors font-bold"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              
              <a
                href="https://t.me/skladno_tut_channel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors font-bold"
              >
                <TelegramIcon className="w-5 h-5" />
                <span>Telegram</span>
              </a>
              
              <a
                href="https://vk.com/skladnotut"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors font-bold"
              >
                <VKIcon className="w-5 h-5" />
                <span>VK</span>
              </a>

              <div className="pt-3 border-t border-primary-foreground/20">
                <p className="text-sm opacity-75">Прием заявок</p>
                <p className="font-bold">09:00 — 22:00 ежедневно</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-4 text-left text-xs opacity-75">
          <div className="space-y-0.5 mb-2">
            <p className="font-medium">ИП Никитина-Шин Виктория Викторовна</p>
            <p>ОГРНИП: 325784700357201 | ИНН: 782619801384</p>
          </div>
          <p className="font-bold text-center">© 2025 Складно тут. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
