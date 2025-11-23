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
  name: z.string().trim().min(2),
  phone: z.string().trim().min(10),
  containerType: z.enum(["6m", "15m", "30m"]),
  rentalPeriod: z.string().trim().min(1),
});

export const ContactForm = () => {
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

    try {
      const validated = formSchema.parse(formData);
      setLoading(true);

      const response = await fetch("https://api.skladnotut.ru/send-to-bitrix.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!response.ok) throw new Error("Ошибка сервера");

      toast.success("Заявка отправлена");
      setFormData({ name: "", phone: "", containerType: "", rentalPeriod: "" });

    } catch (err) {
      toast.error("Ошибка отправки заявки");
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

              <div>
                <Label>Размер контейнера *</Label>
                <Select
                  value={formData.containerType}
                  onValueChange={(v) => setFormData({ ...formData, containerType: v })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Выберите размер" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6m">6 м² — Секция</SelectItem>
                    <SelectItem value="15m">15 м² — Личное хранение</SelectItem>
                    <SelectItem value="30m">30 м² — Для бизнеса</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Срок аренды *</Label>
                <Select
                  value={formData.rentalPeriod}
                  onValueChange={(v) => setFormData({ ...formData, rentalPeriod: v })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Выберите срок" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2 месяца">2 месяца</SelectItem>
                    <SelectItem value="3 месяца">3 месяца</SelectItem>
                    <SelectItem value="6 месяцев">6 месяцев</SelectItem>
                    <SelectItem value="11+1 месяцев">11+1 месяцев</SelectItem>
                    <SelectItem value="другой срок">Другой срок</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button disabled={loading} className="w-full bg-primary text-black">
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
