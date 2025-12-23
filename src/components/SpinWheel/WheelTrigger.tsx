import { useState } from 'react';
import { Gift } from 'lucide-react';
import WheelModal from './WheelModal';

const WheelTrigger = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 px-5 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
        aria-label="Испытай удачу"
      >
        <Gift className="w-5 h-5 animate-bounce" />
        <span className="font-semibold hidden sm:inline">Испытай удачу!</span>
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      </button>

      <WheelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default WheelTrigger;
