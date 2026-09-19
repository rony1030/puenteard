import HeroLonepine from "@/components/HeroLonepine";
import StatsHighlight from "@/components/StatsHighlight";
import AboutSection from "@/components/AboutSection";
import RegionsSection from "@/components/RegionsSection";
import PropertySlider from "@/components/PropertySlider";
import LeadBookingForm from "@/components/LeadBookingForm";
import ReviewsSection from "@/components/ReviewsSection";
import ProcessSection from "@/components/ProcessSection";
import AgentSpotlight from "@/components/AgentSpotlight";

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#F8FAFC]">
      <HeroLonepine />
      <StatsHighlight />
      <AboutSection />
      <RegionsSection />
      <PropertySlider />
      <LeadBookingForm />
      <ReviewsSection />
      <ProcessSection />
      <AgentSpotlight />
    </div>
  );
}
