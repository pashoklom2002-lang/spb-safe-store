import { useMemo, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { SpinWheel, ChristmasDecor, PhoneForm, generateSectors, getWheelState, setWheelState } from '@/components/SpinWheel';
import { Prize } from '@/components/SpinWheel/types';
import logo from '@/assets/skladno-logo.png';

const Wheel = () => {
  const [wonPrize, setWonPrize] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);
  const [previousPrize, setPreviousPrize] = useState<string | null>(null);

  const sectors = useMemo(() => generateSectors(), []);

  useEffect(() => {
    const state = getWheelState();
    if (state?.played) {
      setAlreadyPlayed(true);
      setPreviousPrize(state.prize);
    }
  }, []);

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

  return (
    <>
      <Helmet>
        <title>Колесо удачи | СкладноТут — Выиграй скидку!</title>
        <meta name="description" content="Крутите колесо удачи и получите гарантированный приз — скидку до 17% или 2 недели бесплатного хранения!" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        {/* Logo */}
        <div className="mb-6">
          <img src={logo} alt="СкладноТут" className="h-12 w-auto" />
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            🎄 Новогодняя удача! 🎄
          </h1>
          <p className="text-muted-foreground text-lg">
            Крутите колесо и получите гарантированный приз!
          </p>
        </div>

        {/* Main content */}
        <div className="w-full max-w-lg">
          {alreadyPlayed ? (
            <div className="bg-card rounded-2xl p-8 text-center border border-border shadow-lg">
              <div className="text-6xl mb-4">🎁</div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Вы уже участвовали!
              </h2>
              <p className="text-muted-foreground mb-4">
                Ваш приз:
              </p>
              <div className="text-2xl font-bold text-primary">
                {previousPrize}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Мы свяжемся с вами в ближайшее время
              </p>
              <a
                href="/"
                className="inline-block mt-6 text-primary hover:underline"
              >
                ← Перейти на сайт
              </a>
            </div>
          ) : showForm && wonPrize ? (
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <PhoneForm prize={wonPrize} onSuccess={handleFormSuccess} />
            </div>
          ) : (
            <ChristmasDecor>
              <SpinWheel
                sectors={sectors}
                onSpinEnd={handleSpinEnd}
                disabled={!!wonPrize}
              />
            </ChristmasDecor>
          )}
        </div>

        {/* Footer link */}
        {!alreadyPlayed && (
          <a
            href="/"
            className="mt-8 text-muted-foreground hover:text-primary transition-colors"
          >
            ← Перейти на сайт
          </a>
        )}
      </div>
    </>
  );
};

export default Wheel;
