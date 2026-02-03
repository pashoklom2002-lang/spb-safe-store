import { useRef } from "react";
import { Header } from "@/components/Header";
import { useYandexMetrika } from "@/hooks/useYandexMetrika";
import { Footer } from "@/components/Footer";
import { WheelTrigger } from "@/components/SpinWheel";

// B2B Infrastructure components
import { HeroSeller } from "@/components/seller/HeroSeller";
import { CapabilityOverview } from "@/components/seller/CapabilityOverview";
import { SpaceOptions } from "@/components/seller/SpaceOptions";
import { HowItWorks } from "@/components/seller/HowItWorks";
import { UseCaseScenarios } from "@/components/seller/UseCaseScenarios";
import { OperationalDetails } from "@/components/seller/OperationalDetails";
import { Economics } from "@/components/seller/Economics";
import { FAQSeller } from "@/components/seller/FAQSeller";
import { PhotoTour } from "@/components/seller/PhotoTour";
import { FinalCTA } from "@/components/seller/FinalCTA";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);
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

  const scrollToContainers = () => {
    containersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPhotos = () => {
    photosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Header 
        onScrollToContainers={scrollToContainers}
        onScrollToPhotos={scrollToPhotos}
        onScrollToFAQ={() => scrollToSection(faqRef)}
        onScrollToForm={scrollToForm}
      />
      <div className="pt-20">
        {/* Block 1: Hero */}
        <HeroSeller 
          onScrollToContainers={scrollToContainers}
          onScrollToPhotos={scrollToPhotos}
        />
        
        {/* Block 2: Capability Overview */}
        <CapabilityOverview />
        
        {/* Block 3: Space Options */}
        <div ref={containersRef}>
          <SpaceOptions onScrollToForm={scrollToForm} />
        </div>
        
        {/* Block 4: How It Works */}
        <HowItWorks />
        
        {/* Block 5: Use Case Scenarios */}
        <UseCaseScenarios />
        
        {/* Block 6: Operational Details */}
        <OperationalDetails onScrollToForm={scrollToForm} />
        
        {/* Block 7: Economics */}
        <Economics />
        
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
