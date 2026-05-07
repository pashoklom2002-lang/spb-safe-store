import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Gift, Loader2, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { PrivacyPolicyDialog } from '@/components/PrivacyPolicyDialog';
import { buildURLWithUTM } from '@/hooks/useYandexMetrika';

interface PhoneFormProps {
  prize: string;
  onSuccess: () => void;
}

const PhoneForm = ({ prize, onSuccess }: PhoneFormProps) => {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const { toast } = useToast();

  const mainSiteUrl = buildURLWithUTM('/');

  // Автоматический редирект после успешной отправки
  useEffect(() => {
    if (!isSubmitted) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Отправка цели в Метрику перед редиректом
          if (typeof window !== 'undefined' && window.ym) {
            window.ym(105962931, 'reachGoal', 'wheel_go_to_site', { from: 'auto_redirect' });
          }
          window.location.href = mainSiteUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, mainSiteUrl]);

  const handleGoToSite = useCallback(() => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(105962931, 'reachGoal', 'wheel_go_to_site', { from: 'button_click' });
    }
    window.location.href = mainSiteUrl;
  }, [mainSiteUrl]);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    
    if (digits.length === 0) return '';
    if (digits.length <= 1) return `+7 (${digits}`;
    if (digits.length <= 4) return `+7 (${digits.slice(1)}`;
    if (digits.length <= 7) return `+7 (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 9) return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    if (value.length === 1 && !value.startsWith('+')) {
      value = '+7' + value;
    }
    
    const formatted = formatPhone(value);
    setPhone(formatted);
  };

  const isValidPhone = () => {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 11;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidPhone()) {
      toast({
        title: "Ошибка",
        description: "Введите корректный номер телефона",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://skladnotut.ru/send-to-bitrix.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `Колесо | Приз: ${prize}`,
          phone: phone,
          containerType: '5m',
          rentalPeriod: '1 месяц',
        }),
      });

      if (response.ok) {
        toast({
          title: "🎉 Поздравляем!",
          description: `Ваш приз "${prize}" зафиксирован! Мы свяжемся с вами в ближайшее время.`,
        });
        setIsSubmitted(true);
        onSuccess();
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте ещё раз или позвоните нам",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPrizeText = (prizeValue: string) => {
    if (prizeValue.includes('%') || prizeValue.includes('−')) {
      const cleanPrize = prizeValue.replace('−', '');
      return `скидку ${cleanPrize} на весь срок хранения`;
    }
    return prizeValue;
  };

  // Экран после успешной отправки с кнопкой и таймером
  if (isSubmitted) {
    return (
      <div className="text-center space-y-5">
        <div className="space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-2">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">🎉 Приз зафиксирован!</h3>
          <p className="text-base text-muted-foreground">Ваш приз:</p>
          <div className="text-xl font-bold text-primary py-1">{formatPrizeText(prize)}</div>
          <p className="text-sm text-muted-foreground">
            Мы свяжемся с вами в ближайшее время
          </p>
        </div>

        <div className="pt-2 space-y-3">
          <Button 
            onClick={handleGoToSite}
            size="lg"
            className="w-full h-14 text-lg font-bold gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Перейти на сайт
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Автоматический переход через{' '}
            <span className="font-bold text-primary">{countdown}</span>{' '}
            {countdown === 1 ? 'секунду' : countdown < 5 ? 'секунды' : 'секунд'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-4">
      <div className="space-y-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-2">
          <Gift className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">🎉 Поздравляем!</h3>
        <p className="text-base text-muted-foreground">Вы выиграли:</p>
        <div className="text-xl font-bold text-primary py-1">{formatPrizeText(prize)}</div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Введите телефон, чтобы забрать приз
          </p>
          <Input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={handlePhoneChange}
            className="text-center text-lg h-11 bg-secondary border-border focus:border-primary"
            autoFocus
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !isValidPhone()}
          className="w-full h-11 text-base font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Gift className="mr-2 h-4 w-4" />
              Забрать приз
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground pt-1">
          Нажимая кнопку, вы соглашаетесь с{' '}
          <PrivacyPolicyDialog />
        </p>
      </form>
    </div>
  );
};

export default PhoneForm;