import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";

export const Footer = () => {
  const phone = "8 921 798-72-22";
  const phoneHref = "tel:+79217987222";
  const address = "Шушары, Курьерский проезд 1А";

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-6">Контакты</h3>
            <div className="space-y-4">
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
            <h3 className="text-xl font-bold mb-6">Напишите нам</h3>
            <div className="space-y-4">
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
                href="https://t.me/Skladno_tut_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors font-bold"
              >
                <TelegramIcon className="w-5 h-5" />
                <span>Telegram</span>
              </a>

              <div className="pt-4 border-t border-primary-foreground/20">
                <p className="text-sm opacity-75">Прием заявок</p>
                <p className="font-bold">09:00 — 22:00 ежедневно</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-75">
          <p className="font-bold">© 2025 Складно Тут. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
