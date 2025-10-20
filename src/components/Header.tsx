import { Phone } from "lucide-react";
import logo from "@/assets/skladno-logo.png";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";

interface HeaderProps {
  onScrollToUseCases: () => void;
  onScrollToLocation: () => void;
  onScrollToBenefits: () => void;
  onScrollToPricing: () => void;
  onScrollToSecurity: () => void;
  onScrollToFAQ: () => void;
}

export const Header = ({
  onScrollToUseCases,
  onScrollToLocation,
  onScrollToBenefits,
  onScrollToPricing,
  onScrollToSecurity,
  onScrollToFAQ
}: HeaderProps) => {
  const phone = "+7 (812) 123-45-67";
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#9ACD32] border-b border-[#8BC024] z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Складно тут" className="h-16 w-auto" />
          </button>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-white font-medium">
            <button 
              onClick={onScrollToBenefits}
              className="hover:text-white/80 transition-colors"
            >
              Преимущества
            </button>
            <button 
              onClick={onScrollToLocation}
              className="hover:text-white/80 transition-colors"
            >
              Площадка
            </button>
            <button 
              onClick={onScrollToUseCases}
              className="hover:text-white/80 transition-colors"
            >
              Под что подходит
            </button>
            <button 
              onClick={onScrollToPricing}
              className="hover:text-white/80 transition-colors"
            >
              Цены
            </button>
            <button 
              onClick={onScrollToSecurity}
              className="hover:text-white/80 transition-colors"
            >
              Безопасность
            </button>
            <button 
              onClick={onScrollToFAQ}
              className="hover:text-white/80 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${phone}`}
              className="hidden md:flex items-center gap-2 text-white hover:text-white/80 transition-colors"
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
