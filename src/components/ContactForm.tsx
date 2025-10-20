import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(2, "Имя должно содержать минимум 2 символа").max(100, "Имя слишком длинное"),
  phone: z.string().trim().min(10, "Введите корректный номер телефона").max(20, "Номер слишком длинный"),
  containerType: z.enum(["20ft", "40ft"], { required_error: "Выберите тип контейнера" }),
  rentalPeriod: z.string().trim().min(1, "Выберите срок аренды").max(100),
});

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    containerType: "",
    rentalPeriod: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = formSchema.parse(formData);
      setLoading(true);

      const { error } = await supabase.from("rental_requests").insert([
        {
          name: validatedData.name,
          phone: validatedData.phone,
          container_type: validatedData.containerType,
          rental_period: validatedData.rentalPeriod,
        },
      ]);

      if (error) throw error;

      toast.success("Заявка отправлена!", {
        description: "Мы свяжемся с вами в ближайшее время",
      });

      // Отправка в Telegram (добавьте свой bot token и chat_id)
      const telegramMessage = `Новая заявка!\n\nИмя: ${validatedData.name}\nТелефон: ${validatedData.phone}\nКонтейнер: ${validatedData.containerType}\nСрок: ${validatedData.rentalPeriod}`;
      
      // Reset form
      setFormData({ name: "", phone: "", containerType: "", rentalPeriod: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Ошибка отправки заявки", {
          description: "Попробуйте позже или позвоните нам",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Подберём контейнер под ваш срок — быстро
            </h2>
            <p className="text-muted-foreground">
              Заполните форму — перезвоним в течение 30 минут
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={100}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  maxLength={20}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="containerType">Тип контейнера *</Label>
                <Select
                  value={formData.containerType}
                  onValueChange={(value) => setFormData({ ...formData, containerType: value })}
                >
                  <SelectTrigger id="containerType" className="mt-2">
                    <SelectValue placeholder="Выберите размер" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20ft">20 футов (6 × 2.4 × 2.6 м)</SelectItem>
                    <SelectItem value="40ft">40 футов (12 × 2.4 × 2.6 м)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="rentalPeriod">Срок аренды *</Label>
                <Input
                  id="rentalPeriod"
                  type="text"
                  placeholder="Например: 3 месяца"
                  value={formData.rentalPeriod}
                  onChange={(e) => setFormData({ ...formData, rentalPeriod: e.target.value })}
                  required
                  maxLength={100}
                  className="mt-2"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
                disabled={loading}
              >
                {loading ? "Отправка..." : "Получить подбор"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
