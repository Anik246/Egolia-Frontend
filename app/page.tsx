import Navbar from '@/components/layout/navbar';

import { HeroSection } from '@/components/sections/HeroSection';
import { InvestmentAreasSection } from '@/components/sections/InvestmentAreasSection';
import { PlaceholderSection } from '@/components/sections/PlaceholderSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Navbar />

      <HeroSection />
      <PlaceholderSection id="about" title="About" />
      <InvestmentAreasSection />
      <PlaceholderSection id="news" title="News" />

      <ContactSection />
      <Footer />
    </main>
  );
}
