import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PrivacyPolicyDialog } from "@/components/PrivacyPolicyDialog";
import { Phone, MapPin, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { VKIcon } from "@/components/icons/VKIcon";

const formSchema = z.object({
  name: z.string().trim().min(2, "Введите имя (минимум 2 символа)"),
  phone: z.string().trim().min(10, "Введите корректный телефон"),
  containerType: z.enum(["5m", "15m", "30m"], { required_error: "Выберите размер контейнера" }),
  rentalPeriod: z.string().trim().min(1, "Выберите срок аренды"),
});

export const FinalCTA = () => {
  const [loading, setLoading] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    containerType: "",
    rentalPeriod: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (loading) return;
    setLoading(true);

    try {
      const validated = formSchema.safeParse(formData);
      if (!validated.success) {
        toast.error("Проверьте поля формы");
        return;
      }

      console.log("[lead] payload", validated.data);

      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);

      let response: Response;
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
      } finally {
        clearTimeout(timer);
      }

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

      toast.success("Заявка отправлена! Перезвоним за 5 минут");
      setFormData({ name: "", phone: "", containerType: "", rentalPeriod: "" });

    } finally {
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
    <section ref={ref} id="contact-form" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-primary-foreground transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Начать использовать
        </h2>
        <p className={`text-center text-primary-foreground/80 mb-12 max-w-xl mx-auto transition-all duration-500 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Напишите в Telegram или позвоните — обсудим ваши потребности.<br />
          Ответим за 5 минут. Договор онлайн, въезд в день оплаты.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className={`transition-all duration-500 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="bg-primary-foreground rounded-2xl p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-bold text-background mb-6">Свяжитесь с нами</h3>
              
              <a
                href="https://t.me/skladno_tut"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-xl transition-colors font-bold"
              >
                <TelegramIcon className="w-6 h-6" />
                Написать в Telegram
              </a>

              <a
                href="https://wa.me/+79217987222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#25D366] hover:bg-[#22c55e] text-white rounded-xl transition-colors font-bold"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Написать в WhatsApp
              </a>

              <a
                href="tel:+79956062273"
                className="flex items-center gap-4 p-4 bg-background hover:bg-muted text-foreground rounded-xl transition-colors font-bold"
              >
                <Phone className="w-6 h-6 text-primary" />
                +7 (995) 606-22-73
              </a>

              <a
                href="https://vk.com/skladnotut"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#4a76a8] hover:bg-[#3d6898] text-white rounded-xl transition-colors font-bold"
              >
                <VKIcon className="w-6 h-6" />
                Написать в VK
              </a>

              <div className="pt-4 border-t border-border/20 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Шушары, Курьерский проезд 1А</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Приём заявок: 09:00-22:00 ежедневно</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-medium">
                  🚗 10 минут от КАД | 📍 Доступ к контейнерам: 24/7
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`transition-all duration-500 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <form
              onSubmit={handleSubmit}
              className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                Оставьте заявку — перезвоним за 5 минут
              </h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Имя *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">Телефон *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                    required
                    className="mt-2"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <Label className="text-foreground">Размер контейнера *</Label>
                  <Select
                    value={formData.containerType}
                    onValueChange={(v) => setFormData({ ...formData, containerType: v })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите размер" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5m">5 м² (5 000₽/мес)</SelectItem>
                      <SelectItem value="15m">15 м² (8 000₽/мес)</SelectItem>
                      <SelectItem value="30m">30 м² (19 000₽/мес)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-foreground">Срок аренды *</Label>
                  <Select
                    value={formData.rentalPeriod}
                    onValueChange={(v) => setFormData({ ...formData, rentalPeriod: v })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите срок" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1 месяц">1 месяц</SelectItem>
                      <SelectItem value="3 месяца">3 месяца (-10%)</SelectItem>
                      <SelectItem value="6 месяцев">6 месяцев (-15%)</SelectItem>
                      <SelectItem value="12 месяцев">12 месяцев (-20%)</SelectItem>
                      <SelectItem value="другой срок">Другой срок</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-6 text-lg"
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с <PrivacyPolicyDialog />
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className={`mt-12 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-out delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <iframe 
            src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=30.417874%2C59.799891&mode=search&oid=203985924246&ol=biz&pt=30.392470%2C59.799270&sll=30.384915%2C59.799891&source=mapframe&sspn=0.077419%2C0.029020&text=%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%BD%D0%BE%20%D1%82%D1%83%D1%82&utm_source=mapframe&z=13" 
            width="100%" 
            height="400" 
            frameBorder="0"
            allowFullScreen
            style={{ position: 'relative' }}
            title="Складно тут на Яндекс.Картах"
          />
        </div>
      </div>
    </section>
  );
};
