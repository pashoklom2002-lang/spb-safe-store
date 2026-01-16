import { useState, useEffect, useMemo } from 'react';
import { X } from 'lucide-react';
import SpinWheel from './SpinWheel';
import PhoneForm from './PhoneForm';
import { Prize, generateSectors, getWheelState, setWheelState } from './types';

interface WheelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WheelModal = ({ isOpen, onClose }: WheelModalProps) => {
  const [wonPrize, setWonPrize] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);
  const [previousPrize, setPreviousPrize] = useState<string | null>(null);

  const sectors = useMemo(() => generateSectors(), []);

  useEffect(() => {
    if (isOpen) {
      const state = getWheelState();
      if (state?.played) {
        setAlreadyPlayed(true);
        setPreviousPrize(state.prize);
      }
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSpinEnd = (prize: Prize) => {
    setWonPrize(prize.label);
    setTimeout(() => {
      setShowForm(true);
    }, 500);
  };

  const handleFormSuccess = () => {
    if (wonPrize) {
      setWheelState(wonPrize);
    }
    setAlreadyPlayed(true);
    setPreviousPrize(wonPrize);
    setShowForm(false);
  };

  const handleClose = () => {
    setWonPrize(null);
    setShowForm(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-card hover:bg-secondary transition-colors border border-border"
        aria-label="Закрыть"
      >
        <X className="w-6 h-6 text-primary" />
      </button>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            🎯 Испытай удачу!
          </h2>
          <p className="text-muted-foreground">
            Крути колесо и получи гарантированный приз!
          </p>
        </div>

        {alreadyPlayed ? (
          <div className="bg-card rounded-2xl p-8 text-center border border-border">
            <div className="text-6xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Вы уже участвовали!
            </h3>
            <p className="text-muted-foreground mb-4">
              Ваш приз:
            </p>
            <div className="text-xl font-bold text-primary">
              {previousPrize?.includes('%') 
                ? `скидка ${previousPrize} на весь срок хранения` 
                : previousPrize}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Мы свяжемся с вами в ближайшее время
            </p>
          </div>
        ) : showForm && wonPrize ? (
          <div className="bg-card rounded-2xl p-8 border border-border">
            <PhoneForm prize={wonPrize} onSuccess={handleFormSuccess} />
          </div>
        ) : (
          <SpinWheel
            sectors={sectors}
            onSpinEnd={handleSpinEnd}
            disabled={!!wonPrize}
          />
        )}
      </div>
    </div>
  );
};

export default WheelModal;
