// app/page.js
import About from '@/components/About';
import HeroSlider from '@/components/HeroSlider';
import PrecisionSection from '@/components/PrecisionSection';
import Sectors from '@/components/Sectors';
import IndustryFocus from '@/components/IndustryFocus';
import KeyBenefits from '@/components/KeyBenefits';
import Services from '@/components/Services';
import TechnologyFeatures from '@/components/TechnologyFeatures';
import SavingsCalculator from '@/components/SavingsCalculator';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import HeroVideo from '@/components/HeroVideo';
import OemLogos from '@/components/OemLogos';


export default function Home() {
  return (
    <>
<Sectors />
      
      <About />
      <PrecisionSection />
      <HeroSlider />
     
      
      <IndustryFocus />
      {/* <HeroVideo /> */}
      
      
      <KeyBenefits />
      <Services />
      <TechnologyFeatures />
      <SavingsCalculator />
     
      {/* <BlogSection /> */}
      <OemLogos />
      {/* <ContactSection /> */}
    </>
  );
}