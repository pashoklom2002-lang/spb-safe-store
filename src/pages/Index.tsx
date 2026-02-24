import { useRef } from "react";
import { Header } from "@/components/Header";
import { useYandexMetrika } from "@/hooks/useYandexMetrika";
import { Hero } from "@/components/Hero";

import { FacilityAdvantages } from "@/components/FacilityAdvantages";
import { LocationAdvantage } from "@/components/LocationAdvantage";
import { Benefits } from "@/components/Benefits";
import { Problems } from "@/components/Problems";
import { Pricing } from "@/components/Pricing";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Contacts } from "@/components/Contacts";
import { Reviews } from "@/components/Reviews";
import { Photos } from "@/components/Photos";
import { WheelTrigger } from "@/components/SpinWheel";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Инициализация Яндекс Метрики для SPA-трекинга и сохранения UTM
  useYandexMetrika();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Header 
        onScrollToLocation={() => scrollToSection(locationRef)}
        onScrollToBenefits={() => scrollToSection(benefitsRef)}
        onScrollToPricing={() => scrollToSection(pricingRef)}
        onScrollToFAQ={() => scrollToSection(faqRef)}
        onScrollToForm={scrollToForm}
      />
      <div className="pt-28">
        <Hero onScrollToForm={scrollToForm} />
        
        <div ref={pricingRef}>
          <Pricing onScrollToForm={scrollToForm} />
        </div>
        <Photos />
        <FacilityAdvantages />
        <div ref={benefitsRef}>
          <Benefits />
        </div>
        <HowItWorks />
        <div ref={faqRef}>
          <FAQ />
        </div>
        <Reviews />
        <div ref={formRef}>
          <ContactForm />
        </div>
        <Contacts />
        <Footer />
      </div>
      
      {/* Wheel of Fortune trigger button */}
      <WheelTrigger />
    </main>
  );
};

export default Index;
