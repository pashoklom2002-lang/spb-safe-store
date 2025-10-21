import { Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/skladno-logo.png";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onScrollToLocation: () => void;
  onScrollToBenefits: () => void;
  onScrollToPricing: () => void;
  onScrollToSecurity: () => void;
  onScrollToFAQ: () => void;
  onScrollToForm: () => void;
}

export const Header = ({
  onScrollToLocation,
  onScrollToBenefits,
  onScrollToPricing,
  onScrollToSecurity,
  onScrollToFAQ,
  onScrollToForm
}: HeaderProps) => {
  const phone = "+7 (812) 123-45-67";
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img src={logo} alt="Складно тут" className="h-16 w-auto" />
          </button>

          {/* Address & Time */}
          <div className="hidden xl:flex items-center gap-4 text-primary text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="font-semibold">Шушары, Курьерский проезд 1А</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">24/7</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-primary">
            <button 
              onClick={onScrollToBenefits}
              className="hover:text-primary/80 transition-colors font-bold text-sm"
            >
              Преимущества
            </button>
            <button 
              onClick={onScrollToLocation}
              className="hover:text-primary/80 transition-colors font-bold text-sm"
            >
              Площадка
            </button>
            <button 
              onClick={onScrollToPricing}
              className="hover:text-primary/80 transition-colors font-bold text-sm"
            >
              Цены
            </button>
            <button 
              onClick={onScrollToSecurity}
              className="hover:text-primary/80 transition-colors font-bold text-sm"
            >
              Безопасность
            </button>
            <button 
              onClick={onScrollToFAQ}
              className="hover:text-primary/80 transition-colors font-bold text-sm"
            >
              FAQ
            </button>
          </nav>

          {/* Contact Info & CTA Button */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <Button
              onClick={onScrollToForm}
              className="bg-black text-white hover:bg-black/90 font-bold hidden md:flex"
            >
              Арендовать контейнер
            </Button>
            
            <a 
              href={`tel:${phone}`}
              className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">{phone}</span>
            </a>
            
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-black hover:bg-black/80 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
              </a>
              
              <a
                href={`https://t.me/${phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#229ED9] hover:bg-[#229ED9]/90 transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
