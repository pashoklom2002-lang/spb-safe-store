import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PrivacyPolicyDialog } from "./PrivacyPolicyDialog";

const formSchema = z.object({
  name: z.string().trim().min(2, "Имя должно содержать минимум 2 символа").max(100, "Имя слишком длинное"),
  phone: z.string().trim().min(10, "Введите корректный номер телефона").max(20, "Номер слишком длинный"),
  containerType: z.enum(["6m", "15m", "30m"], { required_error: "Выберите размер контейнера" }),
  rentalPeriod: z.string().trim().min(1, "Выберите срок аренды").max(100),
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
      const validatedData = formSchema.parse(formData);
      setLoading(true);

      // Отправка в Supabase
      const { error } = await supabase.from("rental_requests").insert([
        {
          name: validatedData.name,
          phone: validatedData.phone,
          container_type: validatedData.containerType,
          rental_period: validatedData.rentalPeriod,
        },
      ]);

      if (error) throw error;

      // Отправка в Bitrix24
      const { error: bitrixError } = await supabase.functions.invoke('send-to-bitrix', {
        body: {
          name: validatedData.name,
          phone: validatedData.phone,
          containerType: validatedData.containerType,
          rentalPeriod: validatedData.rentalPeriod,
        }
      });

      if (bitrixError) {
        console.error('Ошибка отправки в Bitrix24:', bitrixError);
      }

      toast.success("Заявка отправлена!", {
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
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
    <section ref={ref} id="contact-form" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Оставьте заявку
          </h2>
        </div>

          <form onSubmit={handleSubmit} className={`bg-card rounded-2xl p-8 shadow-card border border-border transition-all duration-500 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
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
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => {
                    // Маска для телефона
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.startsWith('8')) value = '7' + value.slice(1);
                    if (!value.startsWith('7')) value = '7' + value;
                    value = value.slice(0, 11);
                    
                    let formatted = '+7';
                    if (value.length > 1) formatted += ' (' + value.slice(1, 4);
                    if (value.length >= 4) formatted += ') ' + value.slice(4, 7);
                    if (value.length >= 7) formatted += '-' + value.slice(7, 9);
                    if (value.length >= 9) formatted += '-' + value.slice(9, 11);
                    
                    setFormData({ ...formData, phone: formatted });
                  }}
                  required
                  maxLength={20}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="containerType">Размер контейнера *</Label>
                <Select
                  value={formData.containerType}
                  onValueChange={(value) => setFormData({ ...formData, containerType: value })}
                >
                  <SelectTrigger id="containerType" className="mt-2">
                    <SelectValue placeholder="Выберите размер" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6m">6 м² — Секция в контейнере</SelectItem>
                    <SelectItem value="15m">15 м² — Для личного хранения</SelectItem>
                    <SelectItem value="30m">30 м² — Для склада и бизнеса</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="rentalPeriod">Срок аренды *</Label>
                <Select
                  value={formData.rentalPeriod}
                  onValueChange={(value) => setFormData({ ...formData, rentalPeriod: value })}
                >
                  <SelectTrigger id="rentalPeriod" className="mt-2">
                    <SelectValue placeholder="Выберите срок аренды" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2 месяца">2 месяца</SelectItem>
                    <SelectItem value="3 месяца">3 месяца</SelectItem>
                    <SelectItem value="6 месяцев">6 месяцев</SelectItem>
                    <SelectItem value="11+1 месяцев">11+1 месяцев</SelectItem>
                    <SelectItem value="другой срок">другой срок</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                disabled={loading}
              >
                {loading ? "Отправка..." : "Оставить заявку"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с <PrivacyPolicyDialog />
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
