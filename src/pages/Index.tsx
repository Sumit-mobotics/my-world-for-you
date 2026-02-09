import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import ReasonsSection from "@/components/ReasonsSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import FinaleSection from "@/components/FinaleSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />
      <ReasonsSection />
      <LoveLetterSection />
      <FinaleSection />
    </div>
  );
};

export default Index;
