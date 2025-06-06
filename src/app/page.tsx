
import Navbar from '@/components/layout/navbar';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import EducationSection from '@/components/sections/education';
import WorkSection from '@/components/sections/work';
import ExperienceSection from '@/components/sections/experience';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <WorkSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
