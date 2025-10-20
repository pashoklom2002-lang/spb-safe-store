import { Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/skladno-logo.png";

export const Header = () => {
  const phone = "+7 (812) 123-45-67";
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
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
              className="hidden md:flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">{phone}</span>
            </a>
            
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-accent" />
              </a>
              
              <a
                href={`https://t.me/${phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
