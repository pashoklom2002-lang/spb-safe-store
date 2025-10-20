import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Gallery } from "@/components/Gallery";
import { AdditionalServices } from "@/components/AdditionalServices";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Hero onScrollToForm={scrollToForm} />
      <Problems />
      <Benefits />
      <HowItWorks />
      <Pricing onScrollToForm={scrollToForm} />
      <Gallery />
      <AdditionalServices />
      <Testimonials />
      <div ref={formRef}>
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
