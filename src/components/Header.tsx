import { Phone, MapPin, Clock, Menu, X } from "lucide-react";
import logo from "@/assets/skladno-logo.png";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface HeaderProps {
  onScrollToLocation: () => void;
  onScrollToBenefits: () => void;
  onScrollToPricing: () => void;
  onScrollToFAQ: () => void;
  onScrollToForm: () => void;
}

export const Header = ({
  onScrollToLocation,
  onScrollToBenefits,
  onScrollToPricing,
  onScrollToFAQ,
  onScrollToForm
}: HeaderProps) => {
  const phone = "+7 (921) 798-72-22";
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
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img src={logo} alt="Складно тут" className="h-14 w-auto rounded-xl border border-primary p-0" />
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
              onClick={onScrollToFAQ}
              className="hover:text-primary/80 transition-colors font-bold text-sm"
            >
              FAQ
            </button>
          </nav>

          {/* Contact Info & CTA Button */}
          <div className="flex items-center gap-6 flex-shrink-0">
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-primary hover:text-primary/80"
                >
                  <Menu className="w-8 h-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button 
                    onClick={() => handleNavClick(onScrollToBenefits)}
                    className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    Преимущества
                  </button>
                  <button 
                    onClick={() => handleNavClick(onScrollToLocation)}
                    className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    Площадка
                  </button>
                  <button 
                    onClick={() => handleNavClick(onScrollToPricing)}
                    className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    Цены
                  </button>
                  <button 
                    onClick={() => handleNavClick(onScrollToFAQ)}
                    className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    FAQ
                  </button>
                  <Button
                    onClick={() => handleNavClick(onScrollToForm)}
                    className="bg-black text-white hover:bg-black/90 font-bold w-full mt-4 border-2 border-primary"
                  >
                    Арендовать контейнер
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>

            <Button
              onClick={onScrollToForm}
              className="bg-black text-white hover:bg-black/90 font-bold hidden md:flex border-2 border-primary"
            >
              Арендовать контейнер
            </Button>
            
            <a 
              href={`tel:${phone}`}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium hidden sm:inline">{phone}</span>
            </a>
            
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/+79217987222"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-black hover:bg-black/80 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
              </a>
              
              <a
                href="https://t.me/skladno_tut"
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
