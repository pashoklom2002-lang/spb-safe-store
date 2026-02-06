import { useState } from "react";
import { X, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { z } from "zod";
import { PrivacyPolicyDialog } from "@/components/PrivacyPolicyDialog";

interface CalculatorFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  name: z.string().trim().min(2, "Введите имя (минимум 2 символа)"),
  phone: z.string().trim().min(10, "Введите корректный телефон"),
  storageType: z.string().min(1, "Выберите тип хранения"),
  comment: z.string().optional(),
});

const storageTypes = [
  { value: "marketplace", label: "Товары для маркетплейса" },
  { value: "equipment", label: "Оборудование" },
  { value: "personal", label: "Личные вещи" },
  { value: "other", label: "Другое" },
];

export const CalculatorFormModal = ({ isOpen, onClose }: CalculatorFormModalProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    storageType: "",
    comment: "",
  });

  const formatPhone = (value: string) => {
    let v = value.replace(/\D/g, "");
    if (v.startsWith("8")) v = "7" + v.slice(1);
    if (!v.startsWith("7")) v = "7" + v;
    v = v.slice(0, 11);

    let f = "+7";
    if (v.length > 1) f += " (" + v.slice(1, 4);
    if (v.length >= 4) f += ") " + v.slice(4, 7);
    if (v.length >= 7) f += "-" + v.slice(7, 9);
    if (v.length >= 9) f += "-" + v.slice(9, 11);
    return f;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const validated = formSchema.safeParse(formData);
      if (!validated.success) {
        toast.error("Проверьте поля формы");
        setLoading(false);
        return;
      }

      const storageLabel = storageTypes.find(t => t.value === formData.storageType)?.label || formData.storageType;

      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);

      try {
        const response = await fetch("https://api.skladnotut.ru/send-to-bitrix.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            containerType: "calculator",
            rentalPeriod: storageLabel,
            comment: formData.comment || "",
          }),
          mode: "cors",
          cache: "no-store",
          credentials: "omit",
          signal: controller.signal,
        });

        clearTimeout(timer);

        const rawText = await response.text();
        
        if (!response.ok) {
          toast.error(`Ошибка сервера: HTTP ${response.status}`);
          setLoading(false);
          return;
        }

        let json;
        try {
          json = JSON.parse(rawText);
        } catch {
          toast.error("Сервер вернул некорректный ответ");
          setLoading(false);
          return;
        }

        if (json.success !== true) {
          toast.error(json.error ?? "Ошибка сервера");
          setLoading(false);
          return;
        }

        setSuccess(true);
        setFormData({ name: "", phone: "", storageType: "", comment: "" });

      } catch (fetchErr: any) {
        clearTimeout(timer);
        if (fetchErr?.name === "AbortError") {
          toast.error("Сервер долго отвечает. Попробуйте ещё раз");
        } else {
          toast.error("Ошибка сети. Проверьте подключение");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setFormData({ name: "", phone: "", storageType: "", comment: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        {success ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-xl font-bold text-foreground mb-2">
              Спасибо! Мы получили вашу заявку
            </DialogTitle>
            <p className="text-muted-foreground mb-6">
              Менеджер свяжется с вами в течение 15 минут.
            </p>
            <Button onClick={handleClose} variant="outline">
              Закрыть
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground">
                Рассчитать стоимость хранения
              </DialogTitle>
              <p className="text-muted-foreground text-sm">
                Ответим в течение 15 минут
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  placeholder="Как к вам обращаться?"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1.5"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  placeholder="+7"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                  className="mt-1.5"
                  required
                />
              </div>

              <div>
                <Label>Что планируете хранить *</Label>
                <Select
                  value={formData.storageType}
                  onValueChange={(v) => setFormData({ ...formData, storageType: v })}
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    {storageTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="comment">Комментарий</Label>
                <Textarea
                  id="comment"
                  placeholder="Укажите примерный объём или дополнительные пожелания"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="mt-1.5 resize-none"
                  rows={3}
                />
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary-hover"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  "Получить расчёт"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с <PrivacyPolicyDialog />
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
