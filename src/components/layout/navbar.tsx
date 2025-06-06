"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { MenuIcon, HomeIcon, User, Code, BookOpen, Briefcase, Mail, XIcon, LucideHexagon } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home', icon: <HomeIcon className="h-5 w-5" /> },
  { href: '#about', label: 'About', icon: <User className="h-5 w-5" /> },
  { href: '#skills', label: 'Skills', icon: <Code className="h-5 w-5" /> },
  { href: '#education', label: 'Education', icon: <BookOpen className="h-5 w-5" /> },
  { href: '#work', label: 'Work', icon: <Briefcase className="h-5 w-5" /> },
  { href: '#contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero'); // Default to hero
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'hero'; // Default if no section is prominent
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is within the top 200px of the viewport
          if (rect.top >= 0 && rect.top <= 200) {
            currentSection = section.id;
            break;
          }
          // If user scrolls past a section, keep it active until next one is near top
          if (rect.top < 0 && rect.bottom > 100) {
             currentSection = section.id;
          }
        }
      }
      // Special case for bottom of page, if contact is visible
      const contactSection = document.getElementById('contact');
      if (contactSection && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        currentSection = 'contact';
      }


      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinkItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Button
          key={link.href}
          variant="ghost"
          asChild
          onClick={() => isMobile && setIsMobileSheetOpen(false)}
          className={`relative group transition-colors text-foreground hover:text-primary
          ${isMobile ? 'w-full justify-start text-lg py-3' : 'text-sm'}
          ${activeSection === link.href.substring(1) ? 'text-primary font-semibold' : ''}`}
        >
          <Link href={link.href}>
            {isMobile && <span className="mr-3">{link.icon}</span>}
            {link.label}
            {activeSection === link.href.substring(1) && !isMobile && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300"></span>
            )}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300 ease-in-out bg-background shadow-sm border-b-2 border-primary/30"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#hero" className="flex items-center gap-2" onClick={() => setIsMobileSheetOpen(false)}>
          <LucideHexagon className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold font-headline text-primary">Jigar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-1 md:flex">
          <NavLinkItems />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="mb-6 flex items-center justify-between">
                 <Link href="#hero" className="flex items-center gap-2" onClick={() => setIsMobileSheetOpen(false)}>
                    <LucideHexagon className="h-7 w-7 text-primary" />
                    <span className="text-xl font-bold font-headline text-primary">Jigar</span>
                  </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                    <XIcon className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-2">
                <NavLinkItems isMobile={true} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
