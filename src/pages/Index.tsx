import { useRef } from "react";
import { Header } from "@/components/Header";
import { useYandexMetrika } from "@/hooks/useYandexMetrika";
import { Footer } from "@/components/Footer";
import { WheelTrigger } from "@/components/SpinWheel";

// Seller-focused components
import { HeroSeller } from "@/components/seller/HeroSeller";
import { PainCalculator } from "@/components/seller/PainCalculator";
import { UseCasesSeller } from "@/components/seller/UseCasesSeller";
import { ContainersSeller } from "@/components/seller/ContainersSeller";
import { ComparisonTable } from "@/components/seller/ComparisonTable";
import { SellerCases } from "@/components/seller/SellerCases";
import { AdvantagesSeller } from "@/components/seller/AdvantagesSeller";
import { FAQSeller } from "@/components/seller/FAQSeller";
import { PhotoTour } from "@/components/seller/PhotoTour";
import { FinalCTA } from "@/components/seller/FinalCTA";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const containersRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);

  // Initialize Yandex Metrika for SPA tracking and UTM preservation
  useYandexMetrika();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContainers = () => {
    containersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Header 
        onScrollToCalculator={scrollToCalculator}
        onScrollToContainers={scrollToContainers}
        onScrollToPhotos={() => scrollToSection(photosRef)}
        onScrollToFAQ={() => scrollToSection(faqRef)}
        onScrollToForm={scrollToForm}
      />
      <div className="pt-20">
        {/* Block 1: Hero */}
        <HeroSeller 
          onScrollToCalculator={scrollToCalculator}
          onScrollToContainers={scrollToContainers}
        />
        
        {/* Block 2: Pain Calculator */}
        <div ref={calculatorRef}>
          <PainCalculator onScrollToForm={scrollToForm} />
        </div>
        
        {/* Block 3: Use Cases */}
        <UseCasesSeller />
        
        {/* Block 4: Container Options */}
        <div ref={containersRef}>
          <ContainersSeller onScrollToForm={scrollToForm} />
        </div>
        
        {/* Block 5: Comparison Table */}
        <ComparisonTable onScrollToForm={scrollToForm} />
        
        {/* Block 6: Seller Cases */}
        <SellerCases onScrollToForm={scrollToForm} />
        
        {/* Block 7: Advantages */}
        <AdvantagesSeller onScrollToForm={scrollToForm} />
        
        {/* Block 8: FAQ */}
        <div ref={faqRef}>
          <FAQSeller />
        </div>
        
        {/* Block 9: Photo Tour */}
        <div ref={photosRef}>
          <PhotoTour />
        </div>
        
        {/* Block 10: Final CTA + Form + Contacts */}
        <div ref={formRef}>
          <FinalCTA />
        </div>
        
        <Footer />
      </div>
      
      {/* Wheel of Fortune trigger button */}
      <WheelTrigger />
    </main>
  );
};

export default Index;
