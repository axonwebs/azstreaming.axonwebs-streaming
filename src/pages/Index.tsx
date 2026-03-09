import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import CartPanel from "@/components/CartPanel";
import BenefitsSection from "@/components/BenefitsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="lg:flex">
        <div className="flex-1">
          <HeroSection />
          <ProductGrid />
          <BenefitsSection />
          <FooterSection />
        </div>
        <CartPanel />
      </main>
    </div>
  );
};

export default Index;
