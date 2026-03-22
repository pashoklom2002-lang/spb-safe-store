import { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const VENYOO_SELECTOR = '.venyoo-activator, .venyoo-widget-button, [id*="venyoo"]';

const VenyooChat = () => {
  const [visible, setVisible] = useState(true);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Preload script on mount
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//api.venyoo.ru/wnew.js?wc=venyoo/default/science&widget_id=6459940496605192843';
    script.onload = () => { scriptLoaded.current = true; };
    document.body.appendChild(script);
  }, []);

  const clickVenyoo = () => {
    const btn = document.querySelector(VENYOO_SELECTOR) as HTMLElement;
    if (btn) {
      btn.click();
      setVisible(false);
      return true;
    }
    return false;
  };

  const handleClick = () => {
    if (clickVenyoo()) return;

    // Widget element not yet in DOM — watch for it
    const observer = new MutationObserver(() => {
      if (clickVenyoo()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Safety timeout to disconnect observer
    setTimeout(() => observer.disconnect(), 5000);
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
      aria-label="Чат"
    >
      <MessageCircle className="w-5 h-5 animate-bounce" />
      <span className="font-semibold">Чат</span>
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
    </button>
  );
};

export default VenyooChat;
