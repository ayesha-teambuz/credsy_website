import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import EMICalculator from "@/components/EMICalculator";
import HustleSection from "@/components/HustleSection";
import ProductsGrid from "@/components/ProductsGrid";
import Partners from "@/components/Partners";
import FoundersNote from "@/components/FoundersNote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-slate-50">
      <Navbar />
      <Hero />
      <Ticker />
      <div className="space-y-0">
        <EMICalculator />
        <HustleSection />
        <ProductsGrid />
      </div>
      <div id="about" className="space-y-0">
        <Partners />
        <FoundersNote />
      </div>
      <Footer />
    </main>
  );
}
