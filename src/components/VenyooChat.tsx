import { useState, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const VenyooChat = () => {
  const [loaded, setLoaded] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const handleClick = () => {
    if (!loaded) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//api.venyoo.ru/wnew.js?wc=venyoo/default/science&widget_id=6459940496605192843';
      document.body.appendChild(script);
      scriptRef.current = script;
      setLoaded(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 px-5 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
      aria-label="Написать нам"
    >
      <MessageCircle className="w-5 h-5 animate-bounce" />
      <span className="font-semibold hidden sm:inline">Написать нам</span>
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
    </button>
  );
};

export default VenyooChat;
