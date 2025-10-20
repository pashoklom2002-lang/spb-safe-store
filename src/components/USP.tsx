import { Clock, Shield, Zap, MapPin, FileText } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Доступ 24/7",
  },
  {
    icon: Shield,
    title: "Камеры и охрана",
  },
  {
    icon: Zap,
    title: "Свет и электричество",
  },
  {
    icon: MapPin,
    title: "Удобный заезд",
  },
  {
    icon: FileText,
    title: "Прозрачные тарифы",
  },
];

export const USP = () => {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 min-w-[120px]"
            >
              <div className="bg-primary/10 p-4 rounded-full">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
