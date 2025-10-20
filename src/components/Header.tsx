import { Phone } from "lucide-react";
import logo from "@/assets/skladno-logo.png";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";

export const Header = () => {
  const phone = "+7 (812) 123-45-67";
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#9ACD32] border-b border-[#8BC024] z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Складно тут" className="h-16 w-auto" />
          </button>

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
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
              </a>
              
              <a
                href={`https://t.me/${phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-6 h-6 text-[#0088cc]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
