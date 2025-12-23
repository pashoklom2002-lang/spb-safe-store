import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Gift, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PhoneFormProps {
  prize: string;
  onSuccess: () => void;
}

const PhoneForm = ({ prize, onSuccess }: PhoneFormProps) => {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    
    // If user starts typing without +7, add it
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
      const response = await fetch('https://api.skladnotut.ru/send-to-bitrix.php', {
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
    if (prizeValue.includes('%')) {
      return `скидку ${prizeValue} на весь срок хранения`;
    }
    return prizeValue;
  };

  return (
    <div className="text-center space-y-6">
      <div className="space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
          <Gift className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">🎉 Поздравляем!</h3>
        <p className="text-lg text-muted-foreground">Вы выиграли:</p>
        <div className="text-2xl font-bold text-primary py-2">{formatPrizeText(prize)}</div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Введите телефон, чтобы забрать приз
          </p>
          <Input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={handlePhoneChange}
            className="text-center text-lg h-12 bg-secondary border-border focus:border-primary"
            autoFocus
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-12 text-lg font-semibold"
          disabled={!isValidPhone() || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Отправка...
            </>
          ) : (
            'Забрать приз'
          )}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </div>
  );
};

export default PhoneForm;
