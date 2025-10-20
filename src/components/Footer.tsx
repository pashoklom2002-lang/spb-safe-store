import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const Footer = () => {
  const phone = "+7 (812) 123-45-67";
  const email = "info@container-storage.ru";
  const address = "Санкт-Петербург, Промышленная зона";

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-6">Контакты</h3>
            <div className="space-y-4">
              <a 
                href={`tel:${phone}`}
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{phone}</span>
              </a>
              
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{email}</span>
              </a>
              
              <div className="flex items-start gap-3">
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
                href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              
              <a
                href={`https://t.me/${phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Telegram</span>
              </a>

              <div className="pt-4 border-t border-primary-foreground/20">
                <p className="text-sm opacity-75">Прием заявок</p>
                <p className="font-medium">09:00 — 22:00 ежедневно</p>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div>
            <h3 className="text-xl font-bold mb-6">Мы на карте</h3>
            <div className="bg-primary-foreground/10 rounded-lg p-4 h-40 flex items-center justify-center">
              <p className="text-sm text-center opacity-75">
                Интерактивная карта<br />будет доступна скоро
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-75">
          <p>© 2025 храним.ру. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
