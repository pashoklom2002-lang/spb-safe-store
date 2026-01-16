import { useMemo, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { SpinWheel, PhoneForm, generateSectors, getWheelState, setWheelState } from '@/components/SpinWheel';
import { Prize } from '@/components/SpinWheel/types';
import { useYandexMetrika, buildURLWithUTM } from '@/hooks/useYandexMetrika';
import logo from '@/assets/skladno-logo.png';

const Wheel = () => {
  const [wonPrize, setWonPrize] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);
  const [previousPrize, setPreviousPrize] = useState<string | null>(null);

  const sectors = useMemo(() => generateSectors(), []);
  
  // Инициализация Яндекс Метрики для SPA-трекинга
  const { reachGoal } = useYandexMetrika();

  useEffect(() => {
    const state = getWheelState();
    if (state?.played) {
      setAlreadyPlayed(true);
      setPreviousPrize(state.prize);
    }
  }, []);

  // URL основного сайта с сохранением UTM
  const mainSiteUrl = buildURLWithUTM('/');

  const handleSpinEnd = (prize: Prize) => {
    setWonPrize(prize.label);
    // Отправляем цель в Метрику
    reachGoal('wheel_spin', { prize: prize.label });
    setTimeout(() => {
      setShowForm(true);
    }, 500);
  };

  const handleFormSuccess = () => {
    if (wonPrize) {
      setWheelState(wonPrize);
      // Отправляем цель о заполнении формы
      reachGoal('wheel_form_submit', { prize: wonPrize });
    }
    setAlreadyPlayed(true);
    setPreviousPrize(wonPrize);
    setShowForm(false);
  };

  const formatPrizeDisplay = (prizeValue: string) => {
    if (prizeValue.includes('%') || prizeValue.includes('−')) {
      const cleanPrize = prizeValue.replace('−', '');
      return `скидку ${cleanPrize} на весь срок хранения`;
    }
    return prizeValue;
  };

  return (
    <>
      <Helmet>
        <title>Колесо удачи | СкладноТут — Выиграй скидку!</title>
        <meta name="description" content="Крутите колесо удачи и получите гарантированный приз — скидку до 17% или 2 недели бесплатного хранения!" />
      </Helmet>

      <div className="h-screen w-screen overflow-hidden bg-background flex flex-col items-center justify-center p-3 md:p-4">
        {/* Logo */}
        <div className="shrink-0 mb-2 md:mb-3">
          <img src={logo} alt="СкладноТут" className="h-8 md:h-10 w-auto" />
        </div>

        {/* Title */}
        <div className="text-center shrink-0 mb-2 md:mb-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
            🎯 Испытай удачу! 🎯
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Крутите колесо и получите гарантированный приз!
          </p>
        </div>

        {/* Main content - takes remaining space */}
        <div className="flex-1 w-full max-w-2xl flex items-center justify-center min-h-0">
          {alreadyPlayed ? (
            <div className="bg-card rounded-2xl p-6 text-center border border-border shadow-lg max-w-md w-full">
              <div className="text-5xl mb-3">🎁</div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                Вы уже участвовали!
              </h2>
              <p className="text-muted-foreground mb-3 text-sm">
                Ваш приз:
              </p>
              <div className="text-lg font-bold text-primary">
                {previousPrize && formatPrizeDisplay(previousPrize)}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Мы свяжемся с вами в ближайшее время
              </p>
              <a
                href={mainSiteUrl}
                className="inline-block mt-4 text-primary hover:underline text-sm"
              >
                ← Перейти на сайт
              </a>
            </div>
          ) : showForm && wonPrize ? (
            <div className="bg-card rounded-2xl p-5 md:p-6 border border-border shadow-lg max-w-md w-full">
              <PhoneForm prize={wonPrize} onSuccess={handleFormSuccess} />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <SpinWheel
                sectors={sectors}
                onSpinEnd={handleSpinEnd}
                disabled={!!wonPrize}
              />
            </div>
          )}
        </div>

        {/* Footer link */}
        {!alreadyPlayed && (
          <a
            href={mainSiteUrl}
            className="shrink-0 mt-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            ← Перейти на сайт
          </a>
        )}
      </div>
    </>
  );
};

export default Wheel;