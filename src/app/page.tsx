
import Navbar from '@/components/layout/navbar';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import EducationSection from '@/components/sections/education';
import ProjectsSection from '@/components/sections/projects';
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
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
