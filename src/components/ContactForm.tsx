import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PrivacyPolicyDialog } from "./PrivacyPolicyDialog";

const formSchema = z.object({
  name: z.string().trim().min(2, "Введите имя (минимум 2 символа)"),
  phone: z.string().trim().min(10, "Введите корректный телефон"),
});

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Защита от двойной отправки
    if (loading) return;
    setLoading(true);

    try {
      // 2. Валидация с safeParse
      const validated = formSchema.safeParse(formData);
      if (!validated.success) {
        toast.error("Проверьте поля формы");
        return;
      }

      console.log("[lead] payload", validated.data);

      // 3. Запрос с CORS-совместимой конфигурацией и таймаутом
      let response: Response;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);

      try {
        try {
          response = await fetch("https://api.skladnotut.ru/send-to-bitrix.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(validated.data),
            mode: "cors",
            cache: "no-store",
            credentials: "omit",
            signal: controller.signal,
          });
        } catch (fetchErr: any) {
          console.error("[lead] fetch error", fetchErr);

          if (fetchErr?.name === "AbortError") {
            toast.error("Сервер долго отвечает. Попробуйте ещё раз");
            return;
          }

          toast.error("Ошибка сети или CORS. Проверьте подключение");
          return;
        }
      } finally {
        clearTimeout(timer);
      }

      // 4. Обработка ответа
      const rawText = await response.text();
      console.log("[lead] status", response.status);
      console.log("[lead] responseText", rawText);

      if (!response.ok) {
        toast.error(`Ошибка сервера: HTTP ${response.status}`);
        return;
      }

      let json;
      try {
        json = JSON.parse(rawText);
      } catch {
        toast.error("Сервер вернул некорректный ответ");
        return;
      }

      if (json.success !== true) {
        toast.error(json.error ?? "Ошибка сервера");
        return;
      }

      // Успех
      toast.success("Заявка отправлена");
      setFormData({ name: "", phone: "" });

    } finally {
      // 6. setLoading(false) только в finally
      setLoading(false);
    }
  };

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

  return (
    <section ref={ref} id="contact-form" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">

          <div className={`text-center mb-12 transition-all ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            <h2 className="text-4xl font-bold">Оставьте заявку</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`bg-card p-8 rounded-2xl shadow-card border transition-all ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="space-y-6">

              <div>
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                  required
                  className="mt-2"
                />
              </div>


              <Button type="submit" disabled={loading} className="w-full bg-primary text-black">
                {loading ? "Отправка..." : "Оставить заявку"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с <PrivacyPolicyDialog />
              </p>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
};
