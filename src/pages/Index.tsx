import HeroSection from "@/components/HeroSection";
import NoticiasSection from "@/components/NoticiasSection";
import TeacherSection from "@/components/TeacherSection";
import PricingSection from "@/components/PricingSection";
import ShopSection from "@/components/ShopSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <NoticiasSection />
      <TeacherSection />
      <PricingSection />
      <ShopSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
