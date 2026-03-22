import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const VenyooChat = () => {
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    if (!loaded) {
      setLoaded(true);
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//api.venyoo.ru/wnew.js?wc=venyoo/default/science&widget_id=6459940496605192843';
      script.onload = () => {
        // Auto-click the Venyoo widget button once loaded
        setTimeout(() => {
          const venyooBtn = document.querySelector('.venyoo-activator, .venyoo-widget-button, [id*="venyoo"]') as HTMLElement;
          if (venyooBtn) venyooBtn.click();
        }, 500);
      };
      document.body.appendChild(script);
    }
  };

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
