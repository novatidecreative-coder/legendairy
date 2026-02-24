import Hero from '@/components/Hero';
import WeKeepYouCool from '@/components/WeKeepYouCool';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import EmergencyBanner from '@/components/EmergencyBanner';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Hero />
      <WeKeepYouCool />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <EmergencyBanner />
    </>
  );
}
