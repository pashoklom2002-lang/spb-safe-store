import { useRef } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { UseCases } from "@/components/UseCases";
import { LocationAdvantage } from "@/components/LocationAdvantage";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { HowItWorks } from "@/components/HowItWorks";
import { Security } from "@/components/Security";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Hero onScrollToForm={scrollToForm} />
        <UseCases onScrollToForm={scrollToForm} />
        <LocationAdvantage />
        <Benefits />
        <Pricing onScrollToForm={scrollToForm} />
        <HowItWorks />
        <Security />
        <Gallery />
        <FAQ />
        <div ref={formRef}>
          <ContactForm />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Index;
