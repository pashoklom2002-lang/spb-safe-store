import { useState } from "react";
import { useYandexMetrika } from "@/hooks/useYandexMetrika";
import { WheelTrigger } from "@/components/SpinWheel";

// Landing page components
import {
  LandingHeader,
  LandingFooter,
  HeroSection,
  AdvantagesSection,
  TargetAudienceSection,
  HowItWorksSection,
  ReviewsSection,
  FAQSection,
  FinalCTASection,
  CalculatorFormModal,
} from "@/components/landing";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Initialize Yandex Metrika for SPA tracking and UTM preservation
  useYandexMetrika();

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <main className="min-h-screen">
      <LandingHeader onOpenForm={openForm} />
      
      <div className="pt-[72px]">
        {/* Section 1: Hero */}
        <HeroSection onOpenForm={openForm} />
        
        {/* Section 2: Advantages */}
        <AdvantagesSection />
        
        {/* Section 3: Target Audience */}
        <TargetAudienceSection onOpenForm={openForm} />
        
        {/* Section 4: How It Works */}
        <HowItWorksSection />
        
        {/* Section 5: Reviews */}
        <ReviewsSection onOpenForm={openForm} />
        
        {/* Section 6: FAQ */}
        <FAQSection />
        
        {/* Section 7: Final CTA */}
        <FinalCTASection onOpenForm={openForm} />
        
        <LandingFooter />
      </div>
      
      {/* Calculator Form Modal */}
      <CalculatorFormModal isOpen={isFormOpen} onClose={closeForm} />
      
      {/* Wheel of Fortune trigger button */}
      <WheelTrigger />
    </main>
  );
};

export default Index;
