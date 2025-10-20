import { useRef } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { USP } from "@/components/USP";
import { Problems } from "@/components/Problems";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Gallery } from "@/components/Gallery";
import { AdditionalServices } from "@/components/AdditionalServices";
import { Testimonials } from "@/components/Testimonials";
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
        <USP />
        <Problems />
        <Benefits />
        <HowItWorks />
        <Pricing onScrollToForm={scrollToForm} />
        <Gallery />
        <AdditionalServices />
        <Testimonials />
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
