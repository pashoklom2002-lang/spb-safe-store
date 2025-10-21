import { useRef } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocationAdvantage } from "@/components/LocationAdvantage";
import { Benefits } from "@/components/Benefits";
import { Problems } from "@/components/Problems";
import { Pricing } from "@/components/Pricing";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Security } from "@/components/Security";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

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
        onScrollToSecurity={() => scrollToSection(securityRef)}
        onScrollToFAQ={() => scrollToSection(faqRef)}
        onScrollToForm={scrollToForm}
      />
      <div className="pt-20">
        <Hero onScrollToForm={scrollToForm} />
        <Problems />
        <div ref={benefitsRef}>
          <Benefits />
        </div>
        <div ref={locationRef}>
          <LocationAdvantage />
        </div>
        <div ref={pricingRef}>
          <Pricing onScrollToForm={scrollToForm} />
        </div>
        <HowItWorks />
        <CTA onScrollToForm={scrollToForm} />
        <div ref={securityRef}>
          <Security />
        </div>
        <div ref={faqRef}>
          <FAQ />
        </div>
        <div ref={formRef}>
          <ContactForm />
        </div>
        <Footer />
      </div>
      <PromoBanner onScrollToForm={scrollToForm} />
    </main>
  );
};

export default Index;
