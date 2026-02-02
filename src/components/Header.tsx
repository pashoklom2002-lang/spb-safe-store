import { Phone, MapPin, Menu } from "lucide-react";
import logo from "@/assets/logo-header.png";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { VKIcon } from "@/components/icons/VKIcon";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface HeaderProps {
  onScrollToCalculator: () => void;
  onScrollToContainers: () => void;
  onScrollToPhotos: () => void;
  onScrollToFAQ: () => void;
  onScrollToForm: () => void;
}

export const Header = ({
  onScrollToCalculator,
  onScrollToContainers,
  onScrollToPhotos,
  onScrollToFAQ,
  onScrollToForm
}: HeaderProps) => {
  const phone = "+7 (995) 606-22-73";
  const phoneHref = "tel:+79956062273";
  const [isOpen, setIsOpen] = useState(false);
  
  // Initialize Top.Mail.Ru counter
  useEffect(() => {
    const _tmr = (window as any)._tmr || ((window as any)._tmr = []);
    _tmr.push({id: "3719533", type: "pageView", start: (new Date()).getTime()});
    
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.id = "tmr-code";
    script.src = "https://top-fwz1.mail.ru/js/code.js";
    
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (scrollFunc: () => void) => {
    scrollFunc();
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img src={logo} alt="Складно тут" className="h-12 w-auto rounded-lg border-2 border-primary" />
          </button>

          {/* Address Badge */}
          <div className="hidden sm:flex items-center gap-1.5 bg-card text-foreground px-2 py-1 sm:px-3 sm:py-2 rounded-lg border border-primary/50 text-[10px] sm:text-sm font-bold">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-primary" />
            <span className="leading-tight">Шушары, Курьерский проезд 1А</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-foreground">
            <button 
              onClick={onScrollToCalculator}
              className="hover:text-primary transition-colors font-bold text-sm"
            >
              Калькулятор
            </button>
            <button 
              onClick={onScrollToContainers}
              className="hover:text-primary transition-colors font-bold text-sm"
            >
              Цены
            </button>
            <button 
              onClick={onScrollToPhotos}
              className="hover:text-primary transition-colors font-bold text-sm"
            >
              Площадка
            </button>
            <button 
              onClick={onScrollToFAQ}
              className="hover:text-primary transition-colors font-bold text-sm"
            >
              FAQ
            </button>
          </nav>

          {/* Contact Info & CTA Button */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <div className="lg:hidden text-primary cursor-pointer">
                  <Menu className="w-10 h-8" strokeWidth={3} />
                </div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button 
                    onClick={() => handleNavClick(onScrollToCalculator)}
                    className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    💰 Калькулятор экономии
                  </button>
                  <button 
                    onClick={() => handleNavClick(onScrollToContainers)}
                    className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    📦 Цены и размеры
                  </button>
                  <button 
                    onClick={() => handleNavClick(onScrollToPhotos)}
                    className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    📷 Наша площадка
                  </button>
                  <button 
                    onClick={() => handleNavClick(onScrollToFAQ)}
                    className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    ❓ FAQ
                  </button>
                  <Button
                    onClick={() => handleNavClick(onScrollToForm)}
                    className="bg-primary text-primary-foreground hover:bg-primary-hover font-bold w-full mt-4"
                  >
                    Забронировать контейнер
                  </Button>
                  
                  <div className="pt-4 border-t border-border">
                    <a 
                      href={phoneHref}
                      className="flex items-center gap-2 text-foreground font-bold mb-4"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      {phone}
                    </a>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://wa.me/+79217987222"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsAppIcon className="w-8 h-8" />
                      </a>
                      <a
                        href="https://t.me/skladno_tut"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TelegramIcon className="w-8 h-8" />
                      </a>
                      <a
                        href="https://vk.com/skladnotut"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <VKIcon className="w-8 h-8" />
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            <Button
              onClick={onScrollToForm}
              className="bg-primary text-primary-foreground hover:bg-primary-hover font-bold hidden md:flex"
            >
              Забронировать
            </Button>
            
            <a 
              href={phoneHref}
              className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-bold"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{phone}</span>
            </a>
            
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/+79217987222"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-[26px] h-[26px]" />
              </a>
              
              <a
                href="https://t.me/skladno_tut"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-[26px] h-[26px]" />
              </a>
              
              <a
                href="https://vk.com/skladnotut"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity hidden sm:block"
                aria-label="VK"
              >
                <VKIcon className="w-[26px] h-[26px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
