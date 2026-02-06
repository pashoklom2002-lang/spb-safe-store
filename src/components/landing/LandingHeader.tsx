import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-header.png";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface LandingHeaderProps {
  onOpenForm: () => void;
}

export const LandingHeader = ({ onOpenForm }: LandingHeaderProps) => {
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

  const handleOpenForm = () => {
    setIsOpen(false);
    onOpenForm();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px] md:h-[72px]">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img src={logo} alt="Складно" className="h-10 w-auto rounded-lg border-2 border-primary" />
            <span className="hidden sm:inline font-bold text-foreground text-lg">Складно</span>
          </button>

          {/* Right side - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href={phoneHref}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>{phone}</span>
            </a>
            
            <Button
              onClick={onOpenForm}
              className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold"
            >
              Рассчитать стоимость
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-3">
            <a 
              href={phoneHref}
              className="text-primary"
            >
              <Phone className="w-5 h-5" />
            </a>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <div className="text-foreground cursor-pointer">
                  <Menu className="w-6 h-6" />
                </div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href={phoneHref}
                    className="flex items-center gap-2 text-foreground font-medium text-lg"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    {phone}
                  </a>
                  
                  <Button
                    onClick={handleOpenForm}
                    className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold w-full"
                  >
                    Рассчитать стоимость
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
